import RootLayout from '@/components/Layouts/RootLayout'
import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

const NewsHomePage = () => {
  return (
    <div>
      <h2>this is news page</h2>
      <Button type='primary'><Link href={'/'}>Back To Home</Link></Button>
    </div>
  )
}

export default NewsHomePage

NewsHomePage.getLayout= function getLayout(page){
  return(
  <RootLayout>
    {page}
  </RootLayout>
  )

}