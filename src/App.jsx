import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

export default function App() {
    const [formData, setFormData] = useState({
        inputAuthor: "",
        inputTitle: "",
        inputBody: "",
        inputPublic: true,
    })

    function handlerFormData(e) {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    }

    return (<>
        <h2>Nuovo post</h2>
        <div>
            <p>Inserire il nome dell'autore:</p>
        </div>
        <div>
            <input
                type="text"
                name='inputAuthor'
                value={formData.inputAuthor}
                onChange={handlerFormData}
            />
        </div>
        <div>
            <p>Inserire il titolo del post:</p>
        </div>
        <div>
            <input
                type="text"
                name='inputTitle'
                value={formData.inputTitle}
                onChange={handlerFormData}
            />
        </div>
        <div>
            <p>Inserire il corpo del post:</p>
        </div>
        <div>
            <input
                type="text"
                name='inputBody'
                value={formData.inputBody}
                onChange={handlerFormData}
            />
        </div>

        <div>
            <select
                name="inputPublic"
                value={formData.inputPublic}
                onChange={handlerFormData}
            >
                <option value="true">Pubblica</option>
                <option value="false">Salva come bozza</option>
            </select>
        </div>
        <div>
            <button>Carica Post!</button>
        </div>
    </>);
}