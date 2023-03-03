import '@/styles/globals.css'
import 'ress'
import { Noto_Sans_Javanese } from 'next/font/google'
import type { AppProps } from 'next/app'

const notoSansJapanese = Noto_Sans_Javanese({
  weight: ['400','700'],
  subsets: ['javanese'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <style jsx global>{`
        html {
          font-family: ${notoSansJapanese.style.fontFamily};
        }
      `}</style>
  <Component {...pageProps} />
  </>
  )
}
