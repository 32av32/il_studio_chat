import './ChatTypeBlock.css'
import paperAirplane from '../../../images/icons/paper-airplane.svg'



const ChatTypeBlock = () => {
    return (
        <footer className={'Chat-type-block'}>
            <form className={'Chat-type-block-form'} action={'#'} method={'post'}>
                <input type={'text'} placeholder={'Сообщение...'}/>
                <button type={'submit'}>
                    <img src={paperAirplane} alt={'send-message'}/>
                </button>
            </form>
        </footer>
    )
}


export default ChatTypeBlock;