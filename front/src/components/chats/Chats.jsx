import './Chats.css';
import outLogo from '../../images/icons/out.svg'
import goToLogo from '../../images/icons/go-to.svg'

const Chats = () => {
    return (
        <div>
            <img className={'out-logo'} src={outLogo} alt={'out'}/>
            <div className={'container'}>
                <div className={'form-container'}>
                    <div className={'title-block title-text'}>Выберите / создайте чат</div>
                    <div className={'form-block'}>
                        <div className={'Chats-choose-create-chat Chats-choose-chat'}>
                            <input className={''} type={'text'} placeholder={'Введите название чата'} />
                            <button>
                                <img src={goToLogo} alt={'go to chat'} />
                            </button>
                        </div>
                        <form className={'Chats-choose-create-chat Chats-create-chat'} action={'#'} method={'post'}>
                            <input className={''} type={'text'} placeholder={'Введите название чата'} />
                            <button className={'form-button'} type={'submit'}>Создать</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}


export default Chats;