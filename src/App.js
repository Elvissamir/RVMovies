import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav'
import Footer from './components/footer.jsx'
import Movies from './components/movies.jsx'
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';

function App() {
  return (
    <div className="App">
      <div className='app-container'>
        <div className='app-nav'>
          < Nav />
        </div>
        <div className='app-content-container min-h-screen w-10/12 mx-auto px-2'>
          <Routes>
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/customers' element={ <Customers /> }></Route>
            <Route path='/rentals' element={ <Rentals /> }></Route>
            <Route path='/' element={ <Movies /> }></Route>
            <Route path='*' element={ <NotFound /> }></Route>
          </Routes>
        </div>
        <div className='app-footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
