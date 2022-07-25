import React, { useState } from 'react'
import Rating from './Rating'
import Card from './Shared/Card'

function FeedbackForm({addFeedback}) {
  const [text, setText] = useState()
  const [isDisable, setIsDisable] = useState(true)
  const [message, setMessage] = useState("")
  const [select, setSelect] = useState(10)
  let row = []
  const handleText = (e) =>{
    setText(e.target.value)
    if(text === " "){
      setIsDisable(true)
      setMessage("*Feedback should contain atleast contain more than 10 character")
    }
    else if(text.trim().length < 10){
      setIsDisable(true)
      setMessage("*Feedback should contain atleast 10 character")
    }
    else{
      setIsDisable(false)
      setMessage(null)
    }
  }
  const handleSelect = (value) =>{
    setSelect(parseInt(value,10))
  }
  for (let i = 1; i <= 10; i++) {
    row.push(<Rating value = {i} isSelect = {select} handleSelect = {handleSelect}/>);
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(text.trim().length > 10){
      const newFeedback ={
        feedback: text,
        rating: select
      }
      addFeedback(newFeedback)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>Rate and give feedback to this website</h3>
        <ul className='rating'>
          {row}
        </ul>
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