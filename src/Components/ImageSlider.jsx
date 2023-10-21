/* eslint-disable react/prop-types */
import HeroSlider, { MenuNav, Slide } from 'hero-slider'
import { Link, useLocation } from 'react-router-dom'

const ImageSlider = ({ store, category }) => {
    let path = useLocation().pathname;
    console.log(path)
    return (
        <>
            <HeroSlider autoplay dots='true' controller={{
                initialSlide: 1,
                slidingDuration: 500,
                slidingDelay: 100,
            }} className={path === "/" ? 'sliderView' : 'showSlider'}>
                {
                    store.data.filter(item => item.cat === category).map((val, key) => (
                        <Link key={key} to={`/details/${val.id}`}>
                            <Slide background={{ backgroundImageSrc: val.url }} label={val.title} />
                        </Link>
                    ))
                }
                <MenuNav />
            </HeroSlider>
        </>
    )
}

export default ImageSlider