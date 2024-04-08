import "./GameCard.scss";
// import GodOfWar from "../../assets/images/GOW1.webp";
// import Spiderman from "../../assets/images/spiderman1.png";
// import Spiderman2 from "../../assets/images/spiderman2.jpeg";
import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <>
      {/* <div>GameCard</div> */}
      <article className="gamecard">
        {/* <Link to={`/games/ps/${game.id}`}> */}
        <Link to={`/games/xbox/${game.id}`}>
          <img
            className="gamecard__image"
            src={game.image1}
            //   src={GodOfWar}
            //   src={Spiderman}
            //   src={Spiderman2}
            alt="God Of War Ragnarok"
          />
          <h3 className="gamecard__title">{game.title}</h3>
          {/* <h3 className="gamecard__title">God of War: Ragnarok</h3> */}
          {/* <h3 className="gamecard__title">Spiderman 2 Miles Morales</h3> */}
        </Link>
      </article>
    </>
  );
}

export default GameCard;
