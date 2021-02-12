import React from 'react';

const Friends = ({state}) => {
    const {friends} = state
    const friendsList = friends.map((friend, i) => {
        return <div>{friend.name}</div>
    })
    return (
        <div>
            {friendsList}
        </div>
    )
}

export default Friends