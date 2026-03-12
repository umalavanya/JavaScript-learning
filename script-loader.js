// script-loader.js - Automatically loads all topic files
(function() {
    // List all your topic files in order
    const scriptFiles = [
        // Core data first
        'topics/questions-database.js',
        'topics/coding-problems.js',
        'topics/progress-tracker.js',
        
        // Basics
        'topics/basics.js',
        'topics/part1_basics/features.js',
        'topics/part1_basics/variables.js',
        'topics/datatypes.js',
        'topics/typeconversions.js',
        'topics/operators.js',
        'topics/controlflow.js',
        
        // Functions
        'topics/functions.js',
        'topics/arrowfunctions.js',
        'topics/closures.js',
        'topics/callbacks.js',
        'topics/promises.js',
        'topics/async.js',
        
        // Objects
        'topics/objects.js',
        'topics/arrays.js',
        'topics/classes.js',
        'topics/prototypes.js',
        
        // Advanced
        'topics/this-keyword.js',
        'topics/eventloop.js',
        'topics/errorhandling.js',
        'topics/modules.js'
    ];
    
    // Load scripts sequentially
    function loadScripts(index) {
        if (index >= scriptFiles.length) {
            // All scripts loaded, now load app.js
            const appScript = document.createElement('script');
            appScript.src = 'app.js';
            document.body.appendChild(appScript);
            return;
        }
        
        const script = document.createElement('script');
        script.src = scriptFiles[index];
        script.onload = function() {
            loadScripts(index + 1); // Load next script
        };
        script.onerror = function() {
            console.error('Failed to load:', scriptFiles[index]);
            loadScripts(index + 1); // Continue even if one fails
        };
        document.body.appendChild(script);
    }
    
    // Start loading
    loadScripts(0);
})();