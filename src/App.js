import './App.css';
import Navbar from './Components/navbar';
import MainComponent from './Components/iMacComponent'
import FeatureSection from './Components/featureCard'
import Programs from './Components/programs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainComponent />
      <FeatureSection />
      <Programs />
    </div>
  );
}

export default App;
