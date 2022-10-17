import './button.css';

const Button = (props) => {
  const {name, className, title, onClick = () => {}} = props;

  return <button
    type="button"
    className={`button ${className}`}
    onClick={onClick}
    title={title}
  >
    {name}
  </button>;
};

export default Button;