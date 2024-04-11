import "./CheckoutPage.scss";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function CheckoutPage() {
  const location = useLocation();
  const { price, singleGame } = location.state;
  console.log(price);
  console.log(singleGame);
  console.log(singleGame.title);
  console.log(singleGame.image1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [cardName, setCardName] = useState("");

  // handlers to get form data
  function handleForm(event) {
    event.preventDefault();
    console.log(event);
  }

  function handleName(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleEmail(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }
  function handleAddress(event) {
    console.log(event.target.value);
    setAddress(event.target.value);
  }
  function handleCity(event) {
    console.log(event.target.value);
    setCity(event.target.value);
  }
  function handlePostalCode(event) {
    console.log(event.target.value);
    setPostalCode(event.target.value);
  }
  function handleCountry(event) {
    console.log(event.target.value);
    setCountry(event.target.value);
  }
  function handleCardNumber(event) {
    console.log(event.target.value);
    setCardNumber(event.target.value);
  }
  function handleExpDate(event) {
    console.log(event.target.value);
    setExpDate(event.target.value);
  }
  function handleCVV(event) {
    console.log(event.target.value);
    setCVV(event.target.value);
  }
  function handleCardName(event) {
    console.log(event.target.value);
    setCardName(event.target.value);
  }

  // make new object
  const newOrder = {
    name: name,
    email: email,
    address: address,
    city: city,
    postalCode: postalCode,
    country: country,
    cardNumber: cardNumber,
    expDate: expDate,
    cvv: cvv,
    cardName: cardName,
  };
  console.log(newOrder);

  return (
    <>
      <main className="checkout">
        <h2 className="checkout__title">Checkout</h2>
        <section className="checkout-container">
          <section className="checkout-cart">
            <img
              className="checkout-cart__image"
              src={singleGame.image1}
              alt=""
            />
            <h3 className="checkout-cart__title">{singleGame.title}</h3>
            {/* option 1 */}
            {/* <h3 className="checkout-cart__title">{price}</h3> */}
            {/* option 2 */}
            {price === singleGame.price ? (
              <h3 className="checkout-cart__title">Purchase price {price}</h3>
            ) : (
              <h3 className="checkout-cart__title">Rental price {price}</h3>
            )}
          </section>
          <section className="checkout-accordian" onSubmit={handleForm}>
            <Accordion defaultExpanded>
              <AccordionSummary
                className="checkout-accordian__collapsed"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Contact Details
              </AccordionSummary>
              <AccordionDetails className="checkout-accordian-container">
                <label className="checkout-accordian__label" htmlFor="name">
                  {" "}
                  Name
                </label>
                <input
                  className="checkout-accordian__input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="john doe"
                  onInput={handleName}
                />
                <label className="checkout-accordian__label" htmlFor="email">
                  Email
                </label>
                <input
                  className="checkout-accordian__input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="abc@example.com"
                  onInput={handleEmail}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                className="checkout-accordian__title"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Shipping
              </AccordionSummary>
              <AccordionDetails className="checkout-accordian-container">
                <label className="checkout-accordian__label" htmlFor="address">
                  {" "}
                  Address
                </label>
                <input
                  className="checkout-accordian__input"
                  type="text"
                  name="address"
                  id="address"
                  onChange={handleAddress}
                />
                <label className="checkout-accordian__label" htmlFor="city">
                  City
                </label>
                <input
                  className="checkout-accordian__input"
                  type="text"
                  name="city"
                  id="city"
                  onChange={handleCity}
                />
                <label className="checkout-accordian__label" htmlFor="code">
                  Postal Code
                </label>
                <input
                  className="checkout-accordian__input"
                  type="text"
                  name="code"
                  id="code"
                  onChange={handlePostalCode}
                />
                <label className="checkout-accordian__label" htmlFor="country">
                  Country
                </label>
                <input
                  className="checkout-accordian__input"
                  type="text"
                  name="country"
                  id="country"
                  onChange={handleCountry}
                />
                <div className="checkout-accordian__checkbox-container">
                  <input
                    className="checkout-accordian__checkbox"
                    type="checkbox"
                    name="billing"
                    id="billing"
                  />
                  <label
                    className="checkout-accordian__checkbox-label"
                    htmlFor="billing"
                  >
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
                    className="checkout-accordian__checkbox"
                    type="checkbox"
                    name="creditcard"
                    id="creditcard"
                  />
                  <label
                    className="checkout-accordian__checkbox-label"
                    htmlFor="creditcard"
                  >
                    Credit card
                  </label>
                </div>
                {/* <div className="checkout-accordian__checkbox-container">
                  <input
                    className="checkout-accordian__label"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <label className="checkout-accordian__checkbox" htmlFor="">
                    Debit card
                  </label>
                </div> */}
                <label
                  className="checkout-accordian__label"
                  htmlFor="cardnumber"
                >
                  Card Number
                </label>
                <input
                  className="checkout-accordian__input"
                  type="number"
                  name="cardnumber"
                  id="cardnumber"
                  placeholder="xxxx"
                  onChange={handleCardNumber}
                />
                <label className="checkout-accordian__label" htmlFor="expdate">
                  Expiration Date (MM/YY)
                </label>
                <input
                  className="checkout-accordian__input"
                  type="number"
                  name="expdate"
                  id="expdate"
                  placeholder="MM/YY"
                  onChange={handleExpDate}
                />
                <label className="checkout-accordian__label" htmlFor="cvv">
                  CVV
                </label>
                <input
                  className="checkout-accordian__input"
                  type="number"
                  name="cvv"
                  id="cvv"
                  placeholder="xxx"
                  onChange={handleCVV}
                />
                <label
                  className="checkout-accordian__label"
                  htmlFor="nameoncard"
                >
                  Name on Card
                </label>
                <input
                  className="checkout-accordian__input"
                  type="text"
                  name="nameoncard"
                  id="nameoncard"
                  placeholder="john doe"
                  onChange={handleCardName}
                />
              </AccordionDetails>

              <AccordionActions>
                <Button className="btn btn__cancel">Cancel</Button>
                <Link to="/orderconfirmation">
                  <Button
                    // variant="container"
                    // color="success"
                    className="btn btn__pay"
                  >
                    Pay Now
                  </Button>
                </Link>
              </AccordionActions>
            </Accordion>
          </section>
        </section>
      </main>
    </>
  );
}

export default CheckoutPage;
