
import FeedbackItems from './FeedbackItems'

function FeedbackList({feedback, handleDelete}) {
    return (
        feedback.map((item) =>(
            <FeedbackItems key = {item.id} item={item} handleDelete = {handleDelete}/>
        ))
    )
}

export default FeedbackList