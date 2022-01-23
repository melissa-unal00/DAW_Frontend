import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header, NavbarComp, Footer, FormField } from "../components/index";
import Product from "../components/molecules/Product/Product";
import "./ProductsPage.scss";

const ProductsPage = () => {
  const [data, setData] = useState<[]>([]);
  const fetchData = () => {
    axios
      .get("https://localhost:44336/allProducts")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const generateProductListAll = (productsList: []) => {
    const productsHtmlList = productsList.map((value: any, index) => {
      return (
        <Product
          key={"product_item_" + index}
          title={value.name}
          description={value.description}
          image={value.image}
          price={value.price + "€"}
        />
      );
    });
    return productsHtmlList;
  };
  const productItemsAll = generateProductListAll(data);

  const generateProductListEyes = (productsList: []) => {
    const productsHtmlList = productsList.map((value: any, index) => {
      if (value.categoryId === "7cc18b8d-e68f-47d5-65fd-08d9cfb6b011") {
        return (
          <Product
            key={"product_item_" + index}
            title={value.name}
            description={value.description}
            image={value.image}
            price={value.price + "€"}
          />
        );
      }
    });
    return productsHtmlList;
  };
  const productItemsEyes = generateProductListEyes(data);

  const generateProductListSkin = (productsList: []) => {
    const productsHtmlList = productsList.map((value: any, index) => {
      if (value.categoryId === "dab366c6-582c-47d6-65fe-08d9cfb6b011") {
        return (
          <Product
            key={"product_item_" + index}
            title={value.name}
            description={value.description}
            image={value.image}
            price={value.price + "€"}
          />
        );
      }
    });
    return productsHtmlList;
  };
  const productItemsSkin = generateProductListSkin(data);

  const generateProductListLips = (productsList: []) => {
    const productsHtmlList = productsList.map((value: any, index) => {
      if (value.categoryId === "44ccbe54-195f-46f7-65ff-08d9cfb6b011") {
        return (
          <Product
            key={"product_item_" + index}
            title={value.name}
            description={value.description}
            image={value.image}
            price={value.price + "€"}
          />
        );
      }
    });
    return productsHtmlList;
  };
  const productItemsLips = generateProductListLips(data);

  const [selectedOption, setSelectedOption] = useState("All");

  return (
    <div>
      <Header />
      <NavbarComp />

      <div className="products-page__category">
        <FormField
          variant="standard"
          label="Category"
          type="text"
          select
          value={selectedOption}
          onChange={(e: any) => setSelectedOption(e.target.value)}
        />
      </div>
      {selectedOption === "All" ? (
        <div className="products-page__product">{productItemsAll}</div>
      ) : null}

      {selectedOption === "Eyes" ? (
        <div className="products-page__product">{productItemsEyes}</div>
      ) : null}

      {selectedOption === "Skin" ? (
        <div className="products-page__product">{productItemsSkin}</div>
      ) : null}

      {selectedOption === "Lips" ? (
        <div className="products-page__product">{productItemsLips}</div>
      ) : null}

      {/* <select
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value);
        }}
      >
        <option value="All">All</option>
        <option value="Eyes">Eyes</option>
        <option value="Skin">Skin</option>
        <option value="Lips">Lips</option>
      </select> */}
      <Footer />
    </div>
  );
};

export default ProductsPage;
