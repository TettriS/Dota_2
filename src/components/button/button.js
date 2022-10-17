import './button.css';

const Button = (props) => {
  const {children, className, title, onClick = () => {}} = props;

  return <button
    type="button"
    className={`button ${className}`}
    onClick={onClick}
    title={title}
  >
    {children}
  </button>;
};

export default Button;