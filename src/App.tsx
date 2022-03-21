import './App.css';
import MainContent from 'components/mainContent';
import SideBar from './components/SideBar';

function App() {
  return (

    <div className='app-display'>
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
