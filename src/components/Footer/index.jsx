import React from 'react'
import {withRouter} from 'react-router-dom'
import './footer.css'
import instagram from './instagram.svg'
import Facebook from './Facebook.svg'
import snapchat from './snapchat.svg'
import twitter from './twitter.svg'

class Footer extends React.Component {

    
    mealsByFirstLetter = (firstLetter) => {
        
        this.props.history.push('/mealsByFirstLetter/' + firstLetter.lettre)
        
    }

    render(){
        
        const alphabet =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        return (
            <footer>
                <div className="sociaux">
                    <img src={Facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={twitter} alt="twitter" />
                    <img src={snapchat} alt="snapshat" />
                </div>
                <div className="meal-alphabet">
                    <ul>
                    {alphabet.map((lettre, i) => <li key={i} onClick={() => this.mealsByFirstLetter({lettre})}>{lettre}</li>)}
                    
                    </ul>
                </div>
            </footer>
        )
    }
}

export default withRouter(Footer)