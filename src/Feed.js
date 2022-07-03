import React, { useEffect, useState } from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from './firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  const handlePosts = po => {
    setPosts([...posts, po]);
  };
  const handleLikes = itm => {
    console.log(itm, 'itrrrrr');
    let likedItem = posts.map(o => {
      return o.id === itm.id
        ? { ...o, likes: o.likes + 1, liked: !o.liked }
        : o;
    });
    setPosts(likedItem);
  };
  const handleComment = comt => {
    let commentItem = posts.map(o => {
      return o.id === comt.id
        ? { ...o, expanded: true, showComment: false }
        : o;
    });

    setPosts(commentItem);
  };
  const handleuserComments = (shoCmnt, itm) => {
    console.log(shoCmnt, 'hfbdjhnx');
    let commentUserShow = posts.map(sho => {
      return sho.id === itm.id
        ? { ...sho, comment: shoCmnt, showComment: true, expanded: false }
        : sho;
    });
    setPosts(commentUserShow);
  };
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender handlePosts={handlePosts} />
      {console.log(posts, 'posts')}
      {posts.map(post => (
        <Post
          key={post.id}
          message={post.message}
          timestamp={post.timestamp}
          username={post.username.displayName}
          image={post.image}
          liked={post.liked}
          likes={post.likes}
          item={post}
          profileurl={post.photoURL}
          comment={post.comment}
          expanded={post.expanded}
          showComment={post.showComment}
          handleLikes={handleLikes}
          handleComment={handleComment}
          handleuserComments={handleuserComments}
        />
      ))}
    </div>
  );
}

export default Feed;
