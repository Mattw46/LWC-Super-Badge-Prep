import { printMsg } from './module1.js';
import { msg2, msg1 } from './module2.js';
printMsg(msg1 + msg2);    

/*
import { msg2, msg1 } from './module2.js';
printMsg(msg1 + msg2); 
*/

/*
import { msg2, msg1 as msg3 } from './module2.js';
printMsg(msg3 + msg2);    
*/

/*
import { printMsg } from './module1.js';
import * as message from './module2.js';
printMsg(message.msg1 + message.msg2);  
*/

/** canot change exported module except inside the module itself
 * 
 * import { printMsg } from './module1.js';
 * import { msg1, msg2 } from './module2.js';
 * msg1 = 'Did this variable change?'; // cause error
 * printMsg(msg1 + msg2);  
 */