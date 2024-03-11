import NewHeros from '../components/NewHeros'
import Welcome from '../components/Welcome'
import logo from "../images/Logo_E7A.png";


export const Home = () => {
  return (
    <>
        <div className="bg-gradient-to-r from-gray-950 to-gray-900 h-screen" >
            <Welcome logo={logo}/>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-950 h-screen ">
            <NewHeros/>
        </div>
    </>
  )
}
