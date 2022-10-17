import './search.css';
import Button from '../button/button';

const Search = (props) => {
  const {onSubmit} = props;

  return (
    <div className="search-panel">
      <Button
        name=""
        title="Search"
        className="search-panel__button"
        callback={onsubmit}
      />
      <input
        type="text"
        className="search-panel__input"
        placeholder="Поиск по сайту..."
      />
      <div className="search-panel__reaction-line"></div>
    </div>
  );
}

export default Search;