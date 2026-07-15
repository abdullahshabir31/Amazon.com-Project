import "./App.css";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Carousel from "./components/Carousel";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";
import Header from "./components/Header";
import Image1 from "./products/Image 1.jpg";
import Image2 from "./products/Image 2.jpg";
import Image3 from "./products/Image 3.jpg";
import Image4 from "./products/Image 4.jpg";
import Image5 from "./products/Image 5.jpg";
import Image6 from "./products/Image 6.jpg";
import Image7 from "./products/Image 7.jpg";
import Image8 from "./products/Image 8.jpg";
import Image9 from "./products/Image 9.jpg";
import Image10 from "./products/Image 10.jpg";
import Image11 from "./products/Image 11.jpg";
import Image12 from "./products/Image 12.jpg";
import Image13 from "./products/Image 13.jpg";
import Image14 from "./products/Image 14.jpg";
import Image15 from "./products/Image 15.jpg";
import Image16 from "./products/Image 16.jpg";
import Image17 from "./products/Image 17.jpg";
import Image18 from "./products/Image 18.jpg";
import Image19 from "./products/Image 19.jpg";
import Image20 from "./products/Image 20.jpg";
import Image21 from "./products/Image 21.jpg";
import Image22 from "./products/Image 22.jpg";
import Image23 from "./products/Image 23.jpg";
import Image24 from "./products/Image 24.jpg";
import Image25 from "./products/Image 25.jpg";
import Image26 from "./products/Image 26.jpg";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <div className="card-container">
        <div className="row">
          <Card title="Get Your Game On" image={Image1} link="Shop Gaming" />
          <Card2
            title="Shop For Your Home Essentials"
            image={Image7}
            image2={Image8}
            image3={Image9}
            image4={Image10}
            imgTitle="Cleaning Tools"
            imgTitle2="Home Storage"
            imgTitle3="Home Decor"
            imgTitle4="Bedding"
            link="Discover More In Home"
          />
          <Card2
            title="New home arrivals under $50"
            image={Image3}
            image2={Image4}
            image3={Image5}
            image4={Image6}
            imgTitle="Kitchen & Dining"
            imgTitle2="Home Improvement"
            imgTitle3="Decor"
            imgTitle4="Bedding & Bath"
            link="Shop The Latest From Home"
          />
          <Card2
            title="Save Big On School Essentials"
            image={Image11}
            image2={Image12}
            image3={Image13}
            image4={Image14}
            imgTitle="Backpacks"
            imgTitle2="Electronics"
            imgTitle3="Stationery"
            imgTitle4="Fashion"
            link="See More"
          />
        </div>
        <div className="row row-2">
          <Card2
            title="Fashion Trends You Like"
            image={Image15}
            image2={Image16}
            image3={Image17}
            image4={Image18}
            imgTitle="Dresses"
            imgTitle2="Knits"
            imgTitle3="Jackets"
            imgTitle4="Jewelry"
            link="Explore More"
          />
          <Card2
            title="Shop Fashion For Less Than $50"
            image={Image19}
            image2={Image20}
            image3={Image21}
            image4={Image22}
            imgTitle="Jeans Under $50"
            imgTitle2="Tops Under $25"
            imgTitle3="Dresses Under $30"
            imgTitle4="Shoes Under $50"
            link="See All Deals"
          />
          <Card
            title="Deals For Every Grade"
            image={Image2}
            link="See All Deals"
          />
          <Card2
            title="Level Up Your Beauty Routine"
            image={Image23}
            image2={Image24}
            image3={Image25}
            image4={Image26}
            imgTitle="Makeup"
            imgTitle2="Brushes"
            imgTitle3="Sponges"
            imgTitle4="Mirrors"
            link="See More"
          />
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
}

export default App;
