import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../Context';

function StyleList() {
    const {styleName} = useParams();
    const {allSongs} = useContext(Context);
    const filterSameStyle = allSongs.filter(song => song.style === styleName);

    return (
        <div>
            <h2>
                <i className="ri-headphone-fill"></i>
                {styleName}
            </h2>
            {filterSameStyle.map(item => (
                <Link to={`/song/${item.id}`} key={item.id}>
                    <div className="song-list">
                        <h3>{item.title}</h3>
                        <span>{item.name}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default StyleList
