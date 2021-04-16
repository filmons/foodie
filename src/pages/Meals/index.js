import React from 'react'
import axios from 'axios';

class Meals extends React.Component {
    
    state = {
        meals: []
    }


    async componentDidMount() {
        console.log(this.props.location.pathname.split('/')[1])
        const category = (this.props.location.pathname.split('/')[1] === "meals") ? this.props.location.pathname.split('/')[2] : null
        const firstLetter = (this.props.location.pathname.split('/')[1] === "mealsByFirstLetter") ? this.props.location.pathname.split('/')[2] : null

        if(category) {
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category)
            const meals = res.data;
            this.setState({meals});
        }
        if(firstLetter){
            
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=' + firstLetter)
            const meals = res.data;
            this.setState({meals});
        }
        
        //const url = 'www.themealdb.com/api/json/v1/1/filter.php?c=' + category
        // axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category)
        //   .then(res => {
        //     const meals = res.data;
        //     this.setState({meals});
        //     console.log(res.data)
        //   })  
          
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

export default Meals