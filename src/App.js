import Nav from './components/nav'
import Footer from './components/footer.jsx'
import Movies from './components/movies.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='app-container'>
        <div className='app-nav'>
          < Nav />
        </div>
        <div className='app-content-container min-h-screen w-10/12 mx-auto px-2'>
          <Movies />
        </div>
        <div className='app-footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
