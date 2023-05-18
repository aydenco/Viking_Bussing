import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/custom/Navbar';
import routes from './config/routes';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  
  return (
    <div className='bg-sky flex-inline flex-column h-screen'>
      <BrowserRouter>
      <Navbar />
      <Provider store={store}>
        <Routes>
          { routes.map((route, index) => (
            <Route
            key={index}
            path={route.path}
            element={
                <route.component/>
            }
            />
          )) }
        </Routes>
      </Provider>
      </BrowserRouter>
      </div>
  )
}

export default App