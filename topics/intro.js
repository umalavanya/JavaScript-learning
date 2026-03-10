// topics/intro.js
// values & variables chapter — questions and answers module
window.topics = window.topics || {};
window.topics.intro = {
    part: 'Part I',
    title: 'Variables & Values',
    conceptNote: 'Variables store values. Use `let`, `const` (ES6). var is legacy. Dynamic typing.',
    importantPoints: [
        '🔹 Use `let` for reassignable variables, `const` for constants',
        '🔹 Variable names can contain letters, digits, _, $ and must not start with digit',
        '🔹 Case sensitive: `age` and `Age` are different',
        '🔹 uninitialized variables are `undefined`'
    ],
    mcqs: [
        { q: 'Which keyword declares a block-scoped, immutable binding?', options: ['var', 'let', 'const', 'both let and const'], correct: 2 },
        { q: 'What is the value of `x` after `let x;`?', options: ['null','undefined','0','ReferenceError'], correct: 1 }
    ],
    practiceCoding: '// declare a const PI = 3.14 and a let radius = 5;\n// compute area = PI * radius * radius',
    interviewQA: '❓ Q: What is the temporal dead zone? A: The time between entering scope and variable declaration where `let`/`const` cannot be accessed.'
};