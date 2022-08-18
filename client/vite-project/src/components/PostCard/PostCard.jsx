import {useState, useEffect} from 'react'
import './PostCard.css'
import profile from '../../assets/svg/profile.svg'
import Rating from './Rating/Rating'
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton';
import {deletePublications, getAllPublications} from '../../services/axiosServices'

const PostCard = (props) => {

    const [colorStar, setColorStar] = useState('')
    const [activeStar, setActiveStar] = useState(true)
    const [changer, setChanger] = useState(true)

    const handleStar = async () => {
        setActiveStar(!activeStar)
        setColorStar(activeStar ? '#f1ca25' : 'grey')
    }

    const handleDelete = () => {
        const response = deletePublications(props.id)
        setChanger(!changer)
    }

    useEffect(() => {
        getAllPublications(props.setPublications)
    },[changer])

    return (
        <div className='post__content'>

            <div className="post__top">

                <div className="post__left">

                    <img src={props.image}/>
                    <p className='user'>{props.user}</p>

                </div>

                <div className="post__right">

                    <div className="infoUser__container">
                        <div className="container__top">

                            <IconButton aria-label='like' onClick={handleStar}>
                            <StarIcon sx={{ color: `${colorStar}` }}/>
                            </IconButton>

                            <IconButton aria-label='delete' onClick={handleDelete}>
                                <DeleteIcon sx={{
                                    color: 'grey',
                                    '&:hover': {
                                        color: 'black'
                                    }
                                    }} />
                            </IconButton>
                        </div>

                        <div className="container__bottom">
                            <img className='phone-image' src={props.image}/>
                            <p className="title">{props.title} |</p>
                            <p className="infoUser__name">{props.name} {props.lastName}</p>
                            <p className="infoUser__location">{props.country}</p>
                        </div>
                    </div>
                
                    <div className='post__description'>
                        <p className='description'>{props.description}</p>
                    </div>
                    <div className='price'>
                        <p>$ {props.price}/hs</p>
                    </div>
                </div>
            </div>

            <div className="post__bottom">
                <div className='skill_container'>
                    <div className='skill_container-post'>.NET</div>
                    <div className='skill_container-post'>C#</div>
                    <div className='skill_container-post'>JavaScript</div>
                    <div className='skill_container-post'>React</div>
                    <div className='skill_container-post'>Node.js</div>
                    <div className='skill_container-post'>MUI</div>
                    <div className='skill_container-post'>MongoDB</div>
                    <div className='skill_container-post'>SCRUM</div>
                    <div className='skill_container-post'>Bootstrap</div>
                    <div className='skill_container-post'>Git</div>
                </div>
            </div>
        </div>
    )
}

export default PostCard