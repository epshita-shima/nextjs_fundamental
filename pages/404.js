
import { useRouter } from 'next/router'
import React from 'react'

const ErrorPage = () => {
  const router=useRouter()
  setTimeout(()=>{
router.push('/')
  },5000)
  return (
    <div >
      <img src="https://static.vecteezy.com/system/resources/previews/022/310/933/non_2x/404-error-page-not-found-3d-illustration-png.png" style={{width:'100%',height:'100vh',backgroundPosition:'cecnter',}} alt="" />
    </div>
  )
}

export default ErrorPage
