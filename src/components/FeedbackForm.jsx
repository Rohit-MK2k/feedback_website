import React, { useState } from 'react'
import Card from './Shared/Card'

function FeedbackForm() {
  const [text, setText] = useState()
  const [isDisable, setIsDisable] = useState(true)
  const [message, setMessage] = useState("")
  const handleText = (e) =>{
    setText(e.target.value)
    if(text === " "){
      setIsDisable(true)
      setMessage("*Feedback should contain atleast contain more than 10 character")
    }
    else if(text.trim().length <= 10){
      setIsDisable(true)
      setMessage("*Feedback should contain atleast contain more than 10 character")
    }
    else{
      setIsDisable(false)
      setMessage(null)
    }
  }

   return (
    
    <Card>
      <form action="">
        <h3>Rate and give feedback to this website</h3>
        <div className="input">
          <input type="text" onChange={handleText} name="feedback" id="feedback" placeholder='Enter your feedback' value={text}/> 
          <input type="submit" value="Submit" disabled = {isDisable} /> 
        </div>
      </form>
      <div className="message">{message}</div>
    </Card>
  )
}

export default FeedbackForm