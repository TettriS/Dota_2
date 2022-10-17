import './info-block.css';

const InfoBlock = ({contain}) => {
  return (
    <div className="info-block">
      {[...contain].map(({id, picture, term, description}) => (
        <dl key={id} className={`info-block__block ${picture}`}>
          <dt className="info-block__term">
            <img src={picture} alt=""/><br/>
            {term}
          </dt>
          <dd className="info-block__description">{description}</dd>
        </dl>
      ))}
    </div>
  );
}

export default InfoBlock;