import React from 'react';
import Comment from './comment';
import image1 from '../Components/pranav.jpeg'

function Comments(){
    const Reply = [
        {
            "active": true,
            "src": image1,
            "name": "Pranav",
            "time": "2 months ago",
            "message": "This is a great post" 
        },
        {
            "active": false,
            "src": image1,
            "name": "Pranav Addikam",
            "time": "2 months ago",
            "message": "This is a great post"
        }
    ];

    return(
        <div className="comment-section">
            <p className="count">45 comments</p>
            {Reply.map((item, index) => {
                return (
                    <Comment
                        key= {item + index}
                        active= {item.active}
                        src= {item.src}
                        name= {item.name}
                        time= {item.time}
                        message= {item.message}
                    />
                );
            })}
        </div>
    );
}

export default Comments;