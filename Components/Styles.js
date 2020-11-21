import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../Context'

function Styles() {
    const { allSongs } = useContext(Context);
    const mappingStyle = allSongs.map(song => song.style)
    const filterStyles = [...new Set(mappingStyle)];

    return (
        <section>
            {filterStyles.map((style, i) => (
                <p key={style + i} className="genre">
                    <Link to={`/styles/${style}`}>
                        <i className="ri-headphone-fill"></i>
                        <span>{style}</span>
                    </Link>
                </p>
            ))}
        </section>
    )
}

export default Styles
