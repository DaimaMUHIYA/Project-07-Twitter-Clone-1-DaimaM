import React from 'react';
import meta from '../images/Meta.png';

// #3. tweet-editor.

function TweetEditor() {
  return (

    <div className ='tweet-editor'>
      <img className='avatar' src ="src/images/profile-photo.png" alt ="Logo"/>
      
      <div className='tweet-editor-form'>
        <input className='tweet-editor-input' type="text" placeholder='Whats happening ?'/>

        <div className='tweet-editor-buttons'>
          <img className='tweet-editor-actions' src={meta} alt="Logo" />
          <button className='button'>Tweet</button>
        </div>
      </div>
      
    </div>
    

    
    
  );
}

export default TweetEditor;