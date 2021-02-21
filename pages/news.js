import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Text from '../components/Text'

export default function News () {
  return (
    <scene>
      <Text text="aa" a="a"/>
    </scene>
  )
}

export async function getStaticProps() {
  //const allPostsData = getSortedPostsData()
  const allPostsData = []
  return {
    props: {
      allPostsData
    }
  }
}