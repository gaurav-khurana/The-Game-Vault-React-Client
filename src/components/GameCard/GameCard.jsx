import "./GameCard.scss";
import GodOfWar from "../../assets/images/GOW1.webp";
import Spiderman from "../../assets/images/spiderman1.png";
import Spiderman2 from "../../assets/images/spiderman2.jpeg";

function GameCard() {
  return (
    <>
      {/* <div>GameCard</div> */}
      <article className="gamecard">
        <img
          className="gamecard__image"
          src={GodOfWar}
          //   src={Spiderman}
          //   src={Spiderman2}
          alt="God Of War Ragnarok"
        />
        <h3 className="gamecard__title">God of War: Ragnarok</h3>
        {/* <h3 className="gamecard__title">Spiderman 2 Miles Morales</h3> */}
      </article>
    </>
  );
}

export default GameCard;
