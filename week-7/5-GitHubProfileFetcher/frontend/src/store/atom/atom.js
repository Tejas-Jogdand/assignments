import {atomFamily, selectorFamily} from 'recoil'
import axios from 'axios'

export const profileAtomFamily = atomFamily({
    key : "profileAtomFamily",
    default : selectorFamily({
        key : "profileAtomFamilySelector",
        get : (id) => async () => {
            const profileAtom = await axios.get(`https://api.github.com/users/${id}`);
            return profileAtom;
        }
    })
})