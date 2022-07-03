import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';

function MessageSender(props) {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // this data is to e send when a user posts any thing
    let postData = {
      message: input,
      image: imageUrl,
      username: user,
      liked: false,
      likes: 0,
      comment: '',
      showComment: false,
      expanded: false,
      timestamp: new Date().toString(),
      id: Math.random() * 100,
    };
    //callback to send data of post to parent
    props.handlePosts(postData);
    setInput('');
    setImageUrl('');
  };
  return (
    <div className='messageSender'>
      <div class='messageSender__top'>
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={`What's on your mind, ${user.displayName}?`}
          />

          <input
            placeholder='Image Url (optional) '
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
          />

          <button type='submit' onClick={handleSubmit}>
            Hidden Submit
          </button>
        </form>
      </div>
      <div class='messageSender__bottom'>
        <div class='messageSender__option'>
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>
        <div class='messageSender__option'>
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>
        <div class='messageSender__option'>
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
