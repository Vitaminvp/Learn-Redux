import { INCREMENT, ADD, DELETE} from '../constants';
//increment
export function increment(index) {
    return {
        type: INCREMENT,
        index
    }
}
//add comment
export function addComment(postId, author, comment) {
    return {
        type: ADD,
        postId,
        author,
        comment
    }
}
//delete comment
export function delComment(postId, i) {
    return {
        type: DELETE,
        postId,
        i
    }
}