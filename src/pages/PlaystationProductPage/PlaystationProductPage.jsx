import "./PlaystationProductPage.scss";
import PsHero from "../../assets/images/ps.png";
import HeartBlue from "../../assets/icons/heart-blue.svg";
import LeftBlue from "../../assets/icons/left-key-blue.svg";
import RightBlue from "../../assets/icons/right-key-blue.svg";
import { Link } from "react-router-dom";
import GameCard from "../../components/GameCard/GameCard";

function PlaystationProductPage() {
  return (
    <>
      {/* <div>PlaystationProductPage</div> */}
      <main className="ps">
        <section className="ps-hero">
          <Link to="/">
            <h2 className="ps-hero__logo">[G]</h2>
          </Link>
          <h2 className="ps-hero__title">Playstation</h2>
          <img
            className="ps-hero__image"
            src={PsHero}
            alt="Playstation controller"
          />
        </section>
        <section className="ps-icons-container">
          <div className="ps-icons-group">
            <div className="ps-icon-container">
              <img
                className="ps-icon__image"
                src={HeartBlue}
                alt="All Playstation games icon"
              />
              <h3 className="ps-icon__text">All</h3>
            </div>
            <div className="ps-icon-container">
              <img
                className="ps-icon__image"
                src={LeftBlue}
                alt="Icon in blue for Rental option"
              />
              <h3 className="ps-icon__text">Rent</h3>
            </div>
            <div className="ps-icon-container">
              <img
                className="ps-icon__image"
                src={RightBlue}
                alt="Icon in blue for Buying option"
              />
              <h3 className="ps-icon__text">Buy</h3>
            </div>
          </div>
        </section>
        <section className="ps-titles-container">
          {/* map func here to serve image & data to GameCard */}
          <GameCard />
          <GameCard />
        </section>
      </main>
    </>
  );
}

export default PlaystationProductPage;
