import type { AppProps } from 'next/app'
import 'swiper/scss';
import "swiper/scss/navigation"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
