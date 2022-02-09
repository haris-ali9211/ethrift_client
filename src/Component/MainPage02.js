import React from "react";
import '../App.css';
import OrderpageCarousel from "./OrderpageCarousel";
import FilterList from './Filter'



const MainPage02 = () => {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }


    return (
        <div className="text-center ">
            <OrderpageCarousel />
            <main>
                <section class="section-1">
                    <FilterList />
                </section>
            </main>
        </div>


    )
}

export default MainPage02;