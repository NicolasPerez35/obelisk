import './App.css';
import Routes from './config/Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <section>
      <Header />
      <Routes></Routes>
      <Footer />
    </section>
  );
}

export default App;
