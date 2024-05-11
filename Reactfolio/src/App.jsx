import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Header />
    <main className='mx-3'>
      <Outlet />
      </main>
      </>
  );
}

export default App;