import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../AC';

import Main from './Main';

function mapStateToProps(store){
    return {
        posts: store.posts,
        comments: store.comments
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;