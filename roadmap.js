// Frontend Developer Roadmap Data - Comprehensive Edition
const roadmap = {
    "HTML": {
        icon: "fas fa-code",
        description: "Learn the foundation of web development with HTML markup language",
        subtopics: [
            {
                title: "Introduction to HTML",
                description: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure and content of a webpage.",
                resources: [
                    { name: "MDN HTML Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML" },
                    { name: "freeCodeCamp HTML", url: "https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5" },
                    { name: "W3Schools HTML Tutorial", url: "https://www.w3schools.com/html/" }
                ]
            },
            {
                title: "HTML Document Structure",
                description: "Learn about the basic structure of an HTML document including DOCTYPE, html, head, and body elements.",
                resources: [
                    { name: "MDN Document Structure", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML" },
                    { name: "HTML5 Document Structure", url: "https://www.w3schools.com/html/html5_semantic_elements.asp" }
                ]
            },
            {
                title: "Text Elements and Headings",
                description: "Master heading tags (h1-h6), paragraphs, and text formatting elements.",
                resources: [
                    { name: "MDN Text Content", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#text_content" },
                    { name: "HTML Text Formatting", url: "https://www.w3schools.com/html/html_formatting.asp" }
                ]
            },
            {
                title: "Links and Navigation",
                description: "Create hyperlinks, internal links, external links, and navigation menus.",
                resources: [
                    { name: "MDN Creating Hyperlinks", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks" },
                    { name: "HTML Links Tutorial", url: "https://www.w3schools.com/html/html_links.asp" }
                ]
            },
            {
                title: "Images and Media",
                description: "Add images, videos, audio, and other media elements to your web pages.",
                resources: [
                    { name: "MDN Images in HTML", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML" },
                    { name: "HTML Media Elements", url: "https://www.w3schools.com/html/html5_video.asp" }
                ]
            },
            {
                title: "Lists and Tables",
                description: "Create ordered lists, unordered lists, definition lists, and data tables.",
                resources: [
                    { name: "MDN HTML Lists", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists" },
                    { name: "HTML Tables", url: "https://www.w3schools.com/html/html_tables.asp" }
                ]
            },
            {
                title: "Forms and Input Elements",
                description: "Build interactive forms with various input types, validation, and form submission.",
                resources: [
                    { name: "MDN Web Forms", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms" },
                    { name: "HTML Form Elements", url: "https://www.w3schools.com/html/html_forms.asp" }
                ]
            },
            {
                title: "Form Validation",
                description: "Implement client-side form validation using HTML5 attributes and JavaScript.",
                resources: [
                    { name: "MDN Form Validation", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation" },
                    { name: "HTML5 Validation", url: "https://www.w3schools.com/html/html5_form_validation.asp" }
                ]
            },
            {
                title: "Semantic HTML",
                description: "Use semantic HTML elements to improve accessibility and SEO.",
                resources: [
                    { name: "MDN Semantic Elements", url: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics" },
                    { name: "HTML5 Semantic Tags", url: "https://www.w3schools.com/html/html5_semantic_elements.asp" }
                ]
            },
            {
                title: "Accessibility (a11y)",
                description: "Make your HTML accessible to users with disabilities using ARIA attributes and best practices.",
                resources: [
                    { name: "MDN Accessibility", url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility" },
                    { name: "Web Accessibility Guidelines", url: "https://www.w3.org/WAI/WCAG21/quickref/" }
                ]
            },
            {
                title: "ARIA Attributes",
                description: "Learn Accessible Rich Internet Applications (ARIA) attributes for enhanced accessibility.",
                resources: [
                    { name: "MDN ARIA", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" },
                    { name: "ARIA Best Practices", url: "https://www.w3.org/TR/wai-aria-practices/" }
                ]
            },
            {
                title: "SEO Best Practices",
                description: "Optimize your HTML for search engines using meta tags and structured data.",
                resources: [
                    { name: "MDN SEO", url: "https://developer.mozilla.org/en-US/docs/Glossary/SEO" },
                    { name: "Google SEO Guide", url: "https://developers.google.com/search/docs/beginner/seo-starter-guide" }
                ]
            },
            {
                title: "HTML Best Practices",
                description: "Learn HTML coding standards, validation, and best practices for clean, maintainable code.",
                resources: [
                    { name: "HTML Best Practices", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML" },
                    { name: "HTML Validation", url: "https://validator.w3.org/" }
                ]
            },
            {
                title: "HTML5 APIs",
                description: "Explore HTML5 APIs like Geolocation, Web Storage, and Canvas.",
                resources: [
                    { name: "MDN HTML5 APIs", url: "https://developer.mozilla.org/en-US/docs/Web/API" },
                    { name: "HTML5 Canvas", url: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" }
                ]
            }
        ]
    },
    "CSS": {
        icon: "fas fa-palette",
        description: "Style and layout web pages with CSS (Cascading Style Sheets)",
        subtopics: [
            {
                title: "Introduction to CSS",
                description: "CSS (Cascading Style Sheets) is used to style and layout web pages. Learn the basics of CSS syntax and selectors.",
                resources: [
                    { name: "MDN CSS Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps" },
                    { name: "freeCodeCamp CSS", url: "https://www.freecodecamp.org/learn/responsive-web-design/#basic-css" },
                    { name: "W3Schools CSS Tutorial", url: "https://www.w3schools.com/css/" }
                ]
            },
            {
                title: "CSS Selectors",
                description: "Master CSS selectors including element, class, ID, attribute, and pseudo-selectors.",
                resources: [
                    { name: "MDN CSS Selectors", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" },
                    { name: "CSS Selectors Reference", url: "https://www.w3schools.com/cssref/css_selectors.asp" }
                ]
            },
            {
                title: "CSS Box Model",
                description: "Understand the CSS box model including content, padding, border, and margin.",
                resources: [
                    { name: "MDN Box Model", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model" },
                    { name: "CSS Box Model Tutorial", url: "https://www.w3schools.com/css/css_boxmodel.asp" }
                ]
            },
            {
                title: "CSS Layout Fundamentals",
                description: "Learn about display properties, positioning, and basic layout techniques.",
                resources: [
                    { name: "MDN CSS Layout", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout" },
                    { name: "CSS Layout Methods", url: "https://www.w3schools.com/css/css_layout.asp" }
                ]
            },
            {
                title: "CSS Positioning",
                description: "Master static, relative, absolute, fixed, and sticky positioning.",
                resources: [
                    { name: "MDN CSS Positioning", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/position" },
                    { name: "CSS Position Tutorial", url: "https://www.w3schools.com/css/css_positioning.asp" }
                ]
            },
            {
                title: "Flexbox Layout",
                description: "Master CSS Flexbox for creating flexible and responsive layouts.",
                resources: [
                    { name: "MDN Flexbox", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" },
                    { name: "CSS Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" }
                ]
            },
            {
                title: "CSS Grid Layout",
                description: "Learn CSS Grid for creating complex two-dimensional layouts.",
                resources: [
                    { name: "MDN CSS Grid", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids" },
                    { name: "CSS Grid Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" }
                ]
            },
            {
                title: "Responsive Design",
                description: "Create responsive websites that work on all devices using media queries and responsive units.",
                resources: [
                    { name: "MDN Responsive Design", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" },
                    { name: "Responsive Web Design", url: "https://www.w3schools.com/css/css_rwd_intro.asp" }
                ]
            },
            {
                title: "CSS Media Queries",
                description: "Use media queries to apply different styles based on device characteristics.",
                resources: [
                    { name: "MDN Media Queries", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries" },
                    { name: "CSS Media Queries", url: "https://www.w3schools.com/css/css3_mediaqueries.asp" }
                ]
            },
            {
                title: "CSS Variables (Custom Properties)",
                description: "Use CSS custom properties for dynamic theming and maintainable stylesheets.",
                resources: [
                    { name: "MDN CSS Variables", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" },
                    { name: "CSS Custom Properties", url: "https://css-tricks.com/a-complete-guide-to-custom-properties/" }
                ]
            },
            {
                title: "CSS Animations and Transitions",
                description: "Add smooth animations and transitions to enhance user experience.",
                resources: [
                    { name: "MDN CSS Animations", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations" },
                    { name: "CSS Transitions", url: "https://www.w3schools.com/css/css3_transitions.asp" }
                ]
            },
            {
                title: "CSS Transformations",
                description: "Learn to transform elements using translate, rotate, scale, and skew.",
                resources: [
                    { name: "MDN CSS Transforms", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform" },
                    { name: "CSS Transform Tutorial", url: "https://www.w3schools.com/css/css3_2dtransforms.asp" }
                ]
            },
            {
                title: "CSS Preprocessors",
                description: "Learn about Sass, Less, and other CSS preprocessors for advanced styling.",
                resources: [
                    { name: "Sass Documentation", url: "https://sass-lang.com/documentation" },
                    { name: "Less Documentation", url: "http://lesscss.org/" }
                ]
            },
            {
                title: "CSS Methodologies",
                description: "Explore BEM, SMACSS, and other CSS methodologies for scalable stylesheets.",
                resources: [
                    { name: "BEM Methodology", url: "http://getbem.com/" },
                    { name: "SMACSS", url: "https://smacss.com/" }
                ]
            },
            {
                title: "CSS Performance",
                description: "Optimize CSS for better performance and faster loading times.",
                resources: [
                    { name: "CSS Performance", url: "https://developer.mozilla.org/en-US/docs/Learn/Performance/CSS" },
                    { name: "CSS Optimization", url: "https://web.dev/fast/#optimize-your-css" }
                ]
            }
        ]
    },
    "JavaScript": {
        icon: "fab fa-js-square",
        description: "Add interactivity and dynamic behavior to web applications",
        subtopics: [
            {
                title: "Introduction to JavaScript",
                description: "JavaScript is a versatile programming language that runs in browsers and adds interactivity to web pages.",
                resources: [
                    { name: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
                    { name: "freeCodeCamp JavaScript", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
                    { name: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" }
                ]
            },
            {
                title: "JavaScript Fundamentals",
                description: "Learn variables, data types, operators, and basic syntax.",
                resources: [
                    { name: "MDN JavaScript Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps" },
                    { name: "JavaScript Fundamentals", url: "https://javascript.info/first-steps" }
                ]
            },
            {
                title: "Variables and Data Types",
                description: "Master var, let, const declarations and primitive data types.",
                resources: [
                    { name: "MDN Variables", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables" },
                    { name: "JavaScript Data Types", url: "https://javascript.info/types" }
                ]
            },
            {
                title: "Control Flow",
                description: "Master conditional statements, loops, and program flow control.",
                resources: [
                    { name: "MDN Control Flow", url: "https://developer.mozilla.org/en-US/docs/Glossary/Control_flow" },
                    { name: "JavaScript Control Flow", url: "https://javascript.info/ifelse" }
                ]
            },
            {
                title: "Functions",
                description: "Learn function declarations, expressions, arrow functions, and scope.",
                resources: [
                    { name: "MDN Functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions" },
                    { name: "JavaScript Functions", url: "https://javascript.info/function-basics" }
                ]
            },
            {
                title: "Objects and Arrays",
                description: "Work with objects, arrays, and object-oriented programming concepts.",
                resources: [
                    { name: "MDN Objects", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects" },
                    { name: "JavaScript Arrays", url: "https://javascript.info/array" }
                ]
            },
            {
                title: "ES6+ Features",
                description: "Master modern JavaScript features like destructuring, spread operator, and modules.",
                resources: [
                    { name: "ES6 Features", url: "https://es6-features.org/" },
                    { name: "Modern JavaScript", url: "https://javascript.info/modern-javascript" }
                ]
            },
            {
                title: "Destructuring and Spread",
                description: "Learn array and object destructuring, and the spread/rest operators.",
                resources: [
                    { name: "MDN Destructuring", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" },
                    { name: "JavaScript Destructuring", url: "https://javascript.info/destructuring-assignment" }
                ]
            },
            {
                title: "Template Literals",
                description: "Use template literals for string interpolation and multiline strings.",
                resources: [
                    { name: "MDN Template Literals", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" },
                    { name: "Template Literals Guide", url: "https://javascript.info/string#template-literals" }
                ]
            },
            {
                title: "DOM Manipulation",
                description: "Interact with the Document Object Model to dynamically update web pages.",
                resources: [
                    { name: "MDN DOM", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" },
                    { name: "DOM Manipulation", url: "https://javascript.info/dom-navigation" }
                ]
            },
            {
                title: "Events and Event Handling",
                description: "Handle user interactions and browser events with event listeners.",
                resources: [
                    { name: "MDN Events", url: "https://developer.mozilla.org/en-US/docs/Web/Events" },
                    { name: "JavaScript Events", url: "https://javascript.info/events" }
                ]
            },
            {
                title: "Event Delegation",
                description: "Learn event delegation patterns for efficient event handling.",
                resources: [
                    { name: "MDN Event Delegation", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation" },
                    { name: "Event Delegation Guide", url: "https://javascript.info/event-delegation" }
                ]
            },
            {
                title: "Asynchronous JavaScript",
                description: "Learn about callbacks, promises, async/await, and handling asynchronous operations.",
                resources: [
                    { name: "MDN Async JavaScript", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous" },
                    { name: "JavaScript Promises", url: "https://javascript.info/promise-basics" }
                ]
            },
            {
                title: "Promises",
                description: "Master JavaScript Promises for handling asynchronous operations.",
                resources: [
                    { name: "MDN Promises", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" },
                    { name: "Promise Tutorial", url: "https://javascript.info/promise-basics" }
                ]
            },
            {
                title: "Async/Await",
                description: "Use async/await for cleaner asynchronous code.",
                resources: [
                    { name: "MDN Async/Await", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" },
                    { name: "Async/Await Guide", url: "https://javascript.info/async-await" }
                ]
            },
            {
                title: "Fetch API and AJAX",
                description: "Make HTTP requests and interact with web APIs using Fetch and XMLHttpRequest.",
                resources: [
                    { name: "MDN Fetch API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" },
                    { name: "JavaScript Fetch", url: "https://javascript.info/fetch" }
                ]
            },
            {
                title: "Error Handling",
                description: "Implement proper error handling with try-catch blocks and error objects.",
                resources: [
                    { name: "MDN Error Handling", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling" },
                    { name: "JavaScript Error Handling", url: "https://javascript.info/try-catch" }
                ]
            },
            {
                title: "JavaScript Modules",
                description: "Organize code using ES6 modules and module systems.",
                resources: [
                    { name: "MDN JavaScript Modules", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" },
                    { name: "ES6 Modules", url: "https://javascript.info/modules" }
                ]
            },
            {
                title: "Object-Oriented Programming",
                description: "Learn classes, inheritance, and OOP principles in JavaScript.",
                resources: [
                    { name: "MDN Classes", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" },
                    { name: "JavaScript Classes", url: "https://javascript.info/class" }
                ]
            },
            {
                title: "Functional Programming",
                description: "Explore functional programming concepts like pure functions, immutability, and higher-order functions.",
                resources: [
                    { name: "Functional Programming", url: "https://eloquentjavascript.net/1st_edition/chapter6.html" },
                    { name: "FP in JavaScript", url: "https://github.com/getify/Functional-Light-JS" }
                ]
            },
            {
                title: "Array Methods",
                description: "Master array methods like map, filter, reduce, and other functional programming tools.",
                resources: [
                    { name: "MDN Array Methods", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" },
                    { name: "Array Methods Guide", url: "https://javascript.info/array-methods" }
                ]
            },
            {
                title: "Local Storage and Session Storage",
                description: "Store data in the browser using Web Storage API.",
                resources: [
                    { name: "MDN Web Storage", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API" },
                    { name: "Local Storage Tutorial", url: "https://javascript.info/localstorage" }
                ]
            },
            {
                title: "Testing JavaScript",
                description: "Write unit tests and integration tests for JavaScript code.",
                resources: [
                    { name: "Jest Testing Framework", url: "https://jestjs.io/docs/getting-started" },
                    { name: "Testing JavaScript", url: "https://testingjavascript.com/" }
                ]
            },
            {
                title: "JavaScript Performance",
                description: "Optimize JavaScript code for better performance and user experience.",
                resources: [
                    { name: "MDN Performance", url: "https://developer.mozilla.org/en-US/docs/Learn/Performance/JavaScript" },
                    { name: "JavaScript Optimization", url: "https://web.dev/fast/#optimize-your-javascript" }
                ]
            }
        ]
    },
    "Version Control": {
        icon: "fab fa-git-alt",
        description: "Learn Git and GitHub for version control and collaboration",
        subtopics: [
            {
                title: "Introduction to Version Control",
                description: "Understand the importance of version control and how it helps track changes in your code.",
                resources: [
                    { name: "Git Handbook", url: "https://guides.github.com/introduction/git-handbook/" },
                    { name: "Version Control Basics", url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" }
                ]
            },
            {
                title: "Git Basics",
                description: "Learn fundamental Git commands: init, add, commit, status, and log.",
                resources: [
                    { name: "Git Basics", url: "https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup" },
                    { name: "Git Tutorial", url: "https://www.atlassian.com/git/tutorials" }
                ]
            },
            {
                title: "Git Configuration",
                description: "Set up Git with your identity and configure global settings.",
                resources: [
                    { name: "Git Configuration", url: "https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup" },
                    { name: "Git Config Guide", url: "https://git-scm.com/docs/git-config" }
                ]
            },
            {
                title: "Git Branches",
                description: "Master branching and merging strategies for collaborative development.",
                resources: [
                    { name: "Git Branching", url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell" },
                    { name: "Branching Strategies", url: "https://nvie.com/posts/a-successful-git-branching-model/" }
                ]
            },
            {
                title: "Git Merging and Conflicts",
                description: "Learn to merge branches and resolve merge conflicts.",
                resources: [
                    { name: "Git Merging", url: "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging" },
                    { name: "Resolving Conflicts", url: "https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging" }
                ]
            },
            {
                title: "GitHub and Remote Repositories",
                description: "Work with remote repositories on GitHub and collaborate with other developers.",
                resources: [
                    { name: "GitHub Guides", url: "https://guides.github.com/" },
                    { name: "GitHub Desktop", url: "https://desktop.github.com/" }
                ]
            },
            {
                title: "Pull Requests and Code Review",
                description: "Learn how to create pull requests and participate in code reviews.",
                resources: [
                    { name: "Pull Request Guide", url: "https://guides.github.com/activities/pull-requests/" },
                    { name: "Code Review Best Practices", url: "https://github.com/microsoft/vscode/wiki/Code-Review-Guidelines" }
                ]
            },
            {
                title: "Git Workflow",
                description: "Understand different Git workflows like Git Flow and GitHub Flow.",
                resources: [
                    { name: "Git Flow", url: "https://nvie.com/posts/a-successful-git-branching-model/" },
                    { name: "GitHub Flow", url: "https://guides.github.com/introduction/flow/" }
                ]
            }
        ]
    },
    "Responsive Design": {
        icon: "fas fa-mobile-alt",
        description: "Create websites that work perfectly on all devices and screen sizes",
        subtopics: [
            {
                title: "Mobile-First Design",
                description: "Design for mobile devices first, then enhance for larger screens.",
                resources: [
                    { name: "Mobile-First Design", url: "https://www.lukew.com/ff/entry.asp?933" },
                    { name: "Responsive Design Patterns", url: "https://bradfrost.com/blog/post/responsive-design-patterns/" }
                ]
            },
            {
                title: "CSS Media Queries",
                description: "Use media queries to apply different styles based on device characteristics.",
                resources: [
                    { name: "MDN Media Queries", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries" },
                    { name: "CSS Media Queries", url: "https://www.w3schools.com/css/css3_mediaqueries.asp" }
                ]
            },
            {
                title: "Flexible Images and Media",
                description: "Make images and media content responsive using CSS techniques.",
                resources: [
                    { name: "Responsive Images", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images" },
                    { name: "CSS Responsive Images", url: "https://www.w3schools.com/css/css_rwd_images.asp" }
                ]
            },
            {
                title: "Viewport and Meta Tags",
                description: "Configure the viewport and use meta tags for proper mobile rendering.",
                resources: [
                    { name: "Viewport Meta Tag", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag" },
                    { name: "Responsive Meta Tags", url: "https://www.w3schools.com/css/css_rwd_viewport.asp" }
                ]
            },
            {
                title: "Responsive Typography",
                description: "Create scalable typography that works across all screen sizes.",
                resources: [
                    { name: "Responsive Typography", url: "https://css-tricks.com/snippets/css/fluid-typography/" },
                    { name: "Fluid Type Scale", url: "https://utopia.fyi/" }
                ]
            }
        ]
    },
    "Web Performance": {
        icon: "fas fa-tachometer-alt",
        description: "Optimize websites for speed, performance, and user experience",
        subtopics: [
            {
                title: "Performance Fundamentals",
                description: "Understand web performance metrics and why they matter for user experience.",
                resources: [
                    { name: "Web Performance", url: "https://developer.mozilla.org/en-US/docs/Learn/Performance" },
                    { name: "Performance Best Practices", url: "https://web.dev/performance/" }
                ]
            },
            {
                title: "Core Web Vitals",
                description: "Learn about LCP, FID, and CLS - the key metrics for measuring user experience.",
                resources: [
                    { name: "Core Web Vitals", url: "https://web.dev/vitals/" },
                    { name: "Web Vitals Guide", url: "https://web.dev/learn-web-vitals/" }
                ]
            },
            {
                title: "Image Optimization",
                description: "Optimize images for web using compression, formats, and lazy loading.",
                resources: [
                    { name: "Image Optimization", url: "https://web.dev/fast/#optimize-your-images" },
                    { name: "Responsive Images", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images" }
                ]
            },
            {
                title: "CSS and JavaScript Optimization",
                description: "Minimize, compress, and optimize CSS and JavaScript files.",
                resources: [
                    { name: "CSS Optimization", url: "https://web.dev/fast/#optimize-your-css" },
                    { name: "JavaScript Optimization", url: "https://web.dev/fast/#optimize-your-javascript" }
                ]
            },
            {
                title: "Caching Strategies",
                description: "Implement effective caching strategies for static assets and API responses.",
                resources: [
                    { name: "HTTP Caching", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" },
                    { name: "Service Worker Caching", url: "https://web.dev/service-worker-caching-and-http-caching/" }
                ]
            },
            {
                title: "Performance Monitoring",
                description: "Use tools to monitor and analyze website performance.",
                resources: [
                    { name: "Lighthouse", url: "https://developers.google.com/web/tools/lighthouse" },
                    { name: "WebPageTest", url: "https://www.webpagetest.org/" }
                ]
            }
        ]
    },
    "Testing": {
        icon: "fas fa-vial",
        description: "Write tests to ensure your code works correctly and doesn't break",
        subtopics: [
            {
                title: "Testing Fundamentals",
                description: "Understand the importance of testing and different types of tests.",
                resources: [
                    { name: "Testing JavaScript", url: "https://testingjavascript.com/" },
                    { name: "Frontend Testing Guide", url: "https://github.com/goldbergyoni/javascript-testing-best-practices" }
                ]
            },
            {
                title: "Unit Testing",
                description: "Write unit tests for individual functions and components.",
                resources: [
                    { name: "Jest Testing Framework", url: "https://jestjs.io/docs/getting-started" },
                    { name: "Mocha Testing", url: "https://mochajs.org/" }
                ]
            },
            {
                title: "Integration Testing",
                description: "Test how different parts of your application work together.",
                resources: [
                    { name: "Integration Testing", url: "https://www.cypress.io/" },
                    { name: "Playwright Testing", url: "https://playwright.dev/" }
                ]
            },
            {
                title: "End-to-End Testing",
                description: "Test complete user workflows from start to finish.",
                resources: [
                    { name: "E2E Testing with Cypress", url: "https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test" },
                    { name: "Selenium WebDriver", url: "https://www.selenium.dev/documentation/webdriver/" }
                ]
            },
            {
                title: "Testing Best Practices",
                description: "Learn best practices for writing maintainable and effective tests.",
                resources: [
                    { name: "Testing Best Practices", url: "https://github.com/goldbergyoni/javascript-testing-best-practices" },
                    { name: "Test-Driven Development", url: "https://en.wikipedia.org/wiki/Test-driven_development" }
                ]
            }
        ]
    },
    "Dev Tools": {
        icon: "fas fa-tools",
        description: "Master browser developer tools for debugging and optimization",
        subtopics: [
            {
                title: "Chrome DevTools",
                description: "Learn to use Chrome's powerful developer tools for debugging and optimization.",
                resources: [
                    { name: "Chrome DevTools", url: "https://developer.chrome.com/docs/devtools/" },
                    { name: "DevTools Tutorial", url: "https://developers.google.com/web/tools/chrome-devtools" }
                ]
            },
            {
                title: "Firefox Developer Tools",
                description: "Explore Firefox's developer tools and debugging capabilities.",
                resources: [
                    { name: "Firefox DevTools", url: "https://developer.mozilla.org/en-US/docs/Tools" },
                    { name: "Firefox Debugger", url: "https://firefox-source-docs.mozilla.org/devtools-user/debugger/" }
                ]
            },
            {
                title: "Elements Tab",
                description: "Inspect and modify HTML and CSS in real-time.",
                resources: [
                    { name: "Elements Tab Guide", url: "https://developer.chrome.com/docs/devtools/elements/" },
                    { name: "CSS Debugging", url: "https://developer.chrome.com/docs/devtools/css/" }
                ]
            },
            {
                title: "Console Tab",
                description: "Use the JavaScript console for debugging and logging.",
                resources: [
                    { name: "Console API", url: "https://developer.chrome.com/docs/devtools/console/" },
                    { name: "Console Methods", url: "https://developer.mozilla.org/en-US/docs/Web/API/Console" }
                ]
            },
            {
                title: "Network Tab",
                description: "Analyze network requests, performance, and API calls.",
                resources: [
                    { name: "Network Analysis", url: "https://developer.chrome.com/docs/devtools/network/" },
                    { name: "HTTP Debugging", url: "https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor" }
                ]
            },
            {
                title: "Performance Profiling",
                description: "Profile your application's performance and identify bottlenecks.",
                resources: [
                    { name: "Performance Profiling", url: "https://developer.chrome.com/docs/devtools/evaluate-performance/" },
                    { name: "Memory Profiling", url: "https://developer.chrome.com/docs/devtools/memory-problems/" }
                ]
            },
            {
                title: "Application Tab",
                description: "Inspect storage, service workers, and application data.",
                resources: [
                    { name: "Application Tab", url: "https://developer.chrome.com/docs/devtools/storage/" },
                    { name: "Service Worker Debugging", url: "https://developer.chrome.com/docs/devtools/progressive-web-apps/" }
                ]
            }
        ]
    },
    "TypeScript": {
        icon: "fab fa-js",
        description: "Add static typing to JavaScript for better development experience",
        subtopics: [
            {
                title: "TypeScript Introduction",
                description: "Learn what TypeScript is and how it extends JavaScript with static typing.",
                resources: [
                    { name: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/" },
                    { name: "TypeScript Tutorial", url: "https://www.typescriptlang.org/docs/handbook/intro.html" }
                ]
            },
            {
                title: "Basic Types",
                description: "Master TypeScript's basic types: string, number, boolean, array, and object.",
                resources: [
                    { name: "TypeScript Basic Types", url: "https://www.typescriptlang.org/docs/handbook/basic-types.html" },
                    { name: "TypeScript Types", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html" }
                ]
            },
            {
                title: "Interfaces and Types",
                description: "Create custom types and interfaces for better code organization.",
                resources: [
                    { name: "TypeScript Interfaces", url: "https://www.typescriptlang.org/docs/handbook/interfaces.html" },
                    { name: "Type Aliases", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases" }
                ]
            },
            {
                title: "Functions and Classes",
                description: "Add type annotations to functions and classes in TypeScript.",
                resources: [
                    { name: "TypeScript Functions", url: "https://www.typescriptlang.org/docs/handbook/functions.html" },
                    { name: "TypeScript Classes", url: "https://www.typescriptlang.org/docs/handbook/classes.html" }
                ]
            },
            {
                title: "Advanced Types",
                description: "Explore advanced TypeScript features like generics, unions, and intersections.",
                resources: [
                    { name: "Advanced Types", url: "https://www.typescriptlang.org/docs/handbook/advanced-types.html" },
                    { name: "TypeScript Generics", url: "https://www.typescriptlang.org/docs/handbook/2/generics.html" }
                ]
            },
            {
                title: "TypeScript Configuration",
                description: "Configure TypeScript compiler options and project settings.",
                resources: [
                    { name: "TSConfig Reference", url: "https://www.typescriptlang.org/tsconfig" },
                    { name: "Compiler Options", url: "https://www.typescriptlang.org/docs/handbook/compiler-options.html" }
                ]
            }
        ]
    },
    "Frameworks": {
        icon: "fas fa-layer-group",
        description: "Learn popular frontend frameworks and libraries",
        subtopics: [
            {
                title: "React",
                description: "Learn React, a popular JavaScript library for building user interfaces.",
                resources: [
                    { name: "React Documentation", url: "https://react.dev/" },
                    { name: "React Tutorial", url: "https://react.dev/learn/tutorial-tic-tac-toe" },
                    { name: "freeCodeCamp React", url: "https://www.freecodecamp.org/learn/front-end-development-libraries/#react" }
                ]
            },
            {
                title: "Vue.js",
                description: "Explore Vue.js, a progressive JavaScript framework for building user interfaces.",
                resources: [
                    { name: "Vue.js Guide", url: "https://vuejs.org/guide/" },
                    { name: "Vue.js Tutorial", url: "https://vuejs.org/tutorial/" }
                ]
            },
            {
                title: "Angular",
                description: "Learn Angular, a comprehensive framework for building web applications.",
                resources: [
                    { name: "Angular Documentation", url: "https://angular.io/docs" },
                    { name: "Angular Tutorial", url: "https://angular.io/tutorial" }
                ]
            },
            {
                title: "Svelte",
                description: "Discover Svelte, a modern framework that compiles to vanilla JavaScript.",
                resources: [
                    { name: "Svelte Tutorial", url: "https://svelte.dev/tutorial" },
                    { name: "Svelte Documentation", url: "https://svelte.dev/docs" }
                ]
            },
            {
                title: "Framework Comparison",
                description: "Compare different frameworks and choose the right one for your project.",
                resources: [
                    { name: "Framework Comparison", url: "https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/" },
                    { name: "Choosing a Framework", url: "https://www.freecodecamp.org/news/how-to-choose-the-right-frontend-framework/" }
                ]
            }
        ]
    }
};

// Calculate totals for the homepage
function calculateTotals() {
    let totalTopics = Object.keys(roadmap).length;
    let totalSubtopics = 0;
    let totalResources = 0;

    Object.values(roadmap).forEach(topic => {
        totalSubtopics += topic.subtopics.length;
        topic.subtopics.forEach(subtopic => {
            totalResources += subtopic.resources.length;
        });
    });

    return { totalTopics, totalSubtopics, totalResources };
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { roadmap, calculateTotals };
} 