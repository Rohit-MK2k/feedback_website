import React from 'react'
import Card from './Shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'

function FeedbackItems({item, handleDelete}) {

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() =>handleDelete(item.id)} className="cross">
          <FaTimes color='purple' />
        </button>
        <div className="text-display">{item.feedback}</div>
    </Card>
  )
}

export default FeedbackItems