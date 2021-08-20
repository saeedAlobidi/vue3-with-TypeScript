
import Store from './store'
import * as userModules from './modules/user'
import * as employessModules from './modules/employess'
const _store=Store({userModules,employessModules})
 
export default _store;

 