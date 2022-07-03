import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({
  image,
  comment,
  username,
  timestamp,
  message,
  liked,
  item,
  likes,
  handleLikes,
  profileurl,
  handleComment,
  handleuserComments,
  showComment,
  expanded,
}) {
  const [userComments, setUserComments] = React.useState('');
  return (
    <>
      <div className='post'>
        <div class='post__top'>
          <Avatar src={profileurl} className='post__avatar' />
          <div class='post__topInfo'>
            <h3>{username}</h3>
            <p>{timestamp}</p>
          </div>
        </div>

        <div class='post__bottom'>
          <p>{message}</p>
        </div>

        <div class='post__image'>
          <img src={image} alt='' />
        </div>

        <div class='post__options'>
          <div class='post__option'>
            {likes}
            <ThumbUpIcon
              style={{ marginLeft: '3px', color: liked ? 'blue' : 'gray' }}
              onClick={() => {
                if (item.liked) {
                  alert('already liked');
                } else {
                  handleLikes(item);
                }
              }}
            />
            {/* <p>Like</p> */}
          </div>
          <div class='post__option'>
            <ChatBubbleOutlineOutlinedIcon
              onClick={() => {
                handleComment(item);
              }}
            />
            {/* <p>Comment</p> */}
          </div>
          <div class='post__option'>
            <NearMeIcon />
            {/* <p>Share</p> */}
          </div>
          <div class='post__option'>
            <AccountCircleIcon />
            <ExpandMoreIcon />
          </div>
        </div>
        {showComment ? (
          <div class='post__top'>
            <Avatar src={profileurl} className='post__avatar' />

            <div class='post__topInfo'>
              <h3>{username}</h3>
              <p>{comment}</p>
            </div>
          </div>
        ) : null}

        {expanded ? (
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <input
                type='text'
                placeholder='enter comment'
                style={{ width: '100%', height: '30px', border: 'none' }}
                onChange={event => setUserComments(event.target.value)}
              />
              <button onClick={() => handleuserComments(userComments, item)}>
                Comment
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Post;
