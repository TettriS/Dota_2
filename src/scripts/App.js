import logo from '../images/logos/Color=Light, Type=Default.svg';
import '../styles/App.css';
import Search from './search';
import ButtonPane from './button-pane';
import Button from "./button";
import InfoBlock from "./info-block";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button addClass="auth-button" name="Авторизация" />
      </header>
      <main className="App-main">
        <Search />
        <ButtonPane buttons={
          [{
            name: 'Список матчей',
            id: '1',
            callback: () => {}
          },
          {
            name: 'Список команд',
            id: '2',
            callback: () => {}
          }]
        } />
        <InfoBlock contain={[
          {
            id: '1',
            picture: 'Icon_1',
            term: 'Открытый источик',
            description: 'Вся информация и данные для сайта берутся из OpenSource данных.'
          },
          {
            id: '2',
            picture: 'Icon_2',
            term: 'Подробные данные',
            description: 'Анализ файлов повторов предоставляет очень подробные данные о матче.'
          },
          {
            id: '3',
            picture: 'Icon_3',
            term: 'Бесплатно',
            description: 'Серверы финансируются спонсорами, а код поддерживают волонтеры, поэтому услуга предоставляется бесплатно.'
          },
        ]} />
      </main>
      <footer className="App-footer">
        <span className="App-footer__text">2022© OpenDota</span>
        <div className="App-footer__links">
          <a href="#" className="App-footer__link">Политика конфидициальности</a>
          <a href="#" className="App-footer__link">О нас</a>
          <a href="https://docs.opendota.com/#" className="App-footer__link">Документация API</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
