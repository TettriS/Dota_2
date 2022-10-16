import '../styles/button-pane.css';
import Button from './button';

const ButtonPane = ({buttons = []}) => {
  return (
    <div className="button-pane">
      {buttons.map(({name, callback, id}) => <Button
        name={name}
        addClass='button-pane__button'
        onClick={callback}
        key={id}
      />)}
    </div>
  );
}

export default ButtonPane;