import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {
        // console.log(comments)
        // comments.map(comment =>{return <Comment key={comment.id} comment={comment}/>})
      //   comments.map(item => {
      //   console.log(item)
      //   return <Comment comment={item} />
      // })
      }
    </div>
  );
};

export default Comments;
