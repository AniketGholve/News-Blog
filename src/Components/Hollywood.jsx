import { useContext } from "react"
import Gallary from "./Gallary"
import LatestArticle from "./LatestArticle"
import LatestPost from "./LatestPost"
import LatestStories from "./LatestStories"
import { Store } from "../App"
import ImageSlider from "./ImageSlider"
const Hollywood = () => {
  let store = useContext(Store)
  return (
    <div className="w-80 m-auto">
      <ImageSlider store={store} category={"Hollywood"} />
      <Gallary store={store} category={"Hollywood"} />
      <LatestPost store={store} category={"HollywoodLatest"} />
      <LatestArticle store={store} category={"HollywoodArticle"} />
      <LatestStories store={store} category={"HollywoodStories"} />
    </div>
  )
}

export default Hollywood