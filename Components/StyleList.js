import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../Context';

function StyleList() {
    const {styleName} = useParams();
    const {allSongs} = useContext(Context);
    const filterSameStyle = allSongs.filter(song => song.style === styleName);
    console.log(filterSameStyle);

    return (
        <div>
            <h2>
                <i className="ri-headphone-fill"></i>
                {styleName}
            </h2>
            {filterSameStyle.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    )
}

export default StyleList
