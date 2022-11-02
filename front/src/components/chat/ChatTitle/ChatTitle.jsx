import './ChatTitle.css'
import outLogo from "../../../images/icons/out.svg";


const ChatTitle = () => {
    return (
        <header className={'title-block'}>
            <div className={'Chat-title'}>
                <p className={'Chat-title-text'}>Первая комната</p>
                <p className={'Chat-light-text'}>2 участника</p>
            </div>
            <a href={'#'}>
                <img className={'Chat-out-logo'} src={outLogo} alt={'out'}/>
            </a>
        </header>
    )
}


export default ChatTitle;