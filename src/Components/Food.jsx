import { useContext } from "react"
import Gallary from "./Gallary"
import LatestArticle from "./LatestArticle"
import LatestPost from "./LatestPost"
import LatestStories from "./LatestStories"
import { Store } from "../App"
import ImageSlider from "./ImageSlider"
const Food = () => {
  let store = useContext(Store)
  return (
    <div className="w-80 m-auto">
      <ImageSlider store={store} category={"Food"} />
      <Gallary store={store} category={"Food"} />
      <LatestPost store={store} category={"FoodLatest"} />
      <LatestArticle store={store} category={"FoodArticle"} />
      <LatestStories store={store} category={"FoodStories"} />
    </div>
  )
}

export default Food