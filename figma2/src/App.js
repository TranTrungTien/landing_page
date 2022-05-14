import "./App.css";
import Banner from "./components/banner";
import Header from "./components/header";
import Beauty from "./components/beauty";
import Selling from "./components/selling";
import Guide from "./components/guide";
import Advisor from "./components/advisor";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Beauty />
      <Selling />
      <Guide />
      <Advisor />
      <Footer />
    </div>
  );
}

export default App;
