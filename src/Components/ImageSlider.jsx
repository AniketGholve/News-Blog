/* eslint-disable react/prop-types */
import HeroSlider, { MenuNav, Slide } from 'hero-slider'
import { Link } from 'react-router-dom'

const ImageSlider = ({ store, category }) => {
    return (
        <>
            <HeroSlider autoplay controller={{
                initialSlide: 1,
                slidingDuration: 500,
                slidingDelay: 100,
            }} className='sliderView'>
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