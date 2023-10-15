/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
const Gallary = ({ store, category }) => {
    return (
        <div className="gallary mt-5 gallaryView">
            {
                store.data.filter(item => item.cat === category).map((val, key) => (
                    <div key={key} className={`card card${key}`}>
                        <Link to={`/details/${val.id}`}><img src={val.url} width={'100%'} height={'100%'} alt="" /></Link>
                        <div className='gallaryTitle'>
                            <h1><Link to={`/details/${val.id}`}>{val.title.slice(0, 29)}...</Link></h1>
                            <p className='date'>{val.cat}<span className=''> / {val.date}</span></p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Gallary