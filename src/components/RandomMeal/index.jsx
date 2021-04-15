import React from 'react'
import axios from 'axios';

class RandomMeal extends React.Component {

    state = {
        meal:[]
    }

    componentDidMount() {
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
          .then(res => {
            const meal = res.data;
            this.setState({meal});
           
          })  
    }

    render(){

        let title
        let imgUrl
        (this.state.meal.length === 0) ? title = "" : title = this.state.meal.meals[0].strMeal;
        (this.state.meal.length === 0) ? imgUrl = "" : imgUrl = this.state.meal.meals[0].strMealThumb
        
        return(
            <section className="random-meal">
                <h1>Recette du jour</h1>
                <figure>
                    <img src={imgUrl} width="100%" alt="image recette" />
                    <figcaption>  <h2>{title}</h2> </figcaption>
                </figure>
            </section>
        )
    }
}

export default RandomMeal