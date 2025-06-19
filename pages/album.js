import Image from 'next/image'
import React from 'react'


const Album = () => {
  return (
    <div>
      <h2>This image is  using img tag</h2>
      {/* <img src='https://w7.pngwing.com/pngs/643/143/png-transparent-nextjs-hd-logo.png' alt='Next.js Icon' width='100%' /> */}

      <Image src='https://w7.pngwing.com/pngs/643/143/png-transparent-nextjs-hd-logo.png' width={500} height={500}
layout='responsive'
       alt=''></Image>
    </div>
  )
}

export default Album
