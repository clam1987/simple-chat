import React from 'react';

const ChatBoxMessage = props => {
    return (
        <>
        <div className="messages">
            <div className="messages-content">
                    {props.messageList.map((message, i) => (
                        <>
                        <div key={i} className={`message ${message.ownedByCurrentUser ? "message-personal" : "new"}`}>{message.body}</div>
                        <div className={`user ${message.ownedByCurrentUser ? "user-name" : "new-name"}`}>{message.ownedByCurrentUser ? 'me' : 'you'}</div>
                        </>
                    ))}
            </div>
        </div>
        <form className="message-box">
            <textarea type="text" className="message-input" placeholder="Type message..." onChange={props.changeEvent} value={props.messages}></textarea>
            <button type="submit" className="message-submit" onClick={props.handleSubmit}>Send</button>
        </form>
        </>
    )
};

export default ChatBoxMessage;