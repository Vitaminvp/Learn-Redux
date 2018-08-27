import  React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Photo extends React.Component {
    render() {
        const {post, comments, i} = this.props;
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img src="http://dummyimage.com/150x60/a6a6ff" className="grid-photo" alt={post.caption}/>
                    </Link>
                    <CSSTransitionGroup
                        transitionName="like"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        <span key={ post.likes } className="likes-heart">{ post.likes }</span>
                    </CSSTransitionGroup>
                </div>
                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button className="likes" onClick={this.props.increment.bind(null, i)} >&hearts; { post.likes }</button>
                        <Link to={`/view/${post.code}`} className="button" >
                            <span className="speech-bubble"></span>
                                { comments[post.code]? comments[post.code].length : 0}
                        </Link>
                    </div>
                </figcaption>
            </figure>
        )
    }
};