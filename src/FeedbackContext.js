import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import feedbackData from "./data/FeedbackData"

const feedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
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
    return (<feedbackContext.Provider value ={{
        feedback,
        handleDelete,
        addFeedback,
    }}>
        {children}
    </feedbackContext.Provider>)
}
export default feedbackContext