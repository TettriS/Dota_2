import './input.css';

const Input = ({
                 name = 'Input',
                 type = 'text',
                 className = '',
                 placeholder = '',
                 onChange,
                 label
               }) => {

  return <label className={`input__label ${className}`}>
    {label ?? ''}
    <input
      name={name}
      type={type}
      className="input"
      placeholder={placeholder}
      onChange={onChange}
    />
    <div className={`input__reaction-line`}></div>
  </label>;
};

export default Input;