import Categories from "../Components/Categories";
import Collections from "../Components/Collections";
import CustomerChoice from "../Components/CustomerChoice";
import Featured from "../Components/Featured";
import NewsLetter from "../Components/NewsLetter";
import Slider from "../Components/Slider";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <>
      <main>
        <Slider />
        <Featured />
        <div>
          <h2 className="text-center">CUSTOMER CHOICE</h2>
          <CustomerChoice />
        </div>
        <div>
          <h2 className="text-center">POPULAR COLLECTIONS</h2>
          <Collections />
        </div>
        <div>
          <h2 className="text-center">ALL CATEGORIES</h2>
          <Categories />
        </div>
        <div>
          <h2 className="text-center">CUSTOMER REVIEWS</h2>
          <Testimonials />
        </div>
        <NewsLetter />
      </main>
    </>
  );
};

export default Home;
