import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <main className="homepage">
        <div className="homepage-container">
          {/* <div className="homepage__title-container"> */}
          <h2 className="homepage__title">[G] The Game Vault</h2>
          {/* </div> */}
          <Link to="/menu">
            <h3 className="homepage__text">Open the vault</h3>
          </Link>
        </div>
      </main>
    </>
  );
}

export default HomePage;
