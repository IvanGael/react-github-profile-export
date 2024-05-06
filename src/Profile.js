// Profile.js
import React from 'react';

function Profile({ data }) {
  return (
    <div id='profile-section'>
      <img src={data.avatar_url} alt={data.login} style={{width: "100px", height: "100px", objectFit: 'cover'}}/>
      <h2>{data.name}</h2>
      <p>{data.bio}</p>
      <p>Followers: {data.followers}</p>
      <p>Following: {data.following}</p>
      <a href={data.html_url}>View on GitHub</a>
    </div>
  );
}

export default Profile;
