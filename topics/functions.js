// topics/functions.js
window.topics = window.topics || {};
window.topics.functions = {
    part: 'Part II',
    title: 'Functions',
    conceptNote: 'declarations, expressions, arrow functions, parameters, closures',
    importantPoints: [
        '⚡ hoisting: function declarations hoisted, not arrow',
        '⚡ arrow functions have no own `this`, `arguments`',
        '⚡ default parameters'
    ],
    mcqs: [
        { q: 'What does an arrow function lack?', options: ['return','this binding','parameters','body'], correct: 1 }
    ],
    practiceCoding: '// create a closure that counts',
    interviewQA: '❓ Q: what is a first-class function? A: functions treated as values.'
};