import React from 'react'
import axios from 'axios';


class Category extends React.Component {
    

    state = {
        categories: []
    }

    componentDidMount() {
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
          .then(res => {
            const categories = res.data;
            this.setState({categories});
            
          })  
          
    }

    mealsBycategory = (categoryName) => {

        this.props.history.push('/meals/' + categoryName)
    }

    render() {
        
        return (
            <section className="category">
                <h1>Categories</h1>
                <section className="meal-cat">
                    {
                    (this.state.categories.length !== 0) ? (this.state.categories.categories.map((category) => (
                    
                        <figure key={category.idCategory} onClick={(categoryName) => this.mealsBycategory(category.strCategory)}>
                            <img src={category.strCategoryThumb} alt="" />
                            <figcaption>  <h2>{category.strCategory}</h2> </figcaption>
                        </figure>
                    )
                    )) : null
                    }
                </section>

            </section>
        )
    }
}

export default Category