import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Text from '../components/Text'
import Article from '../lib/article'

import { GetStaticProps } from 'next'

import { getNews } from '../lib/news'

export default function News({ newsList }: { newsList: Article[] }) {
  console.log(newsList)
  return (
    <scene>
      {newsList.map((article: Article, index) => (
        <Text text={article.title} position={`0 0 ${index * -0.1}`} a="a" />
      ))}
    </scene>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const newsList = await getNews()

  return {
    props: {
      newsList,
    },
  }
}
