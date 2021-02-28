import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      poml: any
      scene: any
    }
  }
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <a href="https://vercel.com/?utm_source=projectspirare&utm_campaign=oss">
            <img src="/powered-by-vercel.svg" alt="powerd-by-vercel"/>
          </a>
        </body>
        <poml></poml>
      </Html>
    )
  }
}

export default MyDocument
