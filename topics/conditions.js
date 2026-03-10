// topics/conditions.js
window.topics = window.topics || {};
window.topics.conditions = {
    part: 'Part II',
    title: 'Conditionals',
    conceptNote: 'if, else if, switch, ternary.',
    importantPoints: [
        '✅ falsy values: false, 0, -0, 0n, "", null, undefined, NaN',
        '✅ switch uses strict comparison',
        '✅ ternary: condition ? expr1 : expr2'
    ],
    mcqs: [
        { q: 'Which is falsy?', options: ['"false"','[]','null','{}'], correct: 2 }
    ],
    practiceCoding: '// write a function that returns "even" or "odd"',
    interviewQA: '❓ Q: Can you use `switch` with strings? A: yes.'
};