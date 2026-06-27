import "./App.css";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Carousel from "./components/Carousel";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <div className="card-container">
        <div className="row">
          <Card
            title="Get Your Game On"
            image="src/products/Image 1.jpg"
            link="Shop Gaming"
          />
          <Card2
            title="Shop For Your Home Essentials"
            image="src\products\Image 7.jpg"
            image2="src\products\Image 8.jpg"
            image3="src\products\Image 9.jpg"
            image4="src\products\Image 10.jpg"
            imgTitle="Cleaning Tools"
            imgTitle2="Home Storage"
            imgTitle3="Home Decor"
            imgTitle4="Bedding"
            link="Discover More In Home"
          />
          <Card2
            title="New home arrivals under $50"
            image="src\products\Image 3.jpg"
            image2="src\products\Image 4.jpg"
            image3="src\products\Image 5.jpg"
            image4="src\products\Image 6.jpg"
            imgTitle="Kitchen & Dining"
            imgTitle2="Home Improvement"
            imgTitle3="Decor"
            imgTitle4="Bedding & Bath"
            link="Shop The Latest From Home"
          />
          <Card2
            title="Save Big On School Essentials"
            image="src\products\Image 11.jpg"
            image2="src\products\Image 12.jpg"
            image3="src\products\Image 13.jpg"
            image4="src\products\Image 14.jpg"
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
            image="src\products\Image 15.jpg"
            image2="src\products\Image 16.jpg"
            image3="src\products\Image 17.jpg"
            image4="src\products\Image 18.jpg"
            imgTitle="Dresses"
            imgTitle2="Knits"
            imgTitle3="Jackets"
            imgTitle4="Jewelry"
            link="Explore More"
          />
          <Card2
            title="Shop Fashion For Less Than $50"
            image="src\products\Image 19.jpg"
            image2="src\products\Image 20.jpg"
            image3="src\products\Image 21.jpg"
            image4="src\products\Image 22.jpg"
            imgTitle="Jeans Under $50"
            imgTitle2="Tops Under $25"
            imgTitle3="Dresses Under $30"
            imgTitle4="Shoes Under $50"
            link="See All Deals"
          />
          <Card
            title="Deals For Every Grade"
            image="src\products\Image 2.jpg"
            link="See All Deals"
          />
          <Card2
            title="Level Up Your Beauty Routine"
            image="src\products\Image 23.jpg"
            image2="src\products\Image 24.jpg"
            image3="src\products\Image 25.jpg"
            image4="src\products\Image 26.jpg"
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
