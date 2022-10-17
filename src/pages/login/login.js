import './login.css';
import Form from '../../components/form/form';
import Input from '../../components/input/input';
import Anchor from '../../components/anchor/anchor';
import Button from '../../components/button/button';

const Login = (props) => {

  return <Form className="login">
    <h1>Авторизация</h1>
    <Input label="Логин / E-mail" type="text" className="login__input"></Input>
    <Input label="Пароль" type="password" className="login__input"></Input>
    {props.children}
    <div className="login__buttons">
      <Button></Button>
      <Anchor prefix="Нет учетной записи?" className="register" href="#" onClick={()=>{}}>Регистрация</Anchor>
      <Anchor prefix="Забыли пароль?" className="pass-lost" href="#">Восстановить пароль </Anchor>
    </div>
  </Form>;
};

export default Login;