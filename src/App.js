import {v4 as uuidv4} from 'uuid'
import Header from "./components/header"
import FeedbackList from "./components/FeedbackList"
import {useState} from 'react'
import feedbackData from "./data/FeedbackData"
import FeedbackStat from "./components/FeedbackStat"
import FeedbackForm from "./components/FeedbackForm"
import Footer from './components/Footer'

function App(){ 
    const [feedback,setFeedback] = useState(feedbackData)
    const handleDelete = (id) =>{
        if(window.confirm("Are you want delete?")){
            let filterFeeback = feedback.filter((item)=> item.id !== id)
            setFeedback(filterFeeback)
        }
    }
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
        console.log([newFeedback,...feedback])
    }
    
    return(
        <>
            <Header/>
            <div className="body-content">
                <FeedbackForm addFeedback = {addFeedback}/>
                <FeedbackStat feedback = {feedback}/>
                <FeedbackList feedback = {feedback} handleDelete = {handleDelete}/>
            </div>
            <Footer/>
        </>
    )
}
export default App