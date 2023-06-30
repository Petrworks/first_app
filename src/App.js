import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <Main name='Petro' pet='Cat' />
      <Main name='Yura' pet='Dog' />
      <Main name='Ira' pet='Cat' />
    </div>
  );
}

export default App;
