import { Header } from '../Components/Organisms/Header/Header'
import { Hero } from '../Components/Organisms/Hero/Hero'
import { ProcessSteps } from '../Components/Organisms/ProcessSteps/ProcessSteps'
import { Gallery } from '../Components/Organisms/Gallery/Gallery'
import { ContactSection } from '../Components/Organisms/Contact/ContactSection'
import { Footer } from '../Components/Organisms/Footer/Footer'
import { AboutSection } from '../Components/Organisms/AboutSection/AboutSection'


export function Home() {
  
  return (
    <div> 

        < Header /> 
        < Hero /> 
        < ProcessSteps />
        < Gallery />
        < AboutSection />
        < ContactSection />
        < Footer />
        
    </div>
  )
}