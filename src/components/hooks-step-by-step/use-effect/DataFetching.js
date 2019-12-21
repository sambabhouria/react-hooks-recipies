import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
	const [posts, setPosts] = useState([])
	const [id, setId] = useState(1)
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts`)
			.then(res => {
        console.log(res)
        setPosts(res.data)
			})
			.catch(err => {
				console.log(err)
			})
    // Specifying empty dependency list call once like Component
	}, [])

	 

	return (
		<div>
			<ol style={{ listStyleType: 'decimal-leading-zero'}}>
				{posts.map(post => (
                   <li  key={post.id}>{post.title}</li>
				))}
			</ol>
		</div>
	)
}

export default DataFetching