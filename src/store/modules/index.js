/** Store Modules */
import address from '@/store/modules/address/address'
import userAuth from '@/store/modules/users/auth'

/**
 * All the modules within this array will have
 * an action to initialize itselves. The name of this action
 * will be given by the `INITIALISER_FUNCTION` constant
 * written into the '@/store/constants.js' file
*/
const toInit = [
    'address',
    'userAuth',
];

const modules = {
    address,
    userAuth
}

export default modules;

export {
    modules,
    toInit,
}

