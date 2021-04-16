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
    getMealById = (idMeal) => {
        this.props.history.push('/Details/' + idMeal)
    }
        
    render(){

        let title = (this.state.meal.length === 0) ? "" :  this.state.meal.meals[0].strMeal;
        let imgUrl = (this.state.meal.length === 0) ?  "" : this.state.meal.meals[0].strMealThumb
        let idMeal = (this.state.meal.length === 0) ? "" : this.state.meal.meals[0].idMeal


        return(
            <section className="random-meal">
                <h1>Recette du jour</h1>
                <figure onClick={() => this.getMealById(idMeal)}
>
                    <img src={imgUrl} width="100%" alt="image recette" />
                    <figcaption>  <h2>{title}</h2> </figcaption>
                </figure>
            </section>
        )
    }
}

export default RandomMeal