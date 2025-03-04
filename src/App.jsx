import Header from './Components/Header'
import FujiGroup from './Components/FujiGroup'
// import SydneyGroup from './Components/SydneyGroup'
// import Geirangerfjord from './Components/GeirangerfjordGroup'
import { Fragment } from 'react'
import './App.css'


function App() {
  return(
      <Fragment>
        
          <Header/>
          <FujiGroup
          img="src\assets\Rectangle77.png"
          loc="JAPAN"
          dest="Mount Fuji"
          date="12 Jan, 2023 - 24 Jan, 2023"
          desc="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).<br /> Mount Fuji is the single most popular tourist  site in Japan, for both Japanese and foreign tourists."
          />
          <FujiGroup
          img="src\assets\Rectangle84.png"
          loc="AUSTRALIA"
          dest="Sydney Opera House"
          date="27 May, 2023 - 8 Jun, 2023"
          desc="The Sydney Opera House is a multi-venue performing arts centre in Sydney. <br /> Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
          />
          <FujiGroup
          img="src\assets\Rectangle78.png"
          loc="NORWAY"
          dest="Geirangerfjord"
          date="01 Oct, 2024 - 18 Nov, 2024"
          desc="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway.  <br />It is located entirely in the Stranda Municipality."
          />

          {/* <SydneyGroup/>
          <Geirangerfjord/> */}
          
      </Fragment>
  )
}


export default App
