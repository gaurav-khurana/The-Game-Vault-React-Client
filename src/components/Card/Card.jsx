import ReactIcon from "../../assets/images/react.svg";
import "./Card.scss";

function Card() {
  return (
    <>
      <div>Card Component</div>
      <div className="card">
        <img src={ReactIcon} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">God of War Ragnarok</h5>
          <p className="card-text">Platform: PS5</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
