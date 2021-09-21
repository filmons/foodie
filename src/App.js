import React from 'react'
import Home from './pages/Home'
import Meals from './pages/Meals'
import Details from './pages/Details'
import Favoris from './pages/Favoris'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchResult from './pages/SearchResult'
import './App.css'
//import CookieConsent from 'react-cookie-consent'
//import cookie from './components/cookie'
//import cookie from './components/cookie'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component{
    render(){
        return (
            <Router>
                <Header />
                <Switch>
                    <Route  exact path='/' component={Home} />
                    <Route  path='/Meals/:categoryName' component={Meals} />
                    <Route  path='/mealsByFirstLetter/:firstLetter' component={Meals} />
                    <Route  path='/Details/:idMeal' component={Details} />
                    <Route  path='/Favoris' component={Favoris} />
                    <Route  path='/search/:str/:searchBy' component={SearchResult} />
                </Switch>
                {/* <CookieConsent 
                debug={true}
                location="top"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}

                 >This website uses cookies to enhance the user experience.{" "}
                <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span></CookieConsent>
                <CookieConsent
            onAccept={() => {
                 alert("Accept was triggered by clicking the Accept button");
                 }}
            ></CookieConsent>
            <CookieConsent
             enableDeclineButton
             onDecline={() => {
            alert("nay!");
                 }}
            ></CookieConsent>
                 */}
                 <cookie />
                <Footer />
            </Router>
        )
    }
}

export default App