import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ShortUrl() {

  const [error, setError] = useState(null)

  const url = 'http://localhost:5000/short/'

    const {id} = useParams()

    document.title = "Kpulu"

    useEffect(()=>{

        const redirectUser = async ()=>{

          document.title = "redirecting...."

            const response = await fetch(url+id,{
              method: "GET",
              headers:{
                "Content-Type":"application/json"
              }
            })

            const data = await response.json()
            if(data.redirectUrl){

              return window.location.href = data.redirectUrl
            }
            
            
            if(data.details === "Url Not Found"){

              document.title = "Not Found"

              setError("Sorry The Url You Tried To reach Was not Found")
            }


        }
        redirectUser()

    })

  return (
    <div>

      {error && (

         <p>{error}</p>

      )}
       



    </div>
    
  )
}
