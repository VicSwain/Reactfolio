import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// import Home from './pages/Home';
import Footer from "./components/Footer";
import backgroundImage from './assets/B&GImage1.jpg'

function App() {
  return (
    <>
      <Header />
      <main className="mx-3" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh'  }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
