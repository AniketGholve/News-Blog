import { useContext } from "react"
import Gallary from "./Gallary"
import LatestArticle from "./LatestArticle"
import LatestPost from "./LatestPost"
import LatestStories from "./LatestStories"
import { Store } from "../App"
import ImageSlider from "./ImageSlider"

const Bollywood = () => {
  let store = useContext(Store)
  return (
    <div className="w-80 m-auto">
      <ImageSlider store={store} category={"Bollywood"} />
      <Gallary store={store} category={"Bollywood"} />
      <LatestPost store={store} category={"BollywoodLatest"} />
      <LatestArticle store={store} category={"BollywoodArticle"} />
      <LatestStories store={store} category={"BollywoodStories"} />
    </div>
  )
}

export default Bollywood