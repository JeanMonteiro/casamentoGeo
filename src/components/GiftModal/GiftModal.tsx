import Image from "next/image"
import { FC, useState } from "react"
import { Modal } from "../Modal/Modal"

interface GiftModalProps {
  isOpen: boolean
  onClose: () => void
}

export const GiftModal: FC<GiftModalProps> = ({ isOpen, onClose }) => {
  const [isCopying, setIsCopying] = useState(false)

  const handleCopy = () => {
    setIsCopying(true)
    navigator.clipboard.writeText('00020126450014br.gov.bcb.pix0123marijsouza.01@gmail.com5204000053039865802BR5922Mariana De Jesus Souza6009Sao Paulo62070503***6304F965')
    setTimeout(() => {
      setIsCopying(false)
    }, 1000)
  }

  return (
    <Modal title="Presentes" isOpen={isOpen} onClose={onClose}>
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="w-full flex flex-col gap-8">
            <div className='bg-slate-300 rounded-lg w-full h-[400px]' />
          </div>
          <div className="w-full flex flex-col gap-4">
            <p className={''}>
            Decidimos adotar uma abordagem diferente para os presentes de casamento, transformando o amor enviado a nós em generosidade através de doações para uma causa especial. Em vez de presentes tradicionais, incentivamos todos a fazer uma doação, de qualquer valor, em nome do nosso casamento, a fim de compartilhar nossa felicidade e ajudar quem mais precisa.
            </p>
            <p className={''}>
            Para contribuir basta ler o QR Code do seu aplicativo de banco e fazer uma doação. Com cada doação, pequena ou grande, podemos fazer uma diferença significativa juntos. Agradecemos profundamente pela presença em nossas vidas e por apoiar esta nova fase de nossa jornada.
            </p>
          </div>
        </div>
        <div className='w-full flex flex-col gap-4 p-4 bg-slate-50 rounded-lg'>
            <p className="text-lg font-bold">Abra seu aplicativo de banco e faça a leitura do QR Code ou copie e cole.</p>
            <div className="w-full flex flex-col md:flex-row items-start justify-start md:items-center md:justify-center gap-8">
              <div className="rounded overflow-hidden w-[150px] h-[150px]">
                <Image alt='qr-code' src='/images/qr-code-payment.png' width={150} height={150} />
              </div>
              <div className="w-full mt-4 flex flex-col gap-8 text-sm break-all">
                <p className='hidden md:block'>00020126450014br.gov.bcb.pix0123marijsouza.01@gmail.com5204000053039865802BR5922Mariana De Jesus Souza6009Sao Paulo62070503***6304F965</p>
                <button onClick={() => handleCopy()} disabled={isCopying} className='bg-teal-600 hover:bg-teal-700 text-white rounded-lg p-2 disabled:bg-teal-900'>
                  {isCopying ? 'Copiado!' : 'PIX copia e cola'}
                </button>
              </div>
            </div>
        </div>
      </div>
    </Modal>
  )
}
