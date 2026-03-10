// topics/objects.js
window.topics = window.topics || {};
window.topics.objects = {
    part: 'Part III',
    title: 'Objects & `this`',
    conceptNote: 'object literal, properties, methods, this, Object methods',
    importantPoints: [
        '📦 property shorthand, computed keys',
        '📦 this depends on call site',
        '📦 Object.assign, spread'
    ],
    mcqs: [
        { q: '`this` inside arrow function?', options: ['global','window','enclosing context','undefined'], correct: 2 }
    ],
    practiceCoding: '// create object with method and use this',
    interviewQA: '❓ Q: how to copy object safely? A: spread or Object.assign'
};