import React from 'react'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
		<p>Post: {<div>{pid}</div>}</p>
	)
}

export default Post