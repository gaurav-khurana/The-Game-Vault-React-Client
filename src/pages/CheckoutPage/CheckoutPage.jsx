import "./CheckoutPage.scss";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
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
      <main className="checkout">
        <section className="checkout-cart">
          <h2 className="checkout-cart__title">Checkout</h2>
          <img
            className="checkout-cart__image"
            src={singleGame.image1}
            alt=""
          />
          <h3>{singleGame.title}</h3>
          {/* option 1 */}
          <h3>{price}</h3>
          {/* option 2 */}
          {price === singleGame.price ? (
            <h3>Purchase price{price}</h3>
          ) : (
            <h3>Rental price{price}</h3>
          )}
        </section>
        <section className="checkout-accordian">
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Contact Details
            </AccordionSummary>

            <AccordionDetails className="checkout-accordian-container">
              <label className="checkout-accordian__label" htmlFor="">
                {" "}
                Name
              </label>
              <input
                className="checkout-accordian__input"
                type="text"
                name=""
                id=""
              />

              <label className="checkout-accordian__label" htmlFor="">
                Email
              </label>
              <input
                className="checkout-accordian__input"
                type="email"
                name=""
                id=""
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Shipping
            </AccordionSummary>

            <AccordionDetails className="checkout-accordian-container">
              <label className="checkout-accordian__label" htmlFor="">
                {" "}
                Address
              </label>
              <input
                className="checkout-accordian__input"
                type="text"
                name=""
                id=""
              />

              <label className="checkout-accordian__label" htmlFor="">
                City
              </label>
              <input
                className="checkout-accordian__input"
                type="text"
                name=""
                id=""
              />

              <label className="checkout-accordian__label" htmlFor="">
                Postal Code
              </label>
              <input
                className="checkout-accordian__input"
                type="text"
                name=""
                id=""
              />

              <label className="checkout-accordian__label" htmlFor="">
                Country
              </label>
              <input
                className="checkout-accordian__input"
                type="text"
                name=""
                id=""
              />

              <div className="checkout-accordian__checkbox-container">
                <input
                  className="checkout-accordian__label"
                  type="checkbox"
                  name=""
                  id=""
                />
                <label className="checkout-accordian__checkbox" htmlFor="">
                  Same for Billing Address
                </label>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Payment
            </AccordionSummary>

            <AccordionDetails className="checkout-accordian-container">
              <div className="checkout-accordian__checkbox-container">
                <input
                  className="checkout-accordian__label"
                  type="checkbox"
                  name=""
                  id=""
                />
                <label className="checkout-accordian__checkbox" htmlFor="">
                  Credit card
                </label>
              </div>

              <div className="checkout-accordian__checkbox-container">
                <input
                  className="checkout-accordian__label"
                  type="checkbox"
                  name=""
                  id=""
                />
                <label className="checkout-accordian__checkbox" htmlFor="">
                  Debit card
                </label>
              </div>

              <label className="checkout-accordian__label" htmlFor="">
                {" "}
                Card Number
              </label>
              <input
                className="checkout-accordian__input"
                type="number"
                name=""
                id=""
              />
              <label className="checkout-accordian__label" htmlFor="">
                {" "}
                Expiration Date (MM/YY)
              </label>
              <input
                className="checkout-accordian__input"
                type="number"
                name=""
                id=""
              />

              <label className="checkout-accordian__label" htmlFor="">
                {" "}
                CVV
              </label>
              <input
                className="checkout-accordian__input"
                type="number"
                name=""
                id=""
              />

              <label className="checkout-accordian__label" htmlFor="">
                {" "}
                Name on Card
              </label>
              <input
                className="checkout-accordian__input"
                type="text"
                name=""
                id=""
              />
            </AccordionDetails>
            <AccordionActions>
              <Button>Cancel</Button>
              <Button>Pay Now</Button>
            </AccordionActions>
          </Accordion>
        </section>
      </main>
    </>
  );
}

export default CheckoutPage;
