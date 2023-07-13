import Analytics from "./component/Analytics";
import Cards from "./component/Cards";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Newletter from "./component/Newletter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newletter />
      <Cards/>
      <Footer />
    </>
  );
}

export default App;
