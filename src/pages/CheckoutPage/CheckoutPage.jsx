import "./CheckoutPage.scss";
import { useLocation } from "react-router-dom";

function CheckoutPage() {
  const location = useLocation();
  const { price, singleGame } = location.state;
  console.log(price);
  console.log(singleGame);
  console.log(singleGame.title);
  console.log(singleGame.image1);

  return (
    <>
      <div>CheckoutPage</div>
    </>
  );
}

export default CheckoutPage;
