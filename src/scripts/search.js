import '../styles/search.css';
import Button from './button';

const Search = ({onsubmit = () => {}}) => {
  return (
    <div className="search-panel">
      <Button
        name=""
        title="Search"
        addClass="search-panel__button"
        callback={onsubmit}
      />
      <input
        type="text"
        className="search-panel__input"
        placeholder="Поиск по сайту..."
      ></input>
      <div className="search-panel__reaction-line"></div>
    </div>
  );
}

export default Search;