console.log('starting in base');
import {projectId,projectName} from 'module1.js';
import someValue from 'module2.js';
import {default as myProjectName} from 'module2.js';
import * as values from 'module3.js';
console.log('ending in base');
console.log(someValue);
console.log(`Alias name ${myProjectName}`);
console.log(`${projectName} has id:${projectId}`);
console.log(values);

// output
// module1.js: in module1
// base.js: starting in base
// base.js: ending in base
// base.js: BuildIt has id:99

//Imp: import statement get hoisted and dependecies will execute first.