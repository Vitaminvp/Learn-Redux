import { ADD, DELETE} from '../constants';

function postComments(store = [], action) {
    switch (action.type){
        case ADD:
            return [
                ...store, {
                    user: action.author,
                    text: action.comment
                }];
        case DELETE:
            return [
                ...store.slice(0, action.i),
                ...store.slice(action.i + 1)
            ];
        default: return store
    }
}

export default function comments(store = [], action) {
    if (typeof action.postId !== 'undefined'){
        return {
            ...store,
            [action.postId]: postComments(store[action.postId], action)
        }
    }
    return store;
}