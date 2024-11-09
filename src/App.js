import './App.css';
import Navbar from './Components/navbar';
import MainComponent from './Components/iMacComponent'
import FeatureSection from './Components/featureCard'

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainComponent />
      <FeatureSection />
    </div>
  );
}

export default App;
