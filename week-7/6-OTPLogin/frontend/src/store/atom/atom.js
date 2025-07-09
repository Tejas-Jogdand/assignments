import {atom,selector} from 'recoil'

export const loginAtom = atom({
    key : "loginAtom",
    default : {
        step:'send',
        phone:'',
        otp:'',
        loading:false,
        error:null
    }
})

