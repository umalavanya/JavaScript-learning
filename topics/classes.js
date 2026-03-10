// topics/classes.js
window.topics = window.topics || {};
window.topics.classes = {
    part: 'Part III',
    title: 'ES6 Classes',
    conceptNote: 'syntax sugar over prototypes, constructor, extends, super',
    importantPoints: [
        '🏷️ class declaration, not hoisted',
        '🏷️ `extends` and `super`',
        '🏷️ static methods'
    ],
    mcqs: [
        { q: 'To call parent constructor, use:', options: ['parent()','super()','this()','new'], correct: 1 }
    ],
    practiceCoding: '// create a Animal class and Dog subclass',
    interviewQA: '❓ Q: Are classes hoisted? A: no, they are not.'
};