/*import { SVGProps } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      text: SVGProps<SVGTextElement>
    }
  }
}

type SpanProps = JSX.IntrinsicElements['text']

interface IconProps extends SpanProps {
  text: string
}
*/

export default function Text({ text, ...props }) {
  //export default function Text({ text, ...props }) {
  //return <text text={text} {...props}></text>
  return <text text={text} {...props}></text>
}
