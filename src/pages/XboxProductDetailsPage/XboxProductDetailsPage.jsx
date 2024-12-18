import "./XboxProductDetailsPage.scss";
import Cart from "../../assets/icons/cart.svg";
// import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import GameCarousel from "../../components/Carousel/Carousel";
import allGamesData from "../../data/xbox-ps-games.json";

function XboxProductDetailsPage() {
  // state to set all games

  // const [singleGame, setSingleGames] = useState({});
  const [price, setPrice] = useState("");

  // get id from params to do api call

  const { id } = useParams();

  // find game by platfrom & id
  const allXboxGames = allGamesData.filter(
    (game) => game.platform === "Xbox One  Xbox Series X | S"
  );

  const singleGame = allXboxGames.find((game) => game.id == id);

  // useEffect to do axios call to get single game by id

  // useEffect(() => {
  //   async function getSingleGame() {
  //     const response = await axios.get(
  //       `http://localhost:8080/games/xbox/${id}`
  //     );

  //     // console.log(response.data);

  //     setSingleGames(response.data);
  //   }

  //   getSingleGame();
  // }, [setSingleGames, id]);

  // event handler to get price selected by user
  const handlePrice = (event) => {
    event.preventDefault();
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.checked);
    // console.log(event.target.id);

    if (event.target.checked && event.target.id === "price") {
      setPrice(singleGame.price);
      // console.log(singleGame.price);
    }
    if (event.target.checked && event.target.id === "price15days") {
      setPrice(singleGame.price_15days);
      // console.log(singleGame.price_15days);
    }
    if (event.target.checked && event.target.id === "price30days") {
      setPrice(singleGame.price_30days);
      // console.log(singleGame.price_30days);
    }
  };

  return (
    singleGame && (
      <>
        <main className="xbox-game">
          <section className="xbox-game-header">
            <Link to="/">
              <h2 className="xbox-game-header__logo">[G]</h2>
            </Link>

            <h2 className="xbox-game-header__title">{singleGame.title}</h2>
          </section>

          <section className="xbox-game-container">
            <section className="xbox-game-about">
              <div className="xbox-game-about-container">
                <h3 className="xbox-game-about__subtitle">Compatibility</h3>
                <h2 className="xbox-game-about__title">
                  {singleGame.platform}
                </h2>
              </div>
              <div className="xbox-game-about-container">
                <h3 className="xbox-game-about__subtitle">About the game</h3>
                <h2 className="xbox-game-about__title">{singleGame.genre}</h2>
              </div>
            </section>

            <section className="xbox-game-price" onChange={handlePrice}>
              <div className="xbox-game-price-container">
                <h3 className="xbox-game-price__subtitle">Rent</h3>
                {/* <h2 className="xbox-game-price__title">{singleGame.platform}</h2> */}
                <label
                  className="xbox-game-price__title"
                  htmlFor="price15days"
                  // onChange={handlePrice}
                >
                  <input
                    className="xbox-game-price__radio"
                    type="radio"
                    name="price"
                    id="price15days"
                  />{" "}
                  {singleGame.price_15days} every two weeks
                </label>
                <label className="xbox-game-price__title" htmlFor="price30days">
                  <input
                    // onChange={handlePrice}
                    className="xbox-game-price__radio"
                    type="radio"
                    name="price"
                    id="price30days"
                  />
                  {singleGame.price_30days} every four weeks
                </label>
              </div>
              <div className="xbox-game-price-container">
                <h3 className="xbox-game-price__subtitle">Purchase</h3>
                <label className="xbox-game-price__title" htmlFor="price">
                  <input
                    // onChange={handlePrice}
                    className="xbox-game-price__radio"
                    type="radio"
                    name="price"
                    id="price"
                  />{" "}
                  {singleGame.price}
                </label>
              </div>
              <Link
                to="/checkout"
                state={{ price: price, singleGame: singleGame }}
              >
                <div className="xbox-game-price__button">
                  <img
                    className="xbox-game-price__button-icon"
                    src={Cart}
                    alt="Cart icon"
                  />
                  <h3 className="xbox-game-price__button-subtitle">
                    Add to cart
                  </h3>
                </div>
              </Link>
            </section>
            <section className="xbox-game-hero">
              <img
                className="xbox-game-hero__image"
                src={singleGame.image1}
                alt="Hero image for game"
              />
            </section>
            <section className="xbox-game-capabilities">
              <h3 className="xbox-game-capabilities__title">Capabilities</h3>
              <section className="xbox-game-capabilities-container">
                <h2 className="xbox-game-capabilities__text">
                  {singleGame.online_play}
                </h2>
                <div className="xbox-game-capabilities__text-container">
                  <h2 className="xbox-game-capabilities__text xbox-game-capabilities__text--small">
                    {singleGame.players}
                  </h2>
                  <h2 className="xbox-game-capabilities__text xbox-game-capabilities__text--small">
                    {singleGame.ratings}
                  </h2>
                </div>
                <h2 className="xbox-game-capabilities__text">
                  Developed by : {singleGame.developer}
                </h2>
                <h2 className="xbox-game-capabilities__text">
                  Release date : {singleGame.release_date}
                </h2>
              </section>
            </section>
            <section className="xbox-game-description">
              <h3 className="xbox-game-description__title"> Description</h3>
              <p className="xbox-game-description__text">
                {singleGame.description}
              </p>
            </section>

            {/* OPTION 1 SIMPLE SCROLL GALLERY */}

            {/* <section className="xbox-game-gallery">
              <img
                className="xbox-game-hero__image"
                src={singleGame.image2}
                alt={`image for ${singleGame.title}`}
              />
              <img
                className="xbox-game-hero__image"
                src={singleGame.image3}
                alt={`image for ${singleGame.title}`}
              />
              <img
                className="xbox-game-hero__image"
                src={singleGame.image4}
                alt={`image for ${singleGame.title}`}
              />
              <img
                className="xbox-game-hero__image"
                src={singleGame.image5}
                alt={`image for ${singleGame.title}`}
              />
              <img
                className="xbox-game-hero__image"
                src={singleGame.image1}
                alt={`image for ${singleGame.title}`}
              />
            </section> */}

            <section className="xbox-game-carousel">
              <GameCarousel singleGame={singleGame} />
            </section>
          </section>
        </main>
      </>
    )
  );
}

export default XboxProductDetailsPage;
