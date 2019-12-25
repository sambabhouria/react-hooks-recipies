import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DataFetchingOne() {

// use state for managing the different state
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // variable to hold the value when post success
  const [post, setPost] = useState({})

// useEffect for managing the side effect
  useEffect(() => {
      // as soon as componenet mount we fetch the data
    axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(response => {
          // when succees loading false
        setLoading(false)
        // set data to sePost variable
        setPost(response.data)
        // set error to false
        setError('')
      })
      .catch(error => {
        setLoading(false)
        setPost({})
        setError('Something went wrong!')
      })
  }, [])  // empty dependency arrray for call ones like componentDidount

  return (
    <div className="col">
       <h2>Fetching data using useState for understand useReducer</h2>
      {loading ? 'Loading' : post.title}
      {error ? error : null}
    </div>
  )
}
export default DataFetchingOne