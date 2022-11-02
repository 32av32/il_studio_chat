import './Message.css'
import ponytailRight from '../../../images/icons/ponytail-right.svg'
import ponytailLeft from '../../../images/icons/ponytail-left.svg'
import checkLogo from '../../../images/icons/check.svg'


const Message = (props) => {
    return (
        <div className={`Chat-messages-item ${props.sender}`}>
            {props.sender === 'companion' && <p className={'Chat-title-text'}>{props.username}</p>}
            <p className={'Chat-Message-text'}>{props.messageText}</p>
            <div className={'Chat-Message-date'}>
                <p>{props.messageTime}</p>
                { props.sender === 'own' &&
                    <div>
                        <img className={'check-logo'} src={checkLogo} alt={''}/>
                        <img className={'check-logo delivered'} src={checkLogo} alt={''}/>
                    </div>
                }
            </div>
            {props.sender === 'own' ?
                <img className={'ponytail'} src={ponytailRight} alt={''} style={{position: 'absolute', top: '0', right: '-9px'}} /> :
                <img className={'ponytail'} src={ponytailLeft} alt={''} style={{position: 'absolute', top: '0', 'left': '-9px'}} />
            }
        </div>
    )
}


export default Message;