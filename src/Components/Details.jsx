import { useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Store } from '../App';

const Details = () => {
    let id = useParams().id;
    let store = useContext(Store)
    let navi = useNavigate();
    return (
        <>
            {
                store.data.filter(item => item.id === parseInt(id)).map((val, key) => (
                    <div className='details' key={key}>
                        <div className='m-auto p-relative'>
                            <div className='moreAction'>
                                <h3><i className="fa-solid fa-heart" style={{color:"#ff3070"}}></i> 5K</h3>
                                <button><i className="fa-solid fa-share-nodes"></i> Share this Blog</button>
                            </div>
                            <h1 className='text-center'>{val.title}</h1>
                            <div className='m-auto'>
                                <div className='w-80 m-auto d-flex g-10 align-center d-block'>
                                    <img src={val.url} alt="" width={'50%'} height={'50%'} className='detailsImage' />
                                    <div className='desc d-flex align-center'>
                                        <p className='text-justify' dangerouslySetInnerHTML={{ __html: val.desc }}></p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <h3 className='userDetails'><i className="fa-solid fa-user"></i><span>{val.user}</span></h3>
                                <div className='social'>
                                    <i className="fa-brands fa-facebook"></i>
                                    <i className="fa-brands fa-instagram"></i>
                                    <i className="fa-brands fa-twitter"></i>
                                </div>
                            </div>
                        </div>
                        <div className='m-auto'>
                            <button className='btn-back' onClick={() => { navi(-1) }}><i className="fa-solid fa-arrow-left"></i> back</button>
                        </div>
                        <div className='recommend'>
                            {
                                store.data.filter((item) => item.cat === val.cat).map((rec, key) => (
                                    <div className='newsbox' key={key}>
                                        <Link to={`/details/${rec.id}`}><img src={rec.url} alt="" width={'100%'} height={'60%'} /></Link>
                                        <div className='px-3'>
                                            <Link to={`/details/${rec.id}`}><h1>{rec.title.slice(0, 50)}...</h1></Link>
                                            <p className='date'>{rec.cat}<span className='color-gray'> / {rec.date}</span></p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Details