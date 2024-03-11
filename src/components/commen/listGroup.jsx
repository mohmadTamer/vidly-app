import React from 'react';


const ListGroup = (props) => {
    const { genraList, currentGenra, onCatChange } = props
    const genraName = currentGenra;

    return (
        <ul className="list-group">
            <li
                className={genraName === "All Genres"
                    ? "clickable list-group-item active"
                    : "clickable list-group-item"}
                onClick={() => onCatChange("All Genres")}
            >All Genres</li>

            {genraList.map(genraList =>

                <li key={genraList._id}
                    // style={{mouseC}}
                    className={genraList === currentGenra
                        ? "clickable list-group-item active"
                        : "clickable list-group-item"}
                    onClick={() => onCatChange(genraList)}>
                    {genraList.name}
                </li>

            )}
        </ul>
    );
}

export default ListGroup;