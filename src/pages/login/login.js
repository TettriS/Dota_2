import {useState} from "react";

import './login.css';
import Form from '../../components/form/form';
import Input from '../../components/input/input';
import Anchor from '../../components/anchor/anchor';
import Button from '../../components/button/button';
import Popup from '../../components/popup/popup';

const Login = ({children, close}) => {
  const [isOpen, setIsOpen] = useState(false);

  return <Form className="login">
    <h1>Авторизация</h1>
    <Input label="Логин / E-mail" type="text" className="login__input"></Input>
    <Input label="Пароль" type="password" className="login__input"></Input>
    {children}
    <div className="login__buttons">
      <Button className="login__enter" onClick={close}>Войти</Button>
      <Anchor prefix="Нет учетной записи?" className="register" href="#" onClick={()=>setIsOpen(true)}>Регистрация</Anchor>
      <Anchor prefix="Забыли пароль?" className="pass-lost" href="#">Восстановить пароль </Anchor>
    </div>
    <Popup open={isOpen} className={'register'}>
        <Button className="login__close" onClick={() => {setIsOpen(false)}} />
    </Popup>
  </Form>;
};

export default Login;