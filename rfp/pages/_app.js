import 'bootstrap/dist/css/bootstrap.min.css';
import '../configureAmplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function MyApp({ Component, pageProps, }) {
  return <Component {...pageProps} />
}

export default withAuthenticator(MyApp)
