import './button-pane.css';
import Button from '../button/button';

const ButtonPane = ({buttons = []}) => {
  return (
    <div className="button-pane">
      {buttons.map(({context, onClick, id}) => <Button
        className='button-pane__button'
        onClick={onClick}
        key={id}
      >{context}</Button>)}
    </div>
  );
}

export default ButtonPane;