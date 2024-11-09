import './App.css';
import Navbar from './Components/navbar';
import MainComponent from './Components/iMacComponent'
import FeatureSection from './Components/featureCard'
import Programs from './Components/programs';
import Recognition from './Components/recognitions'
import LearningJourney from './Components/learningJourney'
import Testimonials from './Components/testimonial'
import Mentors from './Components/mentors'

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainComponent />
      <FeatureSection />
      <Programs />
      <Recognition />
      <LearningJourney />
      <Testimonials />
      <Mentors />
    </div>
  );
}

export default App;
