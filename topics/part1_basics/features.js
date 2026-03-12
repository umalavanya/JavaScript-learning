// topics/variables.js - Complete with all content types
(function() {
    window.topics = window.topics || {};
    
    window.topics.variables = {
        part: 'Basics',
        title: 'JavaScript Variables',
        conceptNote: 'Variables are containers for storing data values. JavaScript uses `let`, `const`, and `var` for variable declaration.',
        
        importantPoints: [
            '🔹 `let` - declares a block-scoped, reassignable variable',
            '🔹 `const` - declares a block-scoped, non-reassignable variable (must be initialized)',
            '🔹 `var` - function-scoped, hoisted, can be redeclared (avoid in modern JS)',
            '🔹 Variable naming: letters, digits, _, $, cannot start with digit',
            '🔹 Case-sensitive: `myVar` and `myvar` are different',
            '🔹 Uninitialized variables are `undefined`',
            `<table>
            <tr>
            <th></th></tr>
            </table>`
        ],
        
        mcqs: [
            { 
                q: 'Which keyword declares a block-scoped variable that cannot be reassigned?', 
                options: ['let', 'const', 'var', 'both let and var'], 
                correct: 1 
            },
            { 
                q: 'What happens if you declare a variable with `const` without assigning a value?', 
                options: [
                    'It becomes undefined', 
                    'SyntaxError', 
                    'It becomes null', 
                    'It works fine'
                ], 
                correct: 1 
            },
            { 
                q: 'What is the value of `x` after `let x;`?', 
                options: ['null', 'undefined', '0', 'ReferenceError'], 
                correct: 1 
            }
        ],
        
        practiceCoding: `// Exercise 1: Variable Declaration
// Declare a const variable for PI (3.14159)
// Declare a let variable for radius (5)
// Calculate and log the area of a circle (PI * radius * radius)

// Exercise 2: Variable Reassignment
// Create a let variable called "score" with value 0
// Update it to 10, then to 25
// Try doing the same with a const - what happens?

// Exercise 3: Variable Scope
// Create a block using { } and declare a variable inside it with let
// Try accessing it outside the block - what happens?`,
        
        interviewQA: `❓ **Q: What's the difference between let, const, and var?**

**A:** 
- **var** is function-scoped, can be redeclared, and is hoisted to the top of its scope. It can lead to bugs, so modern JS avoids it.
- **let** is block-scoped, cannot be redeclared in the same scope, and is hoisted but not initialized (Temporal Dead Zone).
- **const** is block-scoped, cannot be reassigned, and must be initialized at declaration. For objects, the reference is constant but properties can be modified.

❓ **Q: What is the Temporal Dead Zone (TDZ)?**

**A:** The TDZ is the time between entering a scope and the actual declaration of a let/const variable. Accessing the variable during this period throws a ReferenceError. This prevents accessing variables before they're properly initialized.`
    };
})();