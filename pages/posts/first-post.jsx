import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';


export default function myFirstPost() {
    return(
      <Layout>
       <Head>
        <title>First Post </title>
        <script src="https://connect.facebook.net/en_US/sdk.js" />
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={()=>
            console.log("script loaded correctly, window.FB has been populated")
          }
        >
        </Script>
      </Head>
      <h1> First Post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      </Layout>
    );
  }