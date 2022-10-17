import './form.css';

const Form = ({
                name = 'form',
                className = '',
                placeholder = '',
                target = '_self',
                onSubmit,
                action,
                method = 'post',
                children
              }) => {

  return <form
    onSubmit={onSubmit}
    name={name}
    className={className}
    target={target}
    action={action}
    method={method}
  >
    {children}
  </form>;
};

export default Form;