import React from 'react'
import CookieConsent from 'react-cookie-consent'
// https://www.youtube.com/watch?v=IqhfPrv0NZk
class cookie extends React.Component{
    render(){

        return (
           < div>
            <CookieConsent debug={true}>thi is coooki</CookieConsent>
            </div>
            
        )
    }
}

export default cookie