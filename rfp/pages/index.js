import Navbar from './components/Navbar';
import Head from "next/head";
import { Authenticator } from '@aws-amplify/ui-react';
import '../configureAmplify'




export default function Home() {
  return (
    <Authenticator
    variation="modal"
    hideSignUp={true}
    >
    <div>
      <Head>
        <title>RFP App</title>
      </Head>
      <Navbar />
      <div className="container mt-5">
      
      </div>
    </div>
    </ Authenticator>
  )
}