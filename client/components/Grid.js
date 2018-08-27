import  React from 'react';
import Photo from "./Photo";

export default class Grid extends React.Component {
    render() {
        const { posts, comments } = this.props;
         return (
            <div className="photo-grid">
                {posts.map((post, i) => <Photo {...this.props} key = {i} i = {i} post = {post}/>)}
            </div>
        )
    }
};