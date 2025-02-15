import './App.css'
import { Footer, Navbar,Hero, Tourism, Oneclick, Destination,Travel } from './component/import'

function App() {

  return (

    <div className="bg-white text-black overflow-x-hidden flex flex-col gap-10 ">
  <Hero/>
  <Tourism/>
  <Oneclick/>
  <Destination/>
  <Travel/>
  <Footer/>
</div>
  )
}

export default App
