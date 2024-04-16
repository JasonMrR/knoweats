import { Fraunces } from "next/font/google";
import { FaCheckCircle } from "react-icons/fa";
import FillButton from "./FillButton";
import Image from "next/image";
import platillos from "@/assets/cenital-mesa-platos-knoweats.jpg"

const details = ['Envíos a toda la península', 'Sin suscripciones, sin compromisos', 'Tu comida de la semana en una entrega']

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'],
})

const Hero = () => {
  return (
    <section className='lg:px-16 p-4 lg:pt-10 w-full h-1/2 max-w-screen-2xl flex flex-wrap-reverse lg:flex-nowrap justify-center lg:justify-between items-center gap-4 lg:gap-12'>
      <article className="max-w-xs sm:max-w-md lg:min-w-96 flex flex-col">
        <header className="text-center sm:text-start text-4xl sm:text-6xl font-bold text-primary-color">
          <h1>Come sano toda la semana.</h1>
        </header>
        <ul className={`text-base sm:text-lg ${fraunces.className}`}>
          {
            details.map((item) => {
              return (
                <li key={item} className="flex items-center py-2">
                  <span className="text-green-checks text-lg sm:text-xl">
                    <FaCheckCircle/>
                  </span>
                  <span className="pl-3">
                    {item}
                  </span>
                </li>
              )
            })
          }
          <li className="flex items-center py-2">
            <span className="text-green-checks text-lg sm:text-xl">
              <FaCheckCircle/>
            </span>
            <span className="pl-3">
              Sin cocinar, sin limpiar… <span className="font-bold">¡Listo en minutos!</span>
            </span>
          </li>
        </ul>
        <FillButton title="haz ya tu pedido" className="mt-4 sm:self-start self-center"/>
      </article>
      <Image
        alt="Imagen principal de los platillos"
        src={platillos}
        className="lg:max-w-2xl lg:min-w-96 rounded-2xl"
      />
    </section>
  )
}

export default Hero