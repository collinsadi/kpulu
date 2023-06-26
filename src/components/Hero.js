import React, {  useState } from 'react'
// import axios from 'axios'
import '../styles/Hero.css'

export default function Hero() {

     const [longUrl, setLongUrl] = useState("")
    const [backHalf, setBackHalf] = useState("")
    const [data, setData] = useState("")


    const url = 'http://localhost:5000/'
   

   

    const styles = {

        main:{

            width: "100%",
            padding:"10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        mainInner: {

            width: "98%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "20px"
        },
        mainInnerH3:{

            fontSize: "50px",
            fontWeight: "bold",
            color: "#ff4500"

        },
        mainInnerParagraph :{

            textAlign: "center",
            marginTop: "20px"
        },
        inputContainer:{

            width: "700px",
            maxWidth: "100%",
            height: "300px",
            backgroundColor: "white",
            padding: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
           flexDirection: "column",
            borderRadius: "15px",
            boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.116)",
            marginTop: "30px"
        },
        mainInput:{

            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            backgroundColor: "lightgray",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        longLinkInput: {

            width: "85%",
            backgroundColor: "transparent",
            border: "0",
            outline: "0",
            color: "black",
            fontWeight:"bold"
        },
        shortenButton: {

            width: "100px",
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
            padding: "10px",
            backgroundColor: "#ff4500",
            outline: "0",
            border: "0",
            borderRadius: "15px",
            cursor: "pointer",
            boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.116)"
            
        },
        customization: {
            marginTop: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            textAlign:"center",
            color: "#ff4500"
        },
        domain:{
            width: "100%",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "20px"
        },
        domainName:{

            width: "45%",
            backgroundColor: "lightgray",
            border: "2px solid lightgray",
            outline: "0",
            padding: "15px",
            color: "black",
            borderRadius: "15px",
            fontWeight:"bold"

        },
        backHalf:{
            width: "45%",
            backgroundColor: "white",
            border: "2px solid lightgray",
            outline: "0",
            padding: "15px",
            color: "black",
            borderRadius: "15px",
            fontWeight:"bold"
        }


    }

    const handleShortenLink = async (e)=>{

        if(!longUrl.includes('http://') && !longUrl.includes('https://') ){

        setData({
            status: "error",
            details:"Enter a Valid Http or Https Url"
        })
            return ;
        }

            e.target.innerHTML = "....."
            e.target.disabled = true

            const response = await fetch(url+'shorten', {
                method: "POST",
                body: JSON.stringify({
                    long_Url: longUrl,
                    unique_id: backHalf.toLowerCase()
                }),
                headers:{
                    "Content-Type":"application/json"
                },
                
            })

            const data = await response.json()
            setData(data)
            e.target.innerHTML = "Shorten"
            e.target.disabled = false
            setLongUrl('')
            setBackHalf('')
            console.log(longUrl)
            console.log(data)



        

    }

 


  return (
    <div style={styles.main}>
        
        <div style={styles.mainInner}>

        <h3 style={styles.mainInnerH3}> Create Short Links!</h3>

        <p style={styles.mainInnerParagraph}> Kpulu is a Link shortener that, lets you to shorten and customize your link,<br/> Generate Url Qr codes and CreatLink in Bio, All for Free, you Dont Even Need to Sign Up </p>

        <div style={styles.inputContainer}>

            {data && (
            <h3 className={data.status === "success" ? "success" : "error"}>
            {data.details}
            </h3>
           )}

        <div style={styles.mainInput}>

            <input placeholder='Paste a Link to Shorten It' style={styles.longLinkInput} onChange={(e)=> setLongUrl(e.target.value)} value={longUrl} />

            <br />
            <button style={styles.shortenButton} className='shortenButton' onClick={handleShortenLink} >

                Shorten
            </button>

        </div >

        <div  style={styles.domain}>


            <input  disabled style={styles.domainName}  value={window.location.href} title='Domain' />

            <input placeholder='Example: favorite-link' style={styles.backHalf} onChange={(e)=> setBackHalf(e.target.value)} value={backHalf} />
       
           
            </div>

         <div style={styles.customization}>
         End your link with words that will make it unique or Leave it Blank
        </div>

        </div>


       
        
       
        </div>
        
    </div>
  )
}
