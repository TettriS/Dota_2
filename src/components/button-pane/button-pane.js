import './button-pane.css';
import Button from '../button/button';

const ButtonPane = ({buttons = []}) => {
  return (
    <div className="button-pane">
      {buttons.map(({name, onClick, id}) => <Button
        name={name}
        className='button-pane__button'
        onClick={onClick}
        key={id}
      />)}
    </div>
  );
}

export default ButtonPane;