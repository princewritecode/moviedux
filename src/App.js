import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieGrid from './components/MoviesGrid';
import Script from './components/Script';
function App()
{
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
      </div>

      <Script></Script>

      <MovieGrid></MovieGrid>

      <Footer></Footer>
    </div>
  );
}
export default App;