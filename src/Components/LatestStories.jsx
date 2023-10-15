/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
const LatestStories = ({ store, category }) => {
    return (
        <>
            <h1 className='latest mt-5'>Latest Stories</h1>
            <div className='latestStory'>
                {
                    store.data.filter(item => item.cat === category).map((val, key) => (
                        <div className='story' key={key}>
                            <div className='p-5'>
                                <Link to={`/details/${val.id}`}><h1>{val.title.slice(0, 50)}...</h1></Link>
                                <p>{val.desc.slice(0, 200)}...</p>
                                <p className='date mt-5'>{val.cat}<span className='color-gray'> / {val.date}</span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default LatestStories