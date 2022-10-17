import {useState} from "react";

import logo from '../../images/logos/Color=Light, Type=Default.svg';
import pic1 from '../../images/mainpage-icons/Icon 1.svg';
import pic2 from '../../images/mainpage-icons/Icon 2.svg';
import pic3 from '../../images/mainpage-icons/Icon 3.svg';
import './App.css';
import "../../components/auth-button/auth-button.css";
import Search from '../../components/search/search';
import ButtonPane from '../../components/button-pane/button-pane';
import Button from "../../components/button/button";
import InfoBlock from "../../components/info-block/info-block";
import Popup from "../../components/popup/popup";
import Login from "../../pages/login/login";
import Footer from "../../components/footer/footer";

function App() {
  const buttons = [
    {
      context: 'Список матчей',
      id: '1',
      onClick: () => {
      }
    },
    {
      context: 'Список команд',
      id: '2',
      onClick: () => {
      }
    }
  ];
  const info = [
    {
      id: '1',
      picture: pic1,
      term: 'Открытый источик',
      description: 'Вся информация и данные для сайта берутся из OpenSource данных.'
    },
    {
      id: '2',
      picture: pic2,
      term: 'Подробные данные',
      description: 'Анализ файлов повторов предоставляет очень подробные данные о матче.'
    },
    {
      id: '3',
      picture: pic3,
      term: 'Бесплатно',
      description: 'Серверы финансируются спонсорами, а код поддерживают волонтеры, поэтому услуга предоставляется бесплатно.'
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Button className="auth-button" onClick={() => setIsOpen(true)}>Авторизация</Button>
        <Popup open={isOpen} className="popup__login">
          <Login>
            <Button className="login__close" onClick={() => setIsOpen(false)} />
          </Login>
        </Popup>
      </header>
      <main className="App-main">
        <Search  />
        <ButtonPane buttons={buttons}/>
        <InfoBlock contain={info}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
