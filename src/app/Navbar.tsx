import Image from 'next/image';
import Logo from '@/assets/logo-knoweats-white.png'
import { TbUserSquareRounded } from "react-icons/tb";
import { RiShoppingCartLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from './MobileMenu';

const links = [
  {
    title: "menú de la semana",
    link: "/pages/menu"
  },
  {
    title: "cómo funciona",
    link: "/pages/como-funciona"
  },
  {
    title: "¿Quiénes somos?",
    link: "/pages/quienes-somos"
  },
  {
    title: "faq's",
    link: '/pages/preguntas-frecuentes'
  }
]

interface LinkProps {
  link: string,
  title: string
}

const Link = ({link, title}: LinkProps) => {
  return (
    <li className="border-b-2 border-transparent hover:border-white transition-all delay-175 ease-in-out py-1" key={title}>
      <a href={link}>
        <span>{title}</span>
      </a>
    </li>
  )
}

const Navbar = () => {
  return (
    <header className="h-16 md:h-20 bg-primary-color overflow-hidden grid place-items-center sticky top-0 z-50">
      <div className="lg:px-16 px-4 w-full flex items-center justify-between max-w-screen-2xl">
        <header className="text-4xl text-white block md:hidden">
          <details className="details-custom">
            <summary className="summary-custom">
              <GiHamburgerMenu />
            </summary>
            <MobileMenu/>
          </details>
        </header>
        <h1 className='md:mb-2'>
          <a className='overflow-hidden' href='/'>
            <Image
              src={Logo}
              alt="Logo knoweats"
              className='h-8 w-40'
            />
          </a>
        </h1>
        <nav className="px-4 hidden md:block">
          <ul className='flex md:gap-6 lg:gap-10 text-base text-white font-bold uppercase'>
            {
              links.map((item) => {
                return (
                  <Link title={item.title} link={item.link}/>
                )
              })
            }
          </ul>
        </nav>
        <div className='text-4xl text-white flex gap-4'>
          <a className='hidden sm:block'>
            <span>
              <TbUserSquareRounded />
            </span>
          </a>
          <a>
            <span>
              <RiShoppingCartLine/>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
