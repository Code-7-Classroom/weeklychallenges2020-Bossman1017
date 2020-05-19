import React from 'react';
const List = props => {
    return (
        <ul>
            {
                // .map makes a new array and does a forLoop that makes the object accesible.
                props.items.map((item, index) =>
                    <li key={index}>
                        {item}
                    </li>)
            }
        </ul>
    )
}
export default List;