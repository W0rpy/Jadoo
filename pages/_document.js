import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
   return (
      <Html>
         <Head>
            <link href="https://fonts.googleapis.com/css?family=Poppins:regular,500,600,700" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Volkhov:700" rel="stylesheet" />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html >
   )
}