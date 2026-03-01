// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="9Y1k_hxZb14Hv-adepMUyevlFUtZ8gEgQNlMzGUCwO0" />
        
        {/* Baaki SEO meta tags optional */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
