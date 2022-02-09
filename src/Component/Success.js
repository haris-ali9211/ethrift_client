import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../RequestMethod";
import orderImg from "../Images/3544858-removebg-preview.png"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";



const Success = () => {

  const location = useLocation();
  console.log("-->>", location.state)
  // const data = location.state.stripeData;
  // const cart = location.state.cart;
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const [orderId, setOrderId] = useState(null);

  
  
  // useEffect(() => {
  //   const createOrder = async () => {
  //     try {
  //       const res = await userRequest.post("/orders", {
  //         userId: currentUser._id,
  //         products: cart.products.map((item) => ({
  //           productId: item.products_id,
  //           quantity: item.count <= 1 ? item.count : item.count[0],
  //         })),
  //         amount: cart.total,
  //         address: data.billing_details.address,
  //       });
  //       setOrderId(res.data._id);
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   };
  //   data && createOrder();
  // }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={orderImg} alt="orderConfirm" />
      {/* {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`} */}
      {/* <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button> */}
      <Link to="/" style={{ textDecoration: "none" }}>
      <button style={{ marginTop: 20 }} class="cssbuttons-io-button"> Go to Home Page
        <div class="icon">
          {/* <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Zm0 5.189c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
          </svg>
        </div>
      </button>
    </Link>
    </div >
  );
};

export default Success;