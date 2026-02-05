import { useState } from 'react'
import './App.css'
import PartnerHeartOutlineRoundedIcon from './icons/heart'
import HeartIcon from './icons/heart2'
import DijoSi from './components/dijoSi'

function App() {
  const [dijoSi, setDijoSi] = useState(false)
  const [isAbsolute, setIsAbsolute] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [buttonSize, setButtonSize] = useState(1)

  const onMouseOverHandler = () => {
    const { x, y } = getRandomPosition()

    setIsAbsolute(true)
    setPosition({ x, y })

    setButtonSize(prev => Math.max(prev - 0.05, 0.4))
  }
  const getRandomPosition = () => {
    const x = Math.random() * window.innerWidth
    const y = Math.random() * window.innerHeight

    return { x, y }
  }
  return (
    !dijoSi ? (
      <>
        <div className="flex flex-col justify-center my-24 lg:my-48 items-start ">
          <section className='flex flex-col justify-center items-center rounded-full p-10 bg-white w-full '>
            <div className=' text-red-600 bg-red-200 rounded-full p-8'>
              <PartnerHeartOutlineRoundedIcon size={100} color="text-red-600" />
            </div>
            <div className='flex flex-col justify-center items-center my-10'>
              <p className='text-7xl font-bold '>Quieres ser mi <span className='text-red-600 font-bold'>San Valentin?</span></p>
              <p className='text-lg my-4 text-neutral-500'>cada dia a tu lado es un reagalo. Me haria el hombre mas feliz del mundo si aceptaras ser mi San Valentin</p>
            </div>
            <div className='flex justify-center items-center gap-4'>
              <button
                onClick={() => setDijoSi(true)}
                className="
                  flex items-center
                  bg-red-600 text-white
                  px-6 py-3
                  rounded-full
                  cursor-pointer
                  transform
                  transition-transform
                  duration-200
                  hover:scale-110
                  active:scale-105
                "
              >
                <span className="px-2">
                  <HeartIcon size={24} color="text-white" />
                </span>
                ¡Si!
              </button>
              <button className={`bg-neutral-400 text-white px-6 py-3 rounded-full cursor-pointer`}
                style={{
                  top: position.y,
                  left: position.x,
                  position: isAbsolute ? 'fixed' : 'static',
                  transform: `scale(${buttonSize})`,
                  transition: 'transform 0.2s ease, top 0.2s ease, left 0.2s ease',
                }}
                onMouseOver={onMouseOverHandler}>No</button>
            </div>
          </section>
          <div className='flex flex-col justify-center items-center gap-4 w-full mt-12'>
            <p className='text-[12px] text-red-600 font-semibold'>ESPECIALMENTE PARA TI</p>
            <div className='flex justify-center items-center gap-2 text-red-600/20'>
              <span className='border-b border-red-600/20 w-12'></span>
              <HeartIcon size={12} color="text-red-600" />
              <span className='border-b border-red-600/20 w-12'></span>
            </div>
          </div>
        </div>
      </>
    ) : (
      <DijoSi />
    )
  )
}

export default App
