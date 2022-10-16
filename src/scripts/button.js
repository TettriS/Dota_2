import '../styles/button.css';

const Button = ({
                  name,
                  addClass = '',
                  callback = () => 'Search click'
                }) => (
  <button
    type="button"
    className={`button ${addClass}`}
    onClick={callback}
  >
    {name}
  </button>
);

export default Button;