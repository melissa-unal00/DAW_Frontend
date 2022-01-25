import React, { useContext } from "react";
import { Footer, Header, Image, NavbarComp } from "../components";
import { BasketContext } from "../context/BasketContext";
import "./BasketPage.scss";

const BasketPage = () => {
  let basketContextData = useContext(BasketContext);
  return (
    <div>
      <NavbarComp />
      <Header />
      <div>
        {basketContextData.map((value: any, index: string) => {
          return (
            <div key={"product_item_" + index} className="basket">
              <div className="basket__product">
                <Image
                  src={value.image}
                  className="basket__product-image"
                ></Image>
                <span className="basket__product-title">
                  <b>{value.title}</b>
                </span>
                <br />
                <span className="basket__product-price">
                  <b>{value.price}</b>
                </span>
                <br />
                <br />
                <span className="basket__product-description">
                  {value.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default BasketPage;
