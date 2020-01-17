import React from 'react';

function Profile (){
    return(
        <div className="profile-container">
            <img src="" />
            <h3 id="profile-name">Ann Perkins</h3>
            <h4 ide="recently-watch">Movies Recently Watched</h4>
            <ul>
                <li>Gladiator</li>
                <li>The Fast and the Furious</li>
                <li>Corpse Bride</li>
                <li>Skyfall</li>
                <li>Casino Royale</li>
                <li>A Knight's Tale</li>
                <li>Miss Peregrine's Home for Peculiar Children</li>
                <li>Sherlock Holmes</li>
                <li>Signs</li>
            </ul>
            <button>Switch User</button>
        </div>
    )
}

export default Profile