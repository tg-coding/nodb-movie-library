import React from 'react';

function Profile (){
    return(
        <div className="profile-container">
            <div id="profile-pic" alt="profile-pic">
                <div id="profile-pic-edit">Edit <strong>&#9998;</strong></div>
            </div>
            <h3 id="profile-name">Ann Perkins</h3>
            <hr/>
            <h4 id="recently-watched">Recently Watched</h4>
            <ul className="recently-watched-list">
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
            <button id="switch-user-btn">Switch User</button>
        </div>
    )
}

export default Profile