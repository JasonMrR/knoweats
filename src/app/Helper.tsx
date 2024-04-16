'use client'
import { useState } from 'react';
import { Montserrat, Fraunces } from 'next/font/google'
import { TfiPlus } from "react-icons/tfi";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal','italic']
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'],
})

const tips = [
  {
    title: "¿Cuándo recibiré mi pedido?",
    description: "Haz tu pedido de lunes a domingo (hasta las 23:59h) y recíbelo el martes* siguiente",
  },
  {
    title: "¿Cambian los platos del menú cada semana?",
    description: "La fecha de caducidad se especifica en la etiqueta trasera de cada plato, éstos tienen una vida útil de 7-8 días desde su recepción",
  },
  {
    title: "¿Cuál es el peso de los platos?",
    description: "El importe mínimo para poder validar el pedido es de 20€ (IVA incl.) sin contar los gastos de envío ni promociones.",
  },
  {
    title: "¿Cómo caliento los platos? ¿Micro? ¿Sartén? ¿Horno?",
    description: "El peso de cada plato varía dependiendo del platos.",
  },
  {
    title: "¿Qué pasa si mi pedido llega golpeado o en mal estado?",
    description: "Puedes congelarlos sin problema (recomendamos que se descongele poniéndolo en el frigorífico 24h antes de su consumo), aunque siempre recomendamos que se coma lo antes posible para disfrutar del producto como recién hecho.",
  },
  {
    title: "¿Puedo elegir una hora específica de entrega?",
    description: "Puedes calentar tanto en microondas como en sartén. Para el microondas debes retirar o agujerear el film protector y aunque la bandeja es apta para calentar en el micro, recomendamos colocar la comida en un plato y calentar el tiempo recomendado que se especifica en la etiqueta de cada táper.",
  },
  {
    title: "¿Qué pasa si no he estado en casa para recibir mi pedido?",
    description: "No es lo habitual pero si por alguna razón la caja ha sufrido algún golpe y se ha dañado alguno de tus platos, por favor, póngase en contacto con nosotros escribiéndonos al chat de Whatsapp que aparece en la web o envíanos un correo electrónico a pedidos@knoweats.com.",
  }
]

const Helper = () => {
  return (
    <section
      className='lg:px-16 p-4 lg:pt-10 w-full max-w-screen-2xl flex flex-col items-center'
    >
      <h3 className={`text-lg md:text-xl text-center ${montserrat.className} italic font-light mt-2 uppercase`}>Te ayudamos en lo que necesites</h3>
      <h1 className='text-4xl text-center md:text-5xl font-bold mb-7'>¿Alguna duda?</h1>
      <article className='w-full max-w-screen-lg'>
        {
          tips.map((tip) => {
            return (
              <Tips key={tip.title} title={tip.title} description={tip.description} />
            )
          })
        }
      </article>
    </section>
  )
}

interface Tip {
  title: string,
  description: string,
}

const Tips = ({title, description}: Tip) => {

  const [open, setOpen] = useState(false);

  return (
    <article className='py-2 border-t border-b border-black' onClick={()=>{
      setOpen(prev => !prev)
    }}>
      <div className='flex justify-between items-center'>
        <h1 className={`text-2xl font-bold ${fraunces.className} `}>{title}</h1>
        <span className='text-xl text-black'><TfiPlus /></span>
      </div>
      {
        open && <p className='mt-6 mx-4'>{description}</p> 
      }
    </article>
  )
}

export default Helper