import React from 'react'
//import CookieConsent from 'react-cookie-consent'
import React from 'react'
// rfce pour   avoir la funcrtion prés alable

function cookie(props) {
    return (props.trigger) ? (
        <div className="popup">
             <div className="popup-inner">
            <button className="close-btn"> close</button>
            {props.children}
        </div>
        </div>
    ) :"";
}

{/* <CookieConsent 
debug={true}
location="top"
style={{ background: "#2B373B" }}
buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
expires={150}

 >This website uses cookies to enhance the user experience.{" "}
<span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span></CookieConsent>
<CookieConsent
onAccept={() => {
 alert("Accept was triggered by clicking the Accept button");
 }}
></CookieConsent>
<CookieConsent
enableDeclineButton
onDecline={() => {
alert("nay!");
 }}
></CookieConsent>
 */}

export default cookie



