import React, { useState } from "react";
import "./product.css";
import { FaChevronRight, FaChevronLeft, FaCartPlus } from "react-icons/fa";

interface Props {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
}

const productsList: Props[] = [
  {
    id: 1,
    name: "Laptop Asus",
    description: "Đây là laptop Asus",
    img: "https://consumerqueen.com/wp-content/uploads/2017/03/Asus-Laptop-1.jpeg",
    price: 10000000,
  },
  {
    id: 2,
    name: "Macbook",
    description: "Đây là Macbook",
    img: "https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/5d/50/5e/1d977cb23133c625f0baf7f4326cf523.jpg",
    price: 20000000,
  },
  {
    id: 3,
    name: "Laptop Dell",
    description: "Đây là laptop Dell",
    img: "https://hanoicomputercdn.com/media/product/64720_laptop_dell_latitude_3420_16.png",
    price: 15000000,
  },
  {
    id: 4,
    name: "Laptop HP",
    description: "Đây là laptop HP",
    img: "https://cdn.ankhang.vn/media/product/22670_laptop_hp_240_g8_6l145pa_13.jpg",
    price: 18000000,
  },
  {
    id: 5,
    name: "Laptop Surface",
    description: "Đây là laptop Surface",
    img: "https://vuongkhang.com/thumb/720/upload/2020/10/laptop-go/Sandstone/surface-laptop-go-sandstone-1.jpg",
    price: 22000000,
  },
  {
    id: 6,
    name: "Laptop Lenovo",
    description: "Đây là laptop Lenovo",
    img: "https://cdn.dangvu.vn/media/2021/08/lenovo-dangvu-7.jpg",
    price: 12000000,
  },
];
export { productsList };
const Product = (props: Props): JSX.Element => {
  const [products, setProducts] = useState<Props[]>(productsList);

  // const addQuantity = (index: number) => {
  //   const updatedProducts = [...products];
  //   updatedProducts[index];
  //   setProducts(updatedProducts);
  // };

  // const reduceQuantity = (index: number) => {
  //   const updatedProducts = [...products];
  //   if (updatedProducts[index].quantity > 0) {
  //     updatedProducts[index].quantity--;
  //     setProducts(updatedProducts);
  //   }
  // };

  return (
    <div>
      <section className="products">
        <div className="productCart">
          <button className="cartBtn">
            <FaCartPlus />
          </button>
          <p className="productCartQuantity"></p>
        </div>
        <div className="productBackground">
          {productsList.map((item: any) => {
            return (
              <div className="productBox">
                <div className="productDetail">
                  <img src={item.img} alt="" />
                  <div className="productInfo" key={item.id}>
                    <h2 className="productsName">{item.name}</h2>
                    <p className="productDecs">{item.description}</p>
                    <div className="productPriceAndBtn">
                      <p className="productPrice">$ {item.price}</p>
                      <div className="visibleBtn">
                        <div className="productBtn">
                          <button className="reduceQuantity">
                            <FaChevronLeft />
                          </button>
                          <p className="productQuantity">1</p>
                          <button className="addQuantity">
                            <FaChevronRight />
                          </button>
                        </div>
                      </div>
                      {/* <div className="addToCart">
                        <button className="addBtn" onClick={() => {}}>
                          Add To Cart
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Product;
