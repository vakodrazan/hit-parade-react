import React, { useContext } from 'react'
import { Context } from '../Context'

function Add() {
    const { addNewSong } = useContext(Context);

    return (
        <form onSubmit={addNewSong} className="add-form">
                <input className="add-field" name="title" type="text" placeholder="Title" required/>
                <input className="add-field" name="name" type="text" placeholder="Artist" required/>
                <input className="add-field" name="price" type="number" placeholder="Price" required/>
                <select className="add-field" name="style">
                    <option value="">Style</option>
                    <option value="Salegy">Salegy</option>
                    <option value="Reggae">Reggae</option>
                    <option value="Folk">Folk</option>
                    <option value="Rap">Rap</option>
                    <option value="Pop">Pop</option>
                    <option value="CEDM; ‎R&B">CEDM; ‎R&B</option>
                    <option value="Chirstian">Chirstian</option>
                    <option value="Slow">Slow</option>
                    <option value="Country">Country</option>
                    <option value="Rock">Rock</option>
                    <option value="Others">Others</option>
                </select>
                <textarea rows="12" name="lyrics" type="text" placeholder="Lyrics" required/>
            <button className="addBtn" type="submit">Add</button>
        </form>
    )
}

export default Add
