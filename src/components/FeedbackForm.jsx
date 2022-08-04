import React, { useState, useContext, useEffect } from 'react'
import Rating from './Rating'
import Card from './Shared/Card'
import feedbackContext from '../FeedbackContext'

function FeedbackForm() {
  const [text, setText] = useState()
  const [isDisable, setIsDisable] = useState(true)
  const [message, setMessage] = useState("")
  const [select, setSelect] = useState(10)
  const {addFeedback, newFeedback, updateFeedback} = useContext(feedbackContext)
  
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
      const feedbackContent ={
        feedback: text,
        rating: select
      }
      if(newFeedback.edit === true){
        updateFeedback(newFeedback.item.id, feedbackContent)
      }
      else{
        addFeedback(feedbackContent)
      }
      setText('')
    }
  }
  useEffect(() =>{
    if(newFeedback.edit === true){
      setIsDisable(false)
      setText(newFeedback.item.feedback)
      setSelect(newFeedback.item.rating)
    }
  },[newFeedback])

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