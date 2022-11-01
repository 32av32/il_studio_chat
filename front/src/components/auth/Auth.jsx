import './Auth.css'


const Auth = () => {
    return (
        <div className={'Auth-container'}>
            <div>
                <div className={'Auth-title title-text'}>Авторизация</div>
                <form className={'Auth-form'} action={'#'} method={'post'}>
                    <input className={'Auth-form-input'} type={'text'} placeholder={'Логин'} />
                    <input className={'Auth-form-input'} type={'text'} placeholder={'Пароль'} />
                    <button className={'Auth-form-button'} type={'submit'}>Войти</button>
                </form>
            </div>
        </div>
    )
}


export default Auth;