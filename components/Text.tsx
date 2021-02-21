export default function Text({ text, ...props }: { text: string }) {
//export default function Text({ text, ...props }) {
  return <text text={text} {...props}></text>
}
