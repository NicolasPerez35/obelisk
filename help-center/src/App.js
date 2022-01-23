import './App.css';
import Routes from './config/Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes></Routes>
      <Footer />
    </>
  );
}

export default App;
