// topics/datatypes.js
window.topics = window.topics || {};
window.topics.datatypes = {
    part: 'Part I',
    title: 'Data Types',
    conceptNote: 'Primitives: string, number, bigint, boolean, undefined, symbol, null. Everything else is object.',
    importantPoints: [
        '🔸 `typeof` operator: `typeof null` → "object" (historical bug)',
        '🔸 Numbers: integer and floating point (IEEE 64-bit)',
        '🔸 Template literals: `hello ${name}`',
        '🔸 Symbol() creates unique identifier'
    ],
    mcqs: [
        { q: 'typeof [1,2,3] ?', options: ['array','object','Array','null'], correct: 1 },
        { q: 'Which is not a primitive?', options: ['string','boolean','object','symbol'], correct: 2 }
    ],
    practiceCoding: '// create a symbol, a bigint, and check typeof.',
    interviewQA: '❓ Q: How to check if something is an array? A: Array.isArray()'
};