import "./XboxProductPage.scss";
import XboxHero from "../../assets/images/xbox.png";
import HeartGreen from "../../assets/icons/heart-green.svg";
import LeftGreen from "../../assets/icons/left-key-green.svg";
import RightGreen from "../../assets/icons/right-key-green.svg";
import { Link } from "react-router-dom";
import GameCard from "../../components/GameCard/GameCard";
// import { useEffect, useState } from "react";
// import axios from "axios";
import allGamesData from "../../data/xbox-ps-games.json";

function XboxProductPage() {
  const allXboxGames = allGamesData.filter(
    (game) => game.platform === "Xbox One  Xbox Series X | S"
  );

  return (
    allXboxGames && (
      <>
        <main className="xbox">
          <section className="xbox-hero">
            <Link to="/">
              <h2 className="xbox-hero__logo">[G]</h2>
            </Link>

            <h2 className="xbox-hero__title">Xbox</h2>

            <img
              className="xbox-hero__image"
              src={XboxHero}
              alt="Xbox controller"
            />
          </section>

          {/* extract icons with text to seperate component & try to make it reusable for xbox & ps page */}
          <section className="xbox-icons-container">
            <div className="xbox-icons-group">
              <div className="xbox-icon-container">
                <img
                  className="xbox-icon__image"
                  src={HeartGreen}
                  alt="All Xbox games icon"
                />
                <h3 className="xbox-icon__text">All</h3>
              </div>
              <div className="xbox-icon-container">
                <img
                  className="xbox-icon__image"
                  src={LeftGreen}
                  alt="Icon in Green for Rental option"
                />
                <h3 className="xbox-icon__text">Rent</h3>
              </div>
              <div className="xbox-icon-container">
                <img
                  className="xbox-icon__image"
                  src={RightGreen}
                  alt="Icon in blue for Buying option"
                />
                <h3 className="xbox-icon__text">Buy</h3>
              </div>
            </div>
          </section>

          <section className="xbox-titles-container">
            {/* map func here to serve image & data to GameCard */}

            {allXboxGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </section>
        </main>
      </>
    )
  );
}

export default XboxProductPage;
