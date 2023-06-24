import BottomFlowers from '@/assets/graphics/SVG/bottom-flowers.svg'
import GeoMarcos from '@/assets/graphics/SVG/geo-marcos.svg'
import RightFlowers from '@/assets/graphics/SVG/right-flowers.svg'
import { GiftModal } from '@/components/GiftModal'
import Head from 'next/head'
import { useState } from 'react'
import { RiAccountPinBoxLine, RiGift2Line, RiMapPin2Line } from 'react-icons/ri'

export default function Home() {
  const placeUrl = 'https://goo.gl/maps/1Cxr29B9zGYDfPG76'
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Casamento - Geovana e Marcos</title>
        <meta name="description" content="Casamento - Geovana e Marcos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={'w-full min-h-screen bg-amber-50 relative'}>
        <div className={'max-w-[300px] md:max-w-[500px] w-full absolute top-0 left-0'}>
          <RightFlowers className={'fill-teal-600'} />
        </div>
        <div className={'max-w-[300px] md:max-w-[500px] w-full absolute bottom-0 right-3'}>
          <BottomFlowers className={'fill-teal-600'} />
        </div>
        <div className={'max-w-[500px] w-full px-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}>
          <div className='flex items-center text-center justify-center'>
            <GeoMarcos className={'fill-orange-700'} />
          </div>
          <a href={placeUrl} target={'_blank'} className={'flex items-center justify-center mt-14 w-full p-4 rounded-md border border-orange-700 hover:border-orange-900 transition-colors text-orange-700 text-center'}>
            <RiMapPin2Line className={'border-orange-700 mr-4'} />Local do Casamento
          </a>
          <a href={'https://forms.gle/LDc7yHoRoy3b9WT27'} target={'_blank'} className={'flex items-center justify-center mt-6 w-full p-4 rounded-md border border-orange-700 hover:border-orange-900 transition-colors text-orange-700 text-center'}>
            <RiAccountPinBoxLine className={'border-orange-700 mr-4'} />Confirmar presença
          </a>
          {/* <button onClick={() => setIsModalOpen(true)} className={'flex items-center justify-center mt-6 w-full p-4 rounded-md border border-orange-700 hover:border-orange-900 transition-colors text-orange-700 text-center'}>
            <RiGift2Line className={'border-orange-700 mr-4'} />Presentes aqui
          </button> */}
        </div>
        {/* <GiftModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
      </main>
    </>
  )
}
