import './App.css';
import Navbar from './Components/navbar';
import MainComponent from './Components/iMacComponent'
import FeatureSection from './Components/featureCard'
import Programs from './Components/programs';
import Recognition from './Components/recognitions'

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainComponent />
      <FeatureSection />
      <Programs />
      <Recognition />
    </div>
  );
}

export default App;
