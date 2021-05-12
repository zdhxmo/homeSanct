import React from "react";
import Product from "./Product";
import "./styles/home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://happyhomeinsider.com/wp-content/uploads/2020/07/amazon-prime-day_banner-1500x500.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="The Lean Startup -  How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Business"
            price={20.0}
            image="https://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg"
            rating={4}
          />
          <Product
            title="Principles: Life and Work"
            price={40.0}
            image="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501124020/principles-9781501124020_hr.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="BPL Vivid Television - 80cm (32″) FireTV Stick Combo HD Ready LED TV"
            price={100.0}
            image="https://chieffox.com/wp-content/uploads/2019/01/BPL-Vivid-Television-%E2%80%93-101cm-40%E2%80%B3-Full-HD-LED-TV2.jpg?x96026"
            rating={2}
          />
          <Product
            title="Nvidia Quadro K4000 3GB GDDR5 PCIe x16 Dual DisplayPort DVI-I GK104 Video Graphics Card GPU 900"
            price={400.0}
            image="https://http2.mlstatic.com/nvidia-quadro-k4000-3gb-gddr5-pcie-20-x16-dupla-displayport-D_NQ_NP_814399-MLB27425312571_052018-F.jpg"
            rating={5}
          />
          <Product
            title="Nike Jordan 1 Mid All Star Carbon Fiber Black/White Men's DD1649-001"
            price={600.0}
            image="https://sneakerbardetroit.com/wp-content/uploads/2020/11/Air-Jordan-1-Mid-All-Star-DD1649-001-Release-Date-4.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black"
            price={4000.0}
            image="https://m.media-amazon.com/images/S/aplus-media/vc/b0f69720-636b-48ba-b10e-a6481745d484.__CR0,0,1464,600_PT0_SX1464_V1___.png"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
