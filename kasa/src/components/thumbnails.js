import { Link } from "react-router-dom";

function Thumb ({ id, cover, title }) {
  return (
    <div className="thumbnail" key={id}>
      <Link to={`property/${id}`}>
        <img src={cover} alt={title} className="thumbImg" />
        <p className="thumbTitle">{title}</p>
      </Link>
    </div>
  );
}
export default Thumb