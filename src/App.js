
import './App.css';
import Footer from './components/Footer/Footer';
import AllRoutes from './pages/AllRoutes';

function App() {
  return (
    <>
      <div className="App" style={{backgroundImage: "url(./assets/ques1.png)"}}>
        <AllRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
