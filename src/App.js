import './App.css';
import Navbar from './Components/navbar';
import MainComponent from './Components/iMacComponent'
import FeatureSection from './Components/featureCard'
import Programs from './Components/programs';
import Recognition from './Components/recognitions'
import LearningJourney from './Components/learningJourney'
import Testimonials from './Components/testimonial'
import Mentors from './Components/mentors'
import Media from './Components/media'
import Services from './Components/services'

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
      <Media />
      <Services />
    </div>
  );
}

export default App;
