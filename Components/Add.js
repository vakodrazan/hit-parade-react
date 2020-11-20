import React from 'react'

function Add() {
    return (
        <form>
            <fieldset>
                <input type="text" placeholder="Title"/>
            </fieldset>
            <fieldset>
                <input type="text" placeholder="Artist"/>
            </fieldset>
            <fieldset>
                <input type="number" placeholder="Price"/>
            </fieldset>
            <fieldset>
                <select>
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
                <textarea type="text" placeholder="Lyrics" />
            </fieldset>
            <button type="submit">Add</button>
        </form>
    )
}

export default Add
