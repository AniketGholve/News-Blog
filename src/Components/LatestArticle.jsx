/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
const LatestArticle = ({ store, category }) => {
    return (
        <>
            <h1 className='latest mt-5'>Latest Articles</h1>
            <div className='latestArticle mt-5'>
                {
                    store.data.filter(item => item.cat === category).map((val, key) => (
                        <div className='article' key={key}>
                            <Link to={`/details/${val.id}`}>
                                <img src={val.url} alt="" width={'100%'} height={'100%'} />
                            </Link>
                            <div className='px-3'>
                                <Link to={`/details/${val.id}`}><h1>{val.title}</h1></Link>
                                <p>{val.desc.slice(0, 200)}...</p>
                                <p className='date'>{val.cat}<span className='color-gray'> / {val.date}</span></p>
                            </div>
                        </div>

                    ))
                }
                <div className='advertistement'>
                    <h1>Advertistement</h1>
                </div>
            </div>
        </>
    )
}

export default LatestArticle