import { Provider} from 'react-redux'
import '../app/globals.css'
import store from '@/store'
import AuthProvider from '@/HOC/AuthProvider'

function MyApp({ Component, pageProps }) {
 
  return(
 <Provider store={store}>
  <AuthProvider/>
  <Component {...pageProps} />
  </Provider>
  ) 
}

export default MyApp