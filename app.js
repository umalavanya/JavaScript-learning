// app.js - Main Application Controller
(function() {
    // Global topics database
    window.topics = window.topics || {};
    
    // Default welcome content
    const welcomeContent = {
        title: "JavaScript Tutorial",
        part: "Getting Started",
        conceptNote: "Welcome to the Complete JavaScript Learning Platform. This modular tutorial contains over 250 topics organized into 17 categories.",
        importantPoints: [
            "📚 Click any topic from the left sidebar to start learning.",
            "🔧 Each topic includes concept notes, MCQs, coding problems, and interview Q&A",
            "📝 Practice questions help reinforce learning",
            "🚀 New topics can be added by creating files in the topics/ folder",
            "💡 The platform is fully scalable - add as many topics as you need"
        ],
        mcqs: [
            { 
                q: "What makes this JavaScript tutorial platform special?", 
                options: [
                    "It only covers basics", 
                    "It's modular and scalable with 250+ topics", 
                    "It doesn't include practice questions", 
                    "It's not responsive"
                ], 
                correct: 1 
            },
            { 
                q: "How do you add new topics to this platform?", 
                options: [
                    "Modify the HTML only", 
                    "Create new files in the topics/ folder", 
                    "Can't add new topics", 
                    "Change the CSS"
                ], 
                correct: 1 
            }
        ],
        practiceCoding: '// Welcome to JavaScript!\n// Try this: console.log("Hello, JavaScript Learner!");\n\n// Your turn: Create a variable and log it',
        interviewQA: "❓ Q: Why is JavaScript important to learn? A: JavaScript is the programming language of the web. It's used by 98% of websites for client-side behavior, and with Node.js, it's also popular for server-side development."
    };
    
    // Register welcome content
    window.topics.welcome = welcomeContent;
    
    // Get DOM elements
    const chapterContent = document.getElementById('chapterContent');
    const mainTitle = document.getElementById('mainTitle');
    const chapterBadge = document.getElementById('chapterBadge');
    
    // Track current chapter
    let currentChapter = 'welcome';
    
    // Render function for chapter content
    function renderChapter(chapterId) {
        const topic = window.topics[chapterId];
        if (!topic) {
            console.error(`Topic not found: ${chapterId}`);
            return;
        }
        
        // Update header
        mainTitle.textContent = topic.title || chapterId.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        chapterBadge.textContent = topic.part || 'JavaScript';
        
        // Build HTML content
        let html = `
            <div class="info-card">
                <i class="fas fa-graduation-cap" style="font-size:1.4rem; opacity:0.7;"></i>
                <strong>📘 Concept:</strong> ${topic.conceptNote || 'No description available.'}
            </div>
        `;
        
        // Important Points
        if (topic.importantPoints && topic.importantPoints.length > 0) {
            html += `
                <h3><i class="fas fa-star" style="color:#f1c40f;"></i> Key Points</h3>
                <ul class="important-points">
                    ${topic.importantPoints.map(point => `<li><i class="fas fa-circle-check" style="color:#2ecc71;"></i> ${point}</li>`).join('')}
                </ul>
            `;
        }
        
        // Grid for MCQs and Coding
        html += `<div class="grid-cards">`;
        
        // MCQ Card
        if (topic.mcqs && topic.mcqs.length > 0) {
            html += `
                <div class="card">
                    <h3><i class="fas fa-question-circle" style="color:#3498db;"></i> Practice Questions</h3>
                    <div id="mcqContainer"></div>
                    <button class="btn" id="resetMcqBtn"><i class="fas fa-undo"></i> Reset Answers</button>
                </div>
            `;
        }
        
        // Coding Card
        if (topic.practiceCoding) {
            html += `
                <div class="card">
                    <h3><i class="fas fa-laptop-code" style="color:#e74c3c;"></i> Coding Problem</h3>
                    <pre><code>${topic.practiceCoding}</code></pre>
                    <button class="btn btn-primary" id="hintCodingBtn"><i class="fas fa-lightbulb"></i> Show Hint</button>
                    <span id="hintMessage" style="margin-left:1rem; color:#2c6b9e;"></span>
                </div>
            `;
        }
        
        html += `</div>`;
        
        // Interview Q&A
        if (topic.interviewQA) {
            html += `
                <div class="interview-block">
                    <i class="fas fa-user-tie" style="font-size:2rem; float:right; color:#e67e22;"></i>
                    <h3><i class="fas fa-comment-dots"></i> Interview Q&A</h3>
                    <p style="font-size:1.1rem; line-height:1.6;">${topic.interviewQA}</p>
                </div>
            `;
        }
        
        // Quick Quiz Section
        html += `
            <hr>
            <div style="display:flex; gap: 2rem; flex-wrap:wrap;">
                <div style="flex:2; min-width:260px;">
                    <h4><i class="fas fa-pen"></i> Quick Check</h4>
                    <div id="liveQuizArea"></div>
                </div>
                <div style="flex:1; background:#e7f1fa; border-radius:1.8rem; padding:1.5rem;">
                    <i class="fas fa-lightbulb" style="color:#f39c12; font-size:1.5rem;"></i>
                    <strong>Learning Tip:</strong>
                    <p style="margin-top:0.8rem; color:#2c3e50;">Practice each concept by modifying the code examples. Try to predict the output before running.</p>
                </div>
            </div>
        `;
        
        chapterContent.innerHTML = html;
        
        // Initialize MCQs
        if (topic.mcqs && topic.mcqs.length > 0) {
            initializeMCQs(topic.mcqs);
        }
        
        // Initialize coding hint button
        const hintBtn = document.getElementById('hintCodingBtn');
        if (hintBtn) {
            hintBtn.addEventListener('click', function() {
                document.getElementById('hintMessage').innerHTML = '<i class="fas fa-info-circle"></i> Think about the core concept first. Try to solve step by step.';
            });
        }
        
        // Initialize quick quiz
        initializeQuickQuiz();
    }
    
    // Initialize MCQ functionality
    function initializeMCQs(mcqs) {
        const mcqContainer = document.getElementById('mcqContainer');
        if (!mcqContainer) return;
        
        let mcqHtml = '';
        mcqs.forEach((item, index) => {
            mcqHtml += `
                <div class="mcq-box">
                    <div class="question-text">Q${index + 1}: ${item.q}</div>
                    <ul class="option-list" data-qidx="${index}" data-correct="${item.correct}">
                        ${item.options.map((opt, optIdx) => `<li data-optidx="${optIdx}">${opt}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
        
        mcqContainer.innerHTML = mcqHtml;
        
        // Add click handlers to options
        document.querySelectorAll('.option-list li').forEach(option => {
            option.addEventListener('click', function() {
                const parentUl = this.closest('ul');
                const correctIdx = parseInt(parentUl.dataset.correct);
                const chosenIdx = parseInt(this.dataset.optidx);
                
                // Clear previous selections in this group
                parentUl.querySelectorAll('li').forEach(li => {
                    li.classList.remove('correct', 'wrong');
                });
                
                if (chosenIdx === correctIdx) {
                    this.classList.add('correct');
                } else {
                    this.classList.add('wrong');
                    // Show correct answer
                    parentUl.children[correctIdx].classList.add('correct');
                }
            });
        });
        
        // Reset button
        const resetBtn = document.getElementById('resetMcqBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', function() {
                document.querySelectorAll('.option-list li').forEach(li => {
                    li.classList.remove('correct', 'wrong');
                });
            });
        }
    }
    
    // Initialize quick quiz
    function initializeQuickQuiz() {
        const quizArea = document.getElementById('liveQuizArea');
        if (!quizArea) return;
        
        quizArea.innerHTML = `
            <p><strong>Quick Question:</strong> What will <code>console.log(typeof [])</code> output?</p>
            <button class="btn" id="quizAnsBtn"><i class="fas fa-eye"></i> Show Answer</button>
            <p id="quizAnsDisp" style="margin-top:0.8rem; padding:0.5rem; background:#f8f9fa; border-radius:8px;"></p>
        `;
        
        document.getElementById('quizAnsBtn')?.addEventListener('click', function() {
            document.getElementById('quizAnsDisp').innerHTML = '<strong>Answer:</strong> "object" - Arrays are objects in JavaScript. Use Array.isArray() to check for arrays.';
        });
    }
    
    // Navigation: Add click handlers to all chapter items
    function initializeNavigation() {
        const chapterItems = document.querySelectorAll('.chap-item');
        
        chapterItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all
                chapterItems.forEach(ci => ci.classList.remove('active'));
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // Get chapter ID from data-chapter attribute
                const chapterId = this.dataset.chapter;
                if (chapterId) {
                    currentChapter = chapterId;
                    renderChapter(chapterId);
                }
            });
        });
    }
    
    // Search functionality (bonus)
    function initializeSearch() {
        const searchBox = document.createElement('div');
        searchBox.className = 'search-box';
        searchBox.style.margin = '1rem';
        searchBox.innerHTML = `
            <input type="text" placeholder="Search topics..." style="width:100%; padding:0.8rem; border-radius:40px; border:1px solid #dae6f2;">
        `;
        
        const modulePanel = document.querySelector('.module-panel');
        modulePanel.insertBefore(searchBox, modulePanel.firstChild.nextSibling);
        
        const searchInput = searchBox.querySelector('input');
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const chapterItems = document.querySelectorAll('.chap-item');
            
            chapterItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm) || searchTerm === '') {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
    
    // Initialize everything when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initializeNavigation();
        initializeSearch();
        
        // Set welcome as active and render
        const welcomeItem = document.querySelector('[data-chapter="welcome"]');
        if (welcomeItem) {
            welcomeItem.classList.add('active');
        } else {
            // If no welcome item, activate first chapter
            const firstChapter = document.querySelector('.chap-item');
            if (firstChapter) {
                firstChapter.classList.add('active');
                currentChapter = firstChapter.dataset.chapter;
            }
        }
        
        // Render initial chapter
        renderChapter(currentChapter);
    });
})();


// Add to your existing app.js

// Enhanced render function that pulls from multiple sources
function renderChapter(chapterId) {
    const topic = window.topics[chapterId] || {};
    const questions = window.questionsDB?.[chapterId] || [];
    const codingProblems = window.codingProblems?.beginner || [];
    
    // Combine all content sources
    const enhancedTopic = {
        ...topic,
        practiceQuestions: questions,
        codingProblems: codingProblems.slice(0, 3), // Show first 3 problems
        interviewQA: window.interviewQA?.[chapterId]?.question || topic.interviewQA
    };
    
    // Render with enhanced content
    renderEnhancedContent(enhancedTopic);
}

// Add search across all topics
function initializeGlobalSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search all topics...';
    searchInput.className = 'global-search';
    
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const allTopics = Object.keys(window.topics);
        
        const results = allTopics.filter(topicId => 
            topicId.includes(term) || 
            window.topics[topicId].title?.toLowerCase().includes(term) ||
            window.topics[topicId].conceptNote?.toLowerCase().includes(term)
        );
        
        displaySearchResults(results);
    });
    
    document.querySelector('.module-panel').prepend(searchInput);
}