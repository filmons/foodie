import React from 'react'
import './home.css'
import RandomMeal from '../../components/RandomMeal'
import Category from '../../components/Category'


class Home extends React.Component {

    // constructor(props){
    //     super(props)
    //     console.log(props)
    // }

    render(){

        return (
            <section className="container">
                <RandomMeal />
                <Category history={this.props.history}/>
                
            </section>
        )
    }
}

export default Home

