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
        </body>
        <poml></poml>
      </Html>
    )
  }
}

export default MyDocument
