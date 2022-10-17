import './anchor.css';

const Anchor = ({prefix, children, postfix, className, href, onClick}) => {

  return <div className={`anchor ${className}`}>
    {prefix}
    <a href={href} className="anchor__link" onClick={onClick}>{children}</a>
    {postfix}
  </div>;
};

export default Anchor;