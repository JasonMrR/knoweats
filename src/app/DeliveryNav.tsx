import React from 'react'

const DeliveryNav = () => {
  return (
    <header className='bg-delivery-nav-bg h-10 md:h-11 flex justify-center items-center'>
      <p className='text-white font-semibold text-sm md:text-base'>
        <span className="line-clamp-1 px-6"> 🚚 PRÓX. ENTREGA: MARTES, (en 5 días) 🚚</span>
      </p>
    </header>
  )
}

export default DeliveryNav