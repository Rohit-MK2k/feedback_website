
import FeedbackItems from './FeedbackItems'
import {useContext} from 'react'
import feedbackContext from '../FeedbackContext'

function FeedbackList() {
    const {feedback} = useContext(feedbackContext)
    return (
        feedback.map((item) =>(
            <FeedbackItems key = {item.id} item={item}/>
        ))
    )
}

export default FeedbackList