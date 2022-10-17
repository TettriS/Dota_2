import './footer.css';

const Footer = () => {
  return <footer className="App-footer">
    <span className="App-footer__text">2022© OpenDota</span>
    <div className="App-footer__links">
      <a href="#" className="App-footer__link">Политика конфидициальности</a>
      <a href="#" className="App-footer__link">О нас</a>
      <a href="https://docs.opendota.com/#" className="App-footer__link">Документация API</a>
    </div>
  </footer>;
};

export default Footer;