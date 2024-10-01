import React from "react";

function UserGridItem(props){
    return (
        <div>
            <label>{props.placeholder}:</label>
            <input
                type="text"
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>

    )
}

export default UserGridItem;