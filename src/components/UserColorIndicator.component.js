import React from 'react';

function UserColorIndicator(props) {
    return (
        <span className={props.csc}>
            <span className="visually-hidden"></span>
        </span>
    );
}

export default UserColorIndicator;