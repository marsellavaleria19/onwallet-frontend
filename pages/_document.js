import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <link rel="preconnect" href="https://fonts.googleapis.com"/>
               <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
               <link href="https://fonts.googleapis.com/css2?family=Mulish:ital@0;1&family=Nunito+Sans:ital,wght@0,200;0,400;0,900;1,700&family=Poppins:wght@700&display=swap" rel="stylesheet"></link>
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;