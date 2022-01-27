import './main.css'
import { Header } from 'modules/header'
import { MainSection } from 'modules/mainPage'
import { AboutUs } from 'modules/mainPage'
import { OurWorks } from 'modules/mainPage'
import { Services } from 'modules/mainPage'
import { TimePrice } from 'modules/mainPage'

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <AboutUs />
      <OurWorks />
      <Services/>
      <TimePrice/>
    </div>
  );
}

export default App;
