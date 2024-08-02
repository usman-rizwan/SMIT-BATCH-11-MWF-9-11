import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Statistics";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar
        isLogin={true}
        userInfo={{
          profileImg:
            "https://res.cloudinary.com/saylani-welfare/image/upload/v1646926708/website-images/static/38.png",
        }}
      />
      <Hero />
      <Stats />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
