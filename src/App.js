import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PorfolioContent from './components/PortfolioContent';
// import background from "./css/brick.jpg";
import PageContainer from "./components/PageContainer";

function App() {
  return (
    <div className="App">
      {/* <Nav />
      <div style={{backgroundImage: `url(/images/brick.jpg)`}}>
      <div className="container" >
          <PorfolioContent />
        </div>
      </div>
        
      
      <Footer /> */}
      <PageContainer />
    </div>
  );
}

export default App;
