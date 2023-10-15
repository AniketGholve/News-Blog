import { useContext } from "react"
import Gallary from "./Gallary"
import LatestArticle from "./LatestArticle"
import LatestPost from "./LatestPost"
import LatestStories from "./LatestStories"
import { Store } from "../App"
import ImageSlider from "./ImageSlider"
const Technology = () => {
  let store = useContext(Store)
  return (
    <div className="w-80 m-auto">
      <ImageSlider store={store} category={"Technology"} />
      <Gallary store={store} category={"Technology"} />
      <LatestPost store={store} category={"TechnologyLatest"} />
      <LatestArticle store={store} category={"TechnologyArticle"} />
      <LatestStories store={store} category={"TechnologyStories"} />
    </div>
  )
}

export default Technology