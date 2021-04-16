import React from 'react'
import axios from 'axios';

class searchresult extends React.Component {
    
    state = {
        meals: []
    }


    async componentDidMount() {
        
        const userInput = (this.props.match.params.str) ? this.props.match.params.str : ""
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=' + userInput)
        
        console.log(res.data)
        const meals = (res.data.meals !== null) ? res.data : [];
        this.setState({meals});
          
    }

    getMealById = (idMeal) => {
        this.props.history.push('/Details/' + idMeal)

    }


    render(){
       
        return (
            
            <section className="category">
                <h1>List</h1>
                <section className="meal-cat">
                    {
                    (this.state.meals.length !== 0) ? (this.state.meals.meals.map((meal) => (
                    
                        <figure key={meal.idMeal} onClick={(idMeal) => this.getMealById(meal.idMeal)} >
                            <img src={meal.strMealThumb} alt="" />
                            <figcaption>  <h2>{meal.strMeal}</h2> </figcaption>
                        </figure>
                    )
                    )) : null
                    }
                </section>

            </section>
        )
        
    }
}

export default searchresult