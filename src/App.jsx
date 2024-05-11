import './App.css';
import './components/navigation.jsx'
import Navigation from './components/navigation.jsx';
function App() {
  return (
    <div>
<Navigation/>
      <main>
        <div className='content-area'>
          <h1>content area</h1> 

        </div>
        <div className='content-img'>
          <img src="./images/summer tshirts.jpg" alt="Tshirt" />
        </div>
      </main>

    </div>

  );
}
export default App;
