import React from 'react'
import Image from 'next/image'
import Frame from "@/assets/Frame_1.png"
import Frame2 from "@/assets/Frame_2.png"
import Frame3 from "@/assets/Frame_3.png"
import Frame4 from "@/assets/Frame_4.png"
import Frame5 from "@/assets/Frame_5.png"

const companies = [
  {
    name: "rtve",
    image: Frame 
  },
  {
    name: "Alicante plaza",
    image: Frame2 
  },
  {
    name: "ocu",
    image: Frame3 
  },
  {
    name: "Metropoli",
    image: Frame4 
  },
  {
    name: "Cosmopolitan",
    image: Frame5
  },
]
const Companies = () => {
  return (
    <section className='lg:px-16 px-4 my-12 w-full flex items-center justify-between max-w-screen-2xl h-24 overflow-x-scroll'>
      {
        companies.map(company =>  {
          return (
            <Image key={company.name} src={company.image} alt={company.name} className='h-full'/>
          )
        })
      }
    </section>
  )
}

export default Companies