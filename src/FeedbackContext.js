import {createContext, useState, useEffect} from 'react'

const feedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback,setFeedback] = useState([])
    const [newFeedback, setNewFeedback] = useState({
        item : {},
        edit : false
    })
    const handleDelete = async(id) =>{
        if(window.confirm("Are you want delete?")){
            await fetch(`http://localhost:5000/feedback/${id}`,{method:'DELETE'})
            let filterFeeback = feedback.filter((item)=> item.id !== id)
            setFeedback(filterFeeback)
        }
    }
    const addFeedback = async (newFeedback) =>{
        console.log(newFeedback)
        const response = await fetch('http://localhost:5000/feedback?_sort=id?_order=desc',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        let data = await response.json()
        console.log(data)
        setFeedback([data,...feedback])
    }
    const editFeedback = (item) =>{
        setNewFeedback({
            item,
            edit: true,
        }
        )
    }
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () =>{
        const fetchFeedback = await fetch('http://localhost:5000/feedback?_sort=id?_order=desc')
        let data = await fetchFeedback.json()
        setFeedback(data)
    }
    const updateFeedback = async(id, upItem) =>{
        const response = await fetch(`http://localhost:5000/feedback/${id}`,{
            method: 'PUT',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(upItem)
        })
        let data = await response.json()
        setFeedback(feedback.map((item)=>(item.id === id ? {...item, ...data} : item )))
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
