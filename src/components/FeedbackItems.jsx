import React from 'react'
import Card from './Shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import {useContext} from 'react'
import feedbackContext from '../FeedbackContext'

function FeedbackItems({item}) {
  const {handleDelete, editFeedback} = useContext(feedbackContext)
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <div className="corner-btn">
          <button onClick={()=> editFeedback(item)} className= "edit">
            <FaEdit color='purple'/>
          </button>
          <button onClick={() =>handleDelete(item.id)} className="cross">
            <FaTimes color='purple' />
          </button>
        </div>
        <div className="text-display">{item.feedback}</div>
    </Card>
  )
}

export default FeedbackItems