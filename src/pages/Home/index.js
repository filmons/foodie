import React from 'react'
import './home.css'
import RandomMeal from '../../components/RandomMeal'
import Category from '../../components/Category'


class Home extends React.Component {


    render(){

        return (
            <section className="container">
                <RandomMeal history={this.props.history}/>
                <Category history={this.props.history}/>
                
            </section>
        )
    }
}

export default Home

