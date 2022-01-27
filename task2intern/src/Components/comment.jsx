import React from 'react';

function Comment(props){
    const {active, src, name, time, message} = props;
    return (
        <div className="comment">
            <img alt="profile-img" className={active ? "active" : null} src={src} />
            <div className="details">
                <h1>{name}</h1>
                <span>{time}</span>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default Comment;