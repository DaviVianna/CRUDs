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
import { AuthProvider } from '../Contexts/Auth';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())



const MyApp = ({Component, pageProps}) => {

  return(

      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
  
  );
 
}







//import { Provider } from 'next-auth/client'

/**
 * <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
    
 */


export default MyApp
