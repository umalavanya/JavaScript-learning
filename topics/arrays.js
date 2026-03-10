// topics/arrays.js
window.topics = window.topics || {};
window.topics.arrays = {
    part: 'Part III',
    title: 'Array methods',
    conceptNote: 'map, filter, reduce, forEach, find, ...',
    importantPoints: [
        '🎯 map returns new array',
        '🎯 filter, reduce (accumulator)',
        '🎯 splice vs slice'
    ],
    mcqs: [
        { q: 'Which returns a new array?', options: ['forEach','map','filter','both map & filter'], correct: 3 }
    ],
    practiceCoding: '// use filter to get even numbers',
    interviewQA: '❓ Q: difference between splice and slice? A: splice mutates, slice returns new'
};