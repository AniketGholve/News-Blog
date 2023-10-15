import { useContext } from "react"
import Gallary from "./Gallary"
import LatestArticle from "./LatestArticle"
import LatestPost from "./LatestPost"
import LatestStories from "./LatestStories"
import { Store } from "../App"
import ImageSlider from "./ImageSlider"
const Fitness = () => {
  let store = useContext(Store)
  return (
    <div className="w-80 m-auto">
      <ImageSlider store={store} category={"Fitness"} />
      <Gallary store={store} category={"Fitness"} />
      <LatestPost store={store} category={"TechnologyLatest"} />
      <LatestArticle store={store} category={"TechnologyArticle"} />
      <LatestStories store={store} category={"TechnologyStories"} />
    </div>
  )
}

export default Fitness