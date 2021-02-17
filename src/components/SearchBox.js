import React from 'react';

const SearchBox = (props) => {
    return (
        <div className="col col-sm-4">
            <input className="form-control" placeholder="Search" value={props.value} onChange={(e) => props.setSearchValue(e.target.value)}></input>
        </div>
    )
}

export default SearchBox;