import { useState, useEffect } from 'react'
import PostCard from '../../PostCard/PostCard'
import Pagination from '../../../components/Home/Pagination/Pagination'
import Filter from '../Filter/Filter'
import image from '../../../assets/svg/filter.svg'
import './HomeBody.css'
import ButtonPost from '../../Button/Post/ButtonPost'
import { getAllPublications } from '../../../services/axiosServices'
import { update } from 'lodash'


const HomeBody = (props) => {
    const [publications, setPublications] = useState([])
    const [matriz, setMatriz] = useState([])
    const [actualPage, setActualPage] = useState(1)

    useEffect(() => {
        getAllPublications(setPublications)
    },[])

    useEffect(() => {
        const subArrayCreator = () => {
            let i = 0;
            let subArray = [];

            setPublications(publications.reverse())
    
            while(i < publications.length){
                subArray.push(publications.slice(i, (i += 5)));
            }

            return subArray

        }

        const subArray = subArrayCreator()

        setMatriz(subArray)

    },[publications])

    useEffect(() => {
        window.scrollTo(0, 0);
    },[actualPage])

    return (
        <div>
            <div className="homeBody">
                <div className="homeBody__left">
                    <img src={image}></img>
                    <ButtonPost logged={props.logged} user={props.user} setPublications={setPublications} />
                    <Filter />
                </div>
                <div className="homeBody__right">
                    <div className="right__postCards">
                        {publications.length !== 0 && matriz.length !== 0 ? (
                            matriz[actualPage-1].map((post) => {
                                return (<PostCard 
                                image={post.created_by.image}
                                price={post.price}
                                title={post.title}
                                user={post.created_by.userName}
                                name={post.created_by.name}
                                lastName={post.created_by.lastName}
                                country={post.created_by.country}
                                description={post.description}
                                labels={post.labels}
                                createdDate={post.created_date}
                                id={post._id}
                                setPublications={setPublications}
                                />)
                            })
                        ) : (
                            <h2>No hay elementos :c</h2>
                        )}
                    </div>
                        <Pagination pages={matriz.length} setActualPage={setActualPage} />
                </div>
                
            </div>
        </div>
    )
}

export default HomeBody