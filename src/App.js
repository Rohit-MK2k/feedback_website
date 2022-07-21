import Header from "./components/header"
import FeedbackList from "./components/FeedbackList"
import {useState} from 'react'
import feedbackData from "./data/FeedbackData"
import FeedbackStat from "./components/FeedbackStat"

function App(){ 
    const [feedback,setFeedback] = useState(feedbackData)
    const handleDelete = (id) =>{
        if(window.confirm("Are you want delete?")){
            let filterFeeback = feedback.filter((item)=> item.id !== id)
            setFeedback(filterFeeback)
        }
    }
    
    return(
        <>
            <Header/>
            <div className="body-content">
                <FeedbackStat feedback = {feedback}/>
                <FeedbackList feedback = {feedback} handleDelete = {handleDelete}/>
            </div>
        </>
    )
}
export default App