import { atom, atomFamily, constSelector, selector, selectorFamily } from 'recoil'
// import {axios} from 'axios'

// export const profileCardAtomFamily = atomFamily({
//     key : 'profileCardAtomFamily',
//     default : selectorFamily({
//         key : 'profileCardSelectorFamily',
//         get : (id) => async({get}) => {
//             const res = await axios.get();
//         }
//     })
// })

export const profileCardAtom = atom({
    key : 'profileCardAtom',
    default : {
        name: "Rita Correia",
        age: 32,
        location: "London",
        photoUrl: "https://images.unsplash.com/photo-1715416345678-2c256f6aa8b9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        followersCount : 80,
        likesCount : 803,
        photosCount : 1.4
    }
})