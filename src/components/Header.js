import React from 'react'


import '../styles/Header.css'

export default function Header() {

    const styles = {

        navLogo:{
            maxHeight: "150px",
            width: "150px",
            paddingLeft: "30px"

        },
        navLogoImage:{
            maxWidth: "100%",
            maxHeight: "100%"
        },
        calltoActionButton:{
            width: "100px",
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
            padding: "10px",
            backgroundColor: "#ff4500",
            outline: "0",
            border: "2px solid #ff4500",
            borderRadius: "15px",
            cursor: "pointer"
        }
    }

    
  return (

        <div className='header'>

        <div className='nav-logo' style={styles.navLogo}>
            <img src='../../images/logo.png' alt='site logo' style={styles.navLogoImage} />
        </div>
        
        {/* <div className='call-to-action'>
            <button style={styles.calltoActionButton}>Shorten</button>
        </div> */}

        </div>
    

  )
}
