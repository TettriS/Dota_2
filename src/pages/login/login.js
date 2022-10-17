import './login.css';
import Form from '../../components/form/form';
import Input from '../../components/input/input';

const Login = (props) => {

  return <Form className="login">
    <h1>Авторизация</h1>
    <Input label="Логин / E-mail" type="text" className="login__input"></Input>
    <Input label="Пароль" type="password" className="login__input"></Input>
    {props.children}
  </Form>;
};

export default Login;