import { useContext } from 'react'
import './style.css'
import { Store } from '../App'
import LatestStories from './LatestStories'
import LatestArticle from './LatestArticle'
import LatestPost from './LatestPost'
import Gallary from './Gallary'
import ImageSlider from './ImageSlider'
const Home = () => {
    let store = useContext(Store)
    return (
        <div className="w-80 m-auto">
            <ImageSlider store={store} category={"Travel"}/>
            <Gallary store={store} category={"Travel"} />
            <LatestPost store={store} category={"Latest"} />
            <LatestArticle store={store} category={"Latest"} />
            <LatestStories store={store} category={"Latest"} />
        </div>
    )
}

export default Home