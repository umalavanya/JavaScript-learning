// topics/loops.js
window.topics = window.topics || {};
window.topics.loops = {
    part: 'Part II',
    title: 'Loops & iteration',
    conceptNote: 'for, while, do-while, for-in, for-of',
    importantPoints: [
        '🔄 for...in iterates over enumerable keys',
        '🔄 for...of iterates over iterable values',
        '🔄 avoid infinite loops'
    ],
    mcqs: [
        { q: 'Which loop iterates over object keys?', options: ['for...of','for...in','forEach','while'], correct: 1 }
    ],
    practiceCoding: '// print array elements using for...of',
    interviewQA: '❓ Q: difference between for...in and for...of?'
};