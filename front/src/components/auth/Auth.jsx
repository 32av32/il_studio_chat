import './Auth.css'


const Auth = () => {
    return (
        <div className={'Auth-container container'}>
            <div className={'form-container'}>
                <div className={'title-block title-text'}>Авторизация</div>
                <form className={'form-block'} action={'#'} method={'post'}>
                    <input className={'form-input'} type={'text'} placeholder={'Логин'} />
                    <input className={'form-input'} type={'text'} placeholder={'Пароль'} />
                    <button className={'form-button'} type={'submit'}>Войти</button>
                </form>
            </div>
        </div>
    )
}


export default Auth;