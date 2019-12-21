import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingById() {
	const [post, setPost] = useState({})
	const [id, setId] = useState(1)
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

	useEffect(() => {

		console.log("use effect ins Data fetch by id")
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => {
        console.log(res)
        setPost(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [idFromButtonClick])

	const handleClick = () => {
		console.log("in the handle clicke ", id)
		setIdFromButtonClick(id)
	}

	return (
		< >
			 <div className="col">
			     <h2>Request data: </h2>
				<input style={{backgroundColor:'#20c997'}} type="text" value={id} onChange={e => setId(e.target.value)} />
				<button className="button muted-button" type="button" onClick={handleClick}>Fetch Post id : {id}  </button>
		    </div>
			 <div className="col">
			  <h2>Result of the request: </h2>
				<div>{post.title}</div>
			</div>
		</ >
	)
}

export default DataFetchingById
 