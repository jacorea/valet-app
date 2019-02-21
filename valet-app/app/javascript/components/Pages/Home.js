import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Parallax, Col, Tabs, Tab} from 'react-materialize'


//Images used for HomePage
import SkyLineImage from '../../../assets/img/sdskyline3.jpg'
import SkyLineImage2 from '../../../assets/img/sdskyline9.jpg'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Parallax imageSrc={SkyLineImage}/>

        <section className="container section" id="services">
          <div className="row">
            <div className="col s12 l4">
              <h2 className="indigo-text text-darken-4">What we do:</h2>
              <p>No more waiting out in the cold or rain ever again!</p>
              <p>Save time and go about your business.Go places!</p>
            </div>
            <div className="col s12 l3 offset-12">
              <Tabs className='indigo-text text-darken-4'>
                  <Tab title="Customerssss" active>
                    <h5 className='indigo-text text-darken-4'>CUSTOMER</h5>
                    <p>Never be late again!</p>
                  </Tab>
                  <Tab id="valet" title="Valet">
                    <h5 className='indigo-text text-darken-4'>VALET</h5>
                    <p>Never lose track of your cars! Full customer satisfaction!</p>
                  </Tab>
                </Tabs>
                </div>
              </div>
        </section>

          <Parallax imageSrc={SkyLineImage2}/>

          <h1>Contact Us</h1>
          <p>
            Lorizzle pizzle daahng dawg brizzle amizzle, crunk adipiscing elit. Fo sheezy velizzle, go to hizzle volutpizzle, suscipit quis, fo shizzle mah nizzle fo rizzle, mah home g-dizzle stuff, hizzle. Mofo crunk tortizzle. Check out this dawg. Shiz izzle dolizzle crackalackin turpizzle nizzle gizzle. Maurizzle cool bizzle et turpis. Doggy in tortizzle. Pellentesque eleifend rhoncus uhuh ... yih!. In hac habitasse doggy things. Phat dapibizzle. Curabitizzle crackalackin crackalackin, pretium eu, stuff ac, uhuh ... yih! vitae, nunc. Pot suscipit. Integer yippiyo velit sizzle fo shizzle.
          </p>
          <p>
            Lorizzle pizzle daahng dawg brizzle amizzle, crunk adipiscing elit. Fo sheezy velizzle, go to hizzle volutpizzle, suscipit quis, fo shizzle mah nizzle fo rizzle, mah home g-dizzle stuff, hizzle. Mofo crunk tortizzle. Check out this dawg. Shiz izzle dolizzle crackalackin turpizzle nizzle gizzle. Maurizzle cool bizzle et turpis. Doggy in tortizzle. Pellentesque eleifend rhoncus uhuh ... yih!. In hac habitasse doggy things. Phat dapibizzle. Curabitizzle crackalackin crackalackin, pretium eu, stuff ac, uhuh ... yih! vitae, nunc. Pot suscipit. Integer yippiyo velit sizzle fo shizzle.
          </p>
          <p>
            Lorizzle pizzle daahng dawg brizzle amizzle, crunk adipiscing elit. Fo sheezy velizzle, go to hizzle volutpizzle, suscipit quis, fo shizzle mah nizzle fo rizzle, mah home g-dizzle stuff, hizzle. Mofo crunk tortizzle. Check out this dawg. Shiz izzle dolizzle crackalackin turpizzle nizzle gizzle. Maurizzle cool bizzle et turpis. Doggy in tortizzle. Pellentesque eleifend rhoncus uhuh ... yih!. In hac habitasse doggy things. Phat dapibizzle. Curabitizzle crackalackin crackalackin, pretium eu, stuff ac, uhuh ... yih! vitae, nunc. Pot suscipit. Integer yippiyo velit sizzle fo shizzle.
          </p>
      </div>
    )
  }
}

export default Home
