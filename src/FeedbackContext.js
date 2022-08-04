import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import feedbackData from "./data/FeedbackData"

const feedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback,setFeedback] = useState(feedbackData)
    const [newFeedback, setNewFeedback] = useState({
        item : {},
        edit : false
    })
    const handleDelete = (id) =>{
        if(window.confirm("Are you want delete?")){
            let filterFeeback = feedback.filter((item)=> item.id !== id)
            setFeedback(filterFeeback)
        }
    }
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }
    const editFeedback = (item) =>{
        setNewFeedback({
            item,
            edit: true,
        }
        )
    }
    const updateFeedback = (id, upItem) =>{
        setFeedback(feedback.map((item)=>(item.id === id ? {...item, ...upItem} : item )))
    }
    return (<feedbackContext.Provider value ={{
        feedback,
        newFeedback,
        handleDelete,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </feedbackContext.Provider>)
}
export default feedbackContext
