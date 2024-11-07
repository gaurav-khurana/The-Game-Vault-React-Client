import "./GameCard.scss";
import { useNavigate } from "react-router-dom";

function GameCard({ game }) {
  const navigate = useNavigate();

  const id = game.id;

  const handleConsole = () => {
    if (id >= 1 && id <= 10) {
      navigate(`/games/xbox/${game.id}`);
      return;
    }

    if (id >= 11 && id <= 20) {
      navigate(`/games/ps/${game.id}`);
      return;
    }
  };

  return (
    <>
      <article className="gamecard" onClick={handleConsole}>
        {/* <Link to={`/games/ps/${game.id}`}> */}
        {/* <Link to={`/games/xbox/${game.id}`}> */}
        {/* <Link to={`/games/${console}/${game.id}`}> */}

        <img
          className="gamecard__image"
          src={game.image1}
          alt={`Image of ${game.title}`}
        />

        <h3 className="gamecard__title">{game.title}</h3>

        {/* <h3 className="gamecard__title">Spiderman 2 Miles Morales</h3> */}
      </article>
    </>
  );
}

export default GameCard;
