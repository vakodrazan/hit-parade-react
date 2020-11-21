import React, { useContext, useState } from 'react'
import { Context } from '../Context'

function Add() {
    const { addNewSong } = useContext(Context);

    return (
        <form onSubmit={addNewSong}>
            <fieldset>
                <input name="title" type="text" placeholder="Title" required/>
            </fieldset>
            <fieldset>
                <input name="name" type="text" placeholder="Artist" required/>
            </fieldset>
            <fieldset>
                <input name="price" type="text" placeholder="Price" required/>
            </fieldset>
            <fieldset>
                <select name="style">
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
                <textarea name="lyrics" type="text" placeholder="Lyrics"  required/>
            </fieldset>
            <button type="submit">Add</button>
        </form>
    )
}

export default Add
