import Router from 'next/router';
import NProgress from 'nprogress'
import '../scss/styles.scss'
import '../scss/_components.scss'
import '../scss/_layouts.scss'
import '../scss/_palettes.scss'
import '../scss/react-circular-progressbar.scss'
import '../scss/rc-slider.scss'
import '../scss/react-datetime.scss'
import '../scss/react-notifications.scss'
import '../scss/nprogress.scss'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({Component, pageProps}) => {
  return <Component {...pageProps} />
}

export default MyApp
