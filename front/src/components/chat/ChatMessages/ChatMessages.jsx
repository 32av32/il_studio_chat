import './ChatMessages.css'
import Message from "./Message";


const ChatMessages = () => {
    return (
        <div className={'Chat-messages'}>
            <p className={'Chat-messages-date Chat-light-text'}>28.10.2022</p>
            <div className={'Chat-messages-items'}>
                <Message sender={'own'} username={'Isa'} messageText={'Отлично! Повозился с websocket’aми,\n' +
                    'но сейчас всё работает.'} messageTime={'11:20'}/>

                <Message sender={'companion'} username={'Isa'} messageText={'Отлично! Повозился с websocket’aми,\n' +
                    'но сейчас всё работает.'} messageTime={'11:20'}/>

            </div>
        </div>
    )
}


export default ChatMessages;