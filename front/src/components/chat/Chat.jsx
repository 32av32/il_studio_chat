import './Chat.css';
import ChatTitle from './ChatTitle/ChatTitle';
import ChatTypeBlock from './ChatTypeBlock/ChatTypeBlock';
import ChatMessages from './ChatMessages/ChatMessages';


const Chat = () => {
    return (
        <div className={'container'}>
            <div className={'Chat-container'}>
                <ChatTitle />
                <ChatMessages />
                <ChatTypeBlock />
            </div>
        </div>
    )
}


export default Chat;