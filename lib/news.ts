import NewsAPI from 'ts-newsapi'
import Article from './article'

export async function getNews(): Promise<Array<Article>> {
  if (process.env.NEWSAPI_DUMMY) {
    return [
      {
        title: 'title',
        url: 'http://test',
      },
      {
        title: 'title2',
        url: 'http://test',
      },
    ]
  }
  const api_key = process.env.NEWSAPI_KEY
  const newsAPI = new NewsAPI(api_key)

  const topHeadlines = await newsAPI.getTopHeadlines({
    country: 'jp',
    category: 'general',
    pageSize: 20,
    page: 1,
  })

  console.log(topHeadlines)

  return topHeadlines.articles
}
