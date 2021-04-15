import React from 'react'
import './detail.css'
import axios from 'axios';


class Details extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            details:[]
        }
    }

    componentDidMount (){
        
        const mealId = this.props.match.params.idMeal
        axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId)
          .then(res => {
            const details = res.data;
            this.setState({details});
            
          })  
    }


    render(){

        const mealName = (this.state.details.length !== 0) ? this.state.details.meals[0].strMeal : null
        const mealVideo = (this.state.details.length !== 0) ? this.state.details.meals[0].strYoutube : null
        const mealImg = (this.state.details.length !== 0) ? this.state.details.meals[0].strMealThumb : null
        const mealDesc = (this.state.details.length !== 0) ? this.state.details.meals[0].strInstructions : null
        const mealArea = (this.state.details.length !== 0) ? this.state.details.meals[0].strArea : null
        const mealCategory = (this.state.details.length !== 0) ? this.state.details.meals[0].strCategory : null
        const mealTag = (this.state.details.length !== 0) ? this.state.details.meals[0].strTags : null

       
        return (
            <section className="detail-container">
                <section className="video-container">
                    <h1>{mealName}</h1>
                    <video controls width="400">
                        <source src={mealVideo} type="video/webm" />
                        <source src={mealVideo} type="video/mp4" />
                    </video>
                </section>
                <div className="img-container">
                    <img src={mealImg} alt="foodie image" />
                </div>
                <div className="description">
                    <h3>Category: {mealCategory}</h3>
                    <h3>Area : {mealArea}</h3>
                    <h3>Description : </h3>
                    <p>{mealDesc}</p>
                    <h3>Tag : {mealTag}</h3>
                </div>
            </section>

        )
    }
}

export default Details