import { useRouter } from 'next/router'
import React from 'react'

const NewsDetailsPage = () => {
  const router=useRouter()
  return (
    <div>
      <h2>This is news details page: {router.query.newsId}</h2>
    </div>
  )
}

export default NewsDetailsPage
