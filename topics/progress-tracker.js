// topics/progress-tracker.js
window.progressTracker = (function() {
    const STORAGE_KEY = 'js_learning_progress';
    
    function loadProgress() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    }
    
    function saveProgress(progress) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
    
    function markCompleted(topicId) {
        const progress = loadProgress();
        progress[topicId] = {
            completed: true,
            date: new Date().toISOString(),
            quizScores: progress[topicId]?.quizScores || []
        };
        saveProgress(progress);
        updateUI();
    }
    
    function saveQuizScore(topicId, score, total) {
        const progress = loadProgress();
        if (!progress[topicId]) progress[topicId] = { completed: false, quizScores: [] };
        progress[topicId].quizScores.push({ score, total, date: new Date().toISOString() });
        saveProgress(progress);
    }
    
    function getProgress() {
        return loadProgress();
    }
    
    return {
        markCompleted,
        saveQuizScore,
        getProgress
    };
})();