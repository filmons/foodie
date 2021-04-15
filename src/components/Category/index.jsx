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

    render() {
        
        console.log(this.state.categories.categories)
        let categoryUrl
        return (
            <section className="category">
                <h1>Categories</h1>
                <section className="meal-cat">
                    {
                    (this.state.categories.length !== 0) ? (this.state.categories.categories.map((category) => (
                        <figure key={category.idCategory}>
                            <img src={category.strCategoryThumb} alt="" />
                            <figcaption>  <h2>{category.strCategory}</h2> </figcaption>
                            {/* <p>{category.strCategoryDescription}</p> */}
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