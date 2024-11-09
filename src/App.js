import './App.css';
import Navbar from './Components/navbar';
import MainComponent from './Components/iMacComponent'
import FeatureSection from './Components/featureCard'
import Programs from './Components/programs';
import Recognition from './Components/recognitions'
import LearningJourney from './Components/learningJourney'

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainComponent />
      <FeatureSection />
      <Programs />
      <Recognition />
      <LearningJourney />
    </div>
  );
}

export default App;
