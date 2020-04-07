import React from 'react'

function Card(props) {
    
    return(       
        <div className='card'>
        <img src={props.user.avatar_url} alt="Profile of user"/>
        <div className='card-info'>
          <h3 className='name'>{props.user.name}</h3>
          <p className='username'>{props.user.login}</p>
          <p>Location: {props.user.location}</p>
          <p>Bio: {props.user.bio}</p>
          <p>Followers: {props.user.followers}</p>
          <p>Following: {props.user.following}</p>
        </div>
      </div>
    )
}

export default Card;