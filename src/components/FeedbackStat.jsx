import React from 'react'
import {useContext} from 'react'
import feedbackContext from '../FeedbackContext'

function FeedbackStat() {
    const {feedback} = useContext(feedbackContext)
    let review
    if(feedback.length === 0){
        review = "No"
    }
    else{
        review = feedback.length
    }
    let sum = 0
    feedback.forEach(element => {
        sum += element.rating
        
    });
    let avg = sum/feedback.length
    avg = avg.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className='feedback-stat'>
        <div className="no-rating">{review} Reviews</div>
        <div className="avg-rating">Average Rating: {isNaN(avg) ? 0 : avg}</div>
    </div>
  )
}

export default FeedbackStat