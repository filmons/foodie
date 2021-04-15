import React from 'react'
import './home.css'
import RandomMeal from '../../components/RandomMeal'
import Category from '../../components/Category'


class Home extends React.Component {

    render(){

        return (
            <section className="container">
                <RandomMeal />
                <Category />
                
            </section>
        )
    }
}

export default Home

