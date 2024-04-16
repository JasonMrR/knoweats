import { Fraunces } from "next/font/google";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import platillos from "@/assets/tapers-knoweats_a8c78714-010f-4abf-a58e-f6c75c352b39.jpg"

const details = ['A partir de 8 platos: obtén un 5% de descuento.', 'A partir de 12 platos: 8% de descuento.', 'A partir de 18 platos: 10% de descuento.']

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal','italic']
})

const Package = () => {
  return (
    <section className='lg:px-16 p-4 lg:pt-10 w-full h-1/2 max-w-screen-2xl flex flex-wrap-reverse lg:flex-nowrap justify-center lg:justify-between items-center gap-4 lg:gap-12'>
      <article className="flex flex-col">
        <header>
          <h3 className={`italic text-xl uppercase font-light`}>Ahora con knoweats</h3>
          <h1 className="text-5xl font-bold pt-4 pb-3">Come sano toda la semana.</h1>
          <p className="font-extralight pb-2">Obtén descuentos en cada unos de tus pedidos, cuanto más platos añadas, mayor será tu descuento...</p>
        </header>
        <ul className={`text-base font-extralight ${fraunces.className}`}>
          {
            details.map((item) => {
              return (
                <li key={item} className="flex items-center py-2">
                  <span className="text-green-checks sm:text-xl">
                    <FaCheckCircle/>
                  </span>
                  <span className="pl-3">
                    {item}
                  </span>
                </li>
              )
            })
          }
        </ul>
  
      </article>
      <Image
        alt="Imagen principal de los platillos"
        src={platillos}
        className="lg:w-96 lg:h-128 rounded-2xl"
      />
    </section>
  )
}

export default Package