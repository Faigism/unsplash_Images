import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

axios
const url =
  'https://api.unsplash.com/search/users?client_id=B0uCT9Sis4YnIY-90OQYg6mCZAvVaAhUhQO974ntYnQ&query=monkey'

const Gallery = () => {
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url)
      return result.data
    },
  })
  // console.log(response)
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )
  }
  const results = response.data.results
  // console.log(results)
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.photos?.map((item2) => item2.urls.regular)
        return <img className="img" src={url} key={url} />
      })}
    </section>
  )
}
export default Gallery
