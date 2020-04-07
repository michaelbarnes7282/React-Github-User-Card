import React from 'react'
import axios from 'axios'

function FollowerCard(props) {
    // console.log(props)
    return (
        <>
        {props.followers.map(followers => (
            // axios.get(followers.url)
            // .then(response => {
 
            // })
            <div className='card'>
            <img src={followers.avatar_url} alt="Profile of user" />
            <div className='card-info'>
                <h3 className='name'>{followers.name}</h3>
                <p className='username'>{followers.login}</p>
                <p>Location: {followers.location}</p>
                <p>Bio: {followers.bio}</p>
                <p>Followers: {followers.followers}</p>
                <p>Following: {followers.following}</p>
            </div>
        </div>
        ))}
        </>
    )
}

export default FollowerCard;