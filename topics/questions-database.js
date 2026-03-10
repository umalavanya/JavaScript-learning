// topics/questions-database.js
// Central repository for practice questions

window.questionsDB = window.questionsDB || {
    // Variables questions
    variables: [
        {
            difficulty: 'beginner',
            question: 'What is the difference between let and const?',
            answer: 'let allows reassignment, const does not. Both are block-scoped.',
            codeExample: 'let x = 5; x = 10; // Works\nconst y = 5; y = 10; // Error'
        },
        {
            difficulty: 'intermediate',
            question: 'Explain hoisting with var, let, and const.',
            answer: 'var declarations are hoisted and initialized as undefined. let/const are hoisted but not initialized (Temporal Dead Zone).',
            codeExample: 'console.log(a); // undefined (var a)\nconsole.log(b); // ReferenceError (let b)'
        }
    ],
    
    // Functions questions
    functions: [
        {
            difficulty: 'beginner',
            question: 'What is a callback function?',
            answer: 'A function passed as an argument to another function, to be executed later.',
            codeExample: 'function greet(name, callback) {\n  console.log("Hello " + name);\n  callback();\n}'
        }
    ]
};

// Interview questions by topic
window.interviewQA = window.interviewQA || {
    closures: {
        question: 'What is a closure and why would you use one?',
        answer: 'A closure is a function that remembers its outer variables even after the outer function returns. Used for data privacy, currying, and maintaining state.',
        codeExample: 'function counter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  }\n}'
    }
};