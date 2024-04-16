import React from 'react'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import Image from 'next/image'
import footerLogo from '@/assets/logo-knoweats-white.png'

const links = [
  {
    title: "Empresa",
    references: [
      {
        name: "¿Como funciona?",
        link: "/pages/como-funciona"
      },
      {
        name: "¿Quienes somos?",
        link: "/pages/quienes-somos"
      },
      {
        name: "Sistemas de Envios",
        link: "/pages/envios"
      },
      {
        name: "Plastico Neutral",
        link: "/pages/plastico-neutral"
      }
    ]
  },
  {
    title: "Productos y servicios",
    references: [
      {
        name: "Menú de la semana",
        link: "/pages/menu"
      },
      {
        name: "Comidas para empresa",
        link: "/pages/menu"
      },
      {
        name: "Recargar el monedero",
        link: "/"
      },
    ]
  },{
    title: "Información",
    references: [
      {
        name: "Preguntas frecuentes",
        link: "/pages/preguntas-frecuentes"
      },
      {
        name: "Politica de privacidad",
        link: "/pages/politicas"
      }
    ]
  },{
    title: "Contacto",
    references: [
      {
        name: "Contacta con nosotros",
        link: ""
      },
      {
        name: "info@knoweats.com",
        link: ""
      },
      {
        name: "Pregúntando por WhatsApp",
        link: ""
      },
    ]
  }
]

const Footer = () => {

  return (
    <footer className='w-full py-12 bg-primary-color min-h-8 flex justify-center'>
      <section className='lg:px-16 px-4 w-full flex flex-col md:flex-row sm:items-center justify-between max-w-screen-2xl'>
        <header className='pb-10'>
        <Image
              src={footerLogo}
              alt="Logo knoweats"
              className='w-52'
            />
        <ul className='flex mt-6 text-4xl gap-2 text-white'>
          <li><a href=''><FaFacebookSquare /></a></li>
          <li><a href=''><FaInstagramSquare /></a></li>
        </ul>
        </header>
        <section className='flex flex-1 lg:justify-between md:pl-16 pt-4 flex-wrap gap-8'>
          {
            links.map((item, index) => {
              return ( 
                <article key={index + 1}>
                  <h5 className='text-lg pb-3 text-white font-semibold'>{item.title}</h5>
                  <ul key={index}>
                    {
                      item.references.map((ref) => {
                        return ( 
                          <li key={ref.name} className='text-white font-extralight p-1'>
                            <a href={ref.link}><span>{ref.name}</span></a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </article>
              )
            })
          }
        </section>
      </section>
    </footer>
  )
}

export default Footer