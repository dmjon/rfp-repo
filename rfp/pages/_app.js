import 'bootstrap/dist/css/bootstrap.min.css';
import '../configureAmplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function MyApp({ Component, pageProps, }) {
  return <Component {...pageProps} />

}

export default (MyApp)
