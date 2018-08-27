import { INCREMENT } from "../constants"

export default function posts(store = [], action) {
    switch(action.type) {
        case INCREMENT:
            const incObj = [...store];
            incObj[action.index].likes++;
            return incObj;
        default: return store;
    }

}