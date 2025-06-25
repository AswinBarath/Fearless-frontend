// Progress tracking system
let userProgress = JSON.parse(localStorage.getItem('frontendRoadmapProgress')) || {};

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
};
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
themeToggle.onclick = () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
};

// Calculate and render stats
const { totalTopics, totalSubtopics, totalResources } = calculateTotals();
document.getElementById('totalTopics').textContent = totalTopics;
document.getElementById('totalSubtopics').textContent = totalSubtopics;
document.getElementById('totalResources').textContent = totalResources;

// Progress tracking functions
function updateProgress(topic, subtopicIndex, status) {
    if (!userProgress[topic]) {
        userProgress[topic] = {};
    }
    userProgress[topic][subtopicIndex] = status;
    localStorage.setItem('frontendRoadmapProgress', JSON.stringify(userProgress));
    updateOverallProgress();
    updateTopicProgress(topic);
}

function getTopicProgress(topic) {
    if (!userProgress[topic]) return 0;
    const subtopics = Object.keys(userProgress[topic]);
    const completed = subtopics.filter(index => userProgress[topic][index] === 'completed').length;
    return Math.round((completed / roadmap[topic].subtopics.length) * 100);
}

function updateOverallProgress() {
    let totalCompleted = 0;
    let totalSubtopics = 0;
    
    Object.keys(roadmap).forEach(topic => {
        const topicSubtopics = roadmap[topic].subtopics.length;
        totalSubtopics += topicSubtopics;
        totalCompleted += Math.round((getTopicProgress(topic) / 100) * topicSubtopics);
    });
    
    const overallProgress = Math.round((totalCompleted / totalSubtopics) * 100);
    document.getElementById('overallProgress').style.width = overallProgress + '%';
    document.getElementById('progressText').textContent = overallProgress + '% Complete';
}

function updateTopicProgress(topic) {
    const progress = getTopicProgress(topic);
    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach(card => {
        const title = card.querySelector('h4').textContent;
        if (title === topic) {
            const progressFill = card.querySelector('.topic-progress-fill');
            const progressText = card.querySelector('.topic-progress-text');
            progressFill.style.width = progress + '%';
            progressText.textContent = progress + '%';
        }
    });
}

// Render topics grid with progress
const topicsGrid = document.getElementById('topicsGrid');
function renderTopics() {
    topicsGrid.innerHTML = '';
    Object.entries(roadmap).forEach(([topic, data]) => {
        const progress = getTopicProgress(topic);
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `
            <div class="topic-header">
                <div class="topic-icon"><i class="${data.icon}"></i></div>
                <div class="topic-info">
                    <h4>${topic}</h4>
                    <p>${data.description}</p>
                </div>
            </div>
            <div class="topic-stats">
                <div class="topic-count">${data.subtopics.length} subtopics</div>
                <div class="topic-progress">
                    <div class="topic-progress-bar"><div class="topic-progress-fill" style="width:${progress}%"></div></div>
                    <span class="topic-progress-text">${progress}%</span>
                </div>
            </div>
        `;
        card.onclick = () => openTopicModal(topic);
        topicsGrid.appendChild(card);
    });
}

// Modal logic with progress tracking
const topicModal = document.getElementById('topicModal');
const modalTopicTitle = document.getElementById('modalTopicTitle');
const modalTopicBody = document.getElementById('modalTopicBody');
const closeModal = document.getElementById('closeModal');

function openTopicModal(topic) {
    const data = roadmap[topic];
    modalTopicTitle.textContent = topic;
    
    modalTopicBody.innerHTML = data.subtopics.map((sub, i) => {
        const status = userProgress[topic]?.[i] || 'not-started';
        const statusClass = status === 'completed' ? 'active' : status === 'in-progress' ? 'in-progress' : '';
        const statusText = status === 'completed' ? 'Completed' : status === 'in-progress' ? 'In Progress' : 'Not Started';
        
        return `
            <div class="subtopic">
                <div class="subtopic-header" onclick="toggleSubtopic(this)">
                    <span class="subtopic-title">${i+1}. ${sub.title}</span>
                    <div class="subtopic-status">
                        <button class="status-btn ${statusClass}" onclick="event.stopPropagation(); updateSubtopicStatus('${topic}', ${i}, '${status === 'completed' ? 'not-started' : status === 'in-progress' ? 'completed' : 'in-progress'}')">
                            ${statusText}
                        </button>
                    </div>
                </div>
                <div class="subtopic-content">
                    <div class="subtopic-description">${sub.description}</div>
                    <div class="subtopic-resources">
                        ${sub.resources.map(r => `<a class="resource-link" href="${r.url}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> ${r.name}</a>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    topicModal.classList.add('active');
}

function toggleSubtopic(header) {
    const content = header.nextElementSibling;
    content.classList.toggle('active');
}

function updateSubtopicStatus(topic, subtopicIndex, newStatus) {
    updateProgress(topic, subtopicIndex, newStatus);
    openTopicModal(topic); // Refresh modal to show updated status
}

closeModal.onclick = () => topicModal.classList.remove('active');
topicModal.onclick = (e) => { 
    if (e.target === topicModal) topicModal.classList.remove('active'); 
};

// Search modal logic
const searchToggle = document.getElementById('searchToggle');
const searchModal = document.getElementById('searchModal');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchToggle.onclick = () => { 
    searchModal.classList.add('active'); 
    searchInput.focus(); 
};

closeSearch.onclick = () => searchModal.classList.remove('active');
searchModal.onclick = (e) => { 
    if (e.target === searchModal) searchModal.classList.remove('active'); 
};

searchInput.oninput = function() {
    const q = this.value.toLowerCase();
    let results = [];
    
    Object.entries(roadmap).forEach(([topic, data]) => {
        if (topic.toLowerCase().includes(q)) {
            results.push({ type: 'topic', topic, data });
        }
        data.subtopics.forEach((sub, i) => {
            if (sub.title.toLowerCase().includes(q) || sub.description.toLowerCase().includes(q)) {
                results.push({ type: 'subtopic', topic, sub, index: i });
            }
            sub.resources.forEach(r => {
                if (r.name.toLowerCase().includes(q)) {
                    results.push({ type: 'resource', topic, sub, resource: r });
                }
            });
        });
    });
    
    searchResults.innerHTML = results.length ? results.map(r => {
        if (r.type === 'topic') {
            return `<div class='search-result-item' onclick='openTopicModal("${r.topic}")'>
                <h4>📚 Topic: ${r.topic}</h4>
                <p>${r.data.description}</p>
            </div>`;
        }
        if (r.type === 'subtopic') {
            return `<div class='search-result-item' onclick='openTopicModal("${r.topic}")'>
                <h4>📝 Subtopic: ${r.sub.title}</h4>
                <p>${r.sub.description}</p>
            </div>`;
        }
        if (r.type === 'resource') {
            return `<div class='search-result-item'>
                <a href='${r.resource.url}' target='_blank' rel='noopener noreferrer'>
                    <h4>🔗 Resource: ${r.resource.name}</h4>
                    <p>${r.sub.title} (${r.topic})</p>
                </a>
            </div>`;
        }
    }).join('') : '<div class="search-result-item">🔍 No results found. Try a different search term.</div>';
};

// Quick actions
document.getElementById('resetProgress').onclick = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        userProgress = {};
        localStorage.removeItem('frontendRoadmapProgress');
        updateOverallProgress();
        renderTopics();
    }
};

document.getElementById('exportProgress').onclick = () => {
    const dataStr = JSON.stringify(userProgress, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'frontend-roadmap-progress.json';
    link.click();
    URL.revokeObjectURL(url);
};

document.getElementById('importProgress').onclick = () => {
    document.getElementById('importFile').click();
};

document.getElementById('importFile').onchange = function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedProgress = JSON.parse(e.target.result);
                userProgress = importedProgress;
                localStorage.setItem('frontendRoadmapProgress', JSON.stringify(userProgress));
                updateOverallProgress();
                renderTopics();
                alert('Progress imported successfully!');
            } catch (error) {
                alert('Error importing progress. Please check the file format.');
            }
        };
        reader.readAsText(file);
    }
};

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        topicModal.classList.remove('active');
        searchModal.classList.remove('active');
    }
    if (e.ctrlKey || e.metaKey) {
        if (e.key === 'k') {
            e.preventDefault();
            searchToggle.click();
        }
    }
});

// Initialize the app
renderTopics();
updateOverallProgress();

// Add some nice animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate topic cards on load
    const cards = document.querySelectorAll('.topic-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}); 