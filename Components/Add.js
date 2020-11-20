import React, { useState } from 'react'

function Add() {
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [price, setPrice] = useState()
    const [style, setStyle] = useState("")
    const [lyrics, setLyrics] = useState("")
    return (
        <form>
            <fieldset>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title"/>
            </fieldset>
            <fieldset>
                <input value={artist} onChange={(e) => setArtist(e.target.value)} type="text" placeholder="Artist"/>
            </fieldset>
            <fieldset>
                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price"/>
            </fieldset>
            <fieldset>
                <select value={style} onChange={(e) => setStyle(e.target.value)}>
                    <option value="">Style</option>
                    <option value="Salegy">Salegy</option>
                    <option value="Reggae">Reggae</option>
                    <option value="Folk">Folk</option>
                    <option value="Rap">Rap</option>
                    <option value="Pop">Pop</option>
                    <option value="CEDM; ‎R&B">CEDM; ‎R&B</option>
                    <option value="Hiram-pitiavana">Hiram-pitiavana</option>
                </select>
            </fieldset>
            <fieldset>
                <textarea value={lyrics} onChange={(e) => setLyrics(e.target.value)} type="text" placeholder="Lyrics" />
            </fieldset>
            <button type="submit">Add</button>
        </form>
    )
}

export default Add
