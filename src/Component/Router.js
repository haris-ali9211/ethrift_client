import React from "react";

import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer';
import MainPage02 from './MainPage02';
import MainPage03 from './MainPage03';
import ProductDetail from "./ProductDetail";
import Cartpage from './CartPage'
import SignIn from './SignIn'
import Register from './Register'
import Success from "./Success";

import {
    BrowserRouter,
    Routes,
    Route,
    // useNavigate,
    // navigate,
    Redirect
} from "react-router-dom";
import { useSelector } from "react-redux";


const Router = () => {

    const user = useSelector((state) => state.user.currentUser);
    // const navigate = useNavigate();

    // const puch = () => {
    //     navigate("/");
    // };

    // const pushSign = () => {
    //     navigate("/SignIn");
    // };

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/MainPage02" element={<MainPage02 />} />
                <Route path="/MainPage03" element={<MainPage03 />} />
                <Route path="/Cartpage" element={<Cartpage />} />
                <Route path="/ProductDetail" element={<ProductDetail />} />
                <Route path="/ProductDetail/:id" element={<ProductDetail />} />

                {/* {user ? puch(): pushSign()} */}

                {/* {user ? <Route path="/" element={<Main/>}/> : <Route path="/SignIn" element={<SignIn />} /> } */}

                {/* <Route
                    path="/SignIn"
                    element={user ? <Main /> : <SignIn />}
                />*/}

                <Route
                    path="/SignIn"
                    element={user ? <Main /> : <SignIn />}
                />
                
                {/* <Routes>
                    {user
                        ? <Route path="/" element={<Main />} />
                        : <Route path="/SignIn" element={<SignIn />} />
                    }
                </Routes> */}

                <Route path="/Register" element={<Register />} />
                <Route path="/success" element={<Success />} />
                <Route path="*" element={() => <h1>error</h1>} />
            </Routes>
            <Footer />
        </BrowserRouter>

    )
}

export default Router;
