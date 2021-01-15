import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './PostSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from "../login/StateProvider";
import db from "../firebase/firebase";
import firebase from "firebase";


function PostSender() {
  const [{ user }, dispatch] = useStateValue();
    
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            user: user.displayName,
            image: imageUrl,
        });

        setInput("");
        setImageUrl("");
}
    return (
        <div className="postSender">
            <div className="postSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        className="postSender__input"
                        type="text"
                        placeholder={`whats on your mind, ${user.displayName} ?`} />
                    <input
                        value={imageUrl}
                        onChange={(e)=>setImageUrl(e.target.value)}
                        placeholder="imageURL (optional)" />

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit button
                        </button>
                </form>
            </div>
            <div className="postSender__bottom">
                <div className="postSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                        <h3>Live Video</h3>
                </div>
                <div className="postSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                        <h3>Photo/Video</h3>
                </div>
                <div className="postSender__option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                        <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default PostSender
