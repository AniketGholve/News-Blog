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
      <LatestPost store={store} category={"FitnessLatest"} />
      <LatestArticle store={store} category={"FitnessArticle"} />
      <LatestStories store={store} category={"FitnessStories"} />
    </div>
  )
}

export default Fitness