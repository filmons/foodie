import React from 'react'
import {withRouter} from 'react-router-dom'
import './header.css'

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            search: "",
        }
    }


    searchMeals = (event) => {
        event.preventDefault() // Empêche le formulaire d'avoir un comportement normal, components'est-à-dire qu'on empêche qu'il s'actualise
        
        this.props.history.push('/search/' + this.state.search)
    }

   
    handleSearchChange = (event) => {
        
        this.setState({
            search: event.target.value
        })
    }


    render(){
        return (
        <header>
            <form onSubmit={this.searchMeals} className="Form">  
                <input type="text" value={this.state.search} onChange={this.handleSearchChange}/> 
                <button>search</button>
            </form>
        </header>
        )
    }
}

export default withRouter(Header)