import React from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import GetData from './services/GetData';

import {BrowserRouter , Route} from 'react-router-dom';


import './style.css';

class App extends React.Component {
  getData = new GetData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rocketsNames: [],
    company: null,
  }

  componentDidMount() {
    this.updateRocket();
    this.updateCompany();
  }

  updateRocket() {
    this.getData.getRocket()
      .then(rockets => {
        this.setState({rocketsNames: rockets.map(rocket => rocket.name)})
        return rockets
      })
      .then(rockets => rockets.find(rocket => this.state.rocket === rocket.name))
      .then(rocketFeatures => this.setState({rocketFeatures}))
  }

  updateCompany() {
     this.getData.getCompany()
      .then(company => this.setState({company}))
  }

  changeRocket = rocket => {
    this.setState({
      rocket
    }, this.updateRocket())
  }


  render(){
    return (
      <BrowserRouter>
        <Header 
          rocketsNames={this.state.rocketsNames} 
          changeRocket={this.changeRocket}
        />

        <Route 
          path='/' 
          exact
          render={() => this.state.company && <Home company={this.state.company}/>}>
        </Route>

        <Route 
          path='/rockets' 
          exact
          render={() => <Features rocket={this.state.rocket} rocketFeatures={this.state.rocketFeatures}/>}>
        </Route> 

        <Route 
          path="/calendar" 
          render={() => <Calendar/>}>
        </Route>

        <Route path="/details/:id" component={Details}></Route>

        {this.state.company && <Footer {...this.state.company}/> }
      </BrowserRouter>
  );
  }
}

export default App;
