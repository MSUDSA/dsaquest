"use client"
import { useState } from "react"

export default function P() {
  const [state , setState] = useState<number | string>(0)
  
  async function send(){
    const res =  await fetch("http://localhost:5001/",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data = await res.json()
    setState(data.state)

  }

  return(
    <>
    <div><p>{state}</p></div>
    <button
    onClick={send}
    >update
    </button>
    </>
  )
}