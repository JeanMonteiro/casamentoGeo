import Head from 'next/head'
import RightFlowers from '@/assets/graphics/SVG/right-flowers.svg'
import BottomFlowers from '@/assets/graphics/SVG/bottom-flowers.svg'
import MariLeo from '@/assets/graphics/SVG/mari-e-leo.svg'
import {RiAccountPinBoxLine, RiGift2Line, RiMapPin2Line} from 'react-icons/ri'

export default function Home() {
  const placeUrl = 'https://www.google.com/maps/dir//Est%C3%A2ncia+Gabriel+-+Rua+ac%C3%A1cia,+R.+961,+BR-153,+km+426+-+N%C2%BA+4+-+Zona+rural,+An%C3%A1polis+-+GO,+75149-899/@-16.2398831,-49.0101515,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x935ea07bbab3ec2d:0x7f6b84291f00b1e4!2m2!1d-49.0079628!2d-16.2398831'
  return (
    <>
      <Head>
        <title>Casamento - Mari e Leo</title>
        <meta name="description" content="Casamento - Mari e Leo" />
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
          <MariLeo className={'fill-orange-700'} />
          <a href={placeUrl} target={'_blank'} className={'flex items-center justify-center mt-14 w-full p-4 rounded-md border border-orange-700 hover:border-orange-900 transition-colors text-orange-700 text-center'}>
            <RiMapPin2Line className={'border-orange-700 mr-4'} />Local do Casamento
          </a>
          <a href={'https://forms.gle/eCibpHsV1MH5xe799'} target={'_blank'} className={'flex items-center justify-center mt-6 w-full p-4 rounded-md border border-orange-700 hover:border-orange-900 transition-colors text-orange-700 text-center'}>
            <RiAccountPinBoxLine className={'border-orange-700 mr-4'} />Confirmar presença
          </a>
          <a aria-disabled href={'#'} className={'disabled flex items-center justify-center mt-6 w-full p-4 rounded-md border border-orange-700 hover:border-orange-900 transition-colors text-orange-700 text-center'}>
            <RiGift2Line className={'border-orange-700 mr-4'} />Presentes em breve
          </a>
        </div>
      </main>
    </>
  )
}
