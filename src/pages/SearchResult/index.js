import React from 'react'
import axios from 'axios';

class searchresult extends React.Component {
    
    state = {
        meals: []
    }


    async componentDidMount() {
        
        console.log(this.props)
        const userInput = (this.props.match.params.str) ? this.props.match.params.str : ""
        const searchBy = (this.props.match.params.searchBy) ? this.props.match.params.searchBy : ""

        let axiosUrl;

        switch (searchBy) {
            case "name" : axiosUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + userInput
                    break
            case "category" : axiosUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + userInput
                    break
            case "area" : axiosUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + userInput
                    break
            case "ingredients" : axiosUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + userInput
                    break
            default : axiosUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Frensh"
        }

        const res = await axios.get(axiosUrl)
        
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