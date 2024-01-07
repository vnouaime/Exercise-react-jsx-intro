const Tweet = ({ username, name, date, message}) => (
    <div className="tweet">
        <span className="username">{username}</span>
        <span className="date">{date}</span>
        <span className="name">{name}</span>
        <p>Message: {message}</p>
        
    </div>
)