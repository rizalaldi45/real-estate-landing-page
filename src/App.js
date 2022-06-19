import Navbar from './components/Navbar';
import Header from './components/Header';
import Client from './components/Client';
import Flow from './components/Flow';
import FeaturedItem from './components/FeaturedItem';
import Newsletter from './components/Newsletter';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='w-full h-auto bg-soft-blue'>
        <div className='max-w-7xl m-auto px-10'>
          <Navbar />
          <Header />
        </div>
      </div>
      <div className='max-w-screen-xl m-auto px-10'>
        <Client />
        <Flow />
      </div>
      <div className='w-full h-auto bg-soft-blue'>
        <div className='max-w-7xl m-auto px-10'>
          <FeaturedItem />
        </div>
      </div>
      <div className='max-w-screen-xl m-auto px-10'>
        <Newsletter />
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
}

export default App;
