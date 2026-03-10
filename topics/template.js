// topics/template.js - Template for creating new topic modules
// Copy this file to create new topics (e.g., basics.js, operators.js, etc.)

(function() {
    // Initialize topics namespace if not exists
    window.topics = window.topics || {};
    
    // Topic: Example Template
    // Replace 'template' with your topic ID (e.g., 'variables', 'functions', etc.)
    window.topics.template = {
        // Part/Category (e.g., 'Basics', 'Operators', 'Functions')
        part: 'Category Name',
        
        // Title of the topic
        title: 'Topic Title',
        
        // Brief concept explanation
        conceptNote: 'A concise explanation of the concept goes here. Explain what it is and why it\'s important.',
        
        // Key points - array of strings
        importantPoints: [
            '🔹 First important point about this concept',
            '🔹 Second important point with key detail',
            '🔹 Third important point - maybe a gotcha',
            '🔹 Fourth point - best practice or common use case'
        ],
        
        // Multiple Choice Questions - array of question objects
        mcqs: [
            { 
                q: 'Sample question about this concept?', 
                options: ['Option A', 'Option B', 'Option C', 'Option D'], 
                correct: 0  // Index of correct answer (0-based)
            },
            { 
                q: 'Another question to test understanding?', 
                options: ['First choice', 'Second choice', 'Third choice', 'Fourth choice'], 
                correct: 2 
            }
        ],
        
        // Coding practice problem
        practiceCoding: '// Write your code here\n// Example:\nfunction example() {\n    return "Hello";\n}\n\n// Your task: [describe what to code]',
        
        // Interview question and answer
        interviewQA: '❓ Q: Common interview question about this topic?\n\nA: Detailed answer explaining the concept with examples if needed.'
    };
    
    // To add more topics, create additional files like:
    // variables.js, functions.js, promises.js, etc.
    // Each should follow the same pattern with unique topic IDs
})();

// Example of creating a new topic file (copy and modify):
/*
(function() {
    window.topics = window.topics || {};
    
    window.topics.variables = {
        part: 'Basics',
        title: 'JavaScript Variables',
        conceptNote: 'Variables are containers for storing data values. Use let, const, or var.',
        importantPoints: [
            '🔹 let allows you to declare variables that can be reassigned',
            '🔹 const declares variables that cannot be reassigned',
            '🔹 var is the old way (function-scoped, not block-scoped)',
            '🔹 Variable names are case-sensitive'
        ],
        mcqs: [
            { 
                q: 'Which keyword declares a block-scoped variable that cannot be reassigned?', 
                options: ['let', 'const', 'var', 'both let and var'], 
                correct: 1 
            }
        ],
        practiceCoding: '// Declare a const for PI and calculate area of circle with radius 5',
        interviewQA: '❓ Q: What is the difference between let, const, and var?\n\nA: var is function-scoped and hoisted, let and const are block-scoped. const cannot be reassigned, let can.'
    };
})();
*/