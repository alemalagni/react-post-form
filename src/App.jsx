import { useState } from 'react';
import './App.css'

export default function App() {
    const [formData, setFormData] = useState({
        inputAuthor: "",
        inputTitle: "",
        inputBody: "",
        inputPublic: true,
    })

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
            />
        </div>

        <div>
            <select
                name="inputPublic"
                value={formData.inputPublic}
            >
                <option value="true">Pubblica</option>
                <option value="false">Salva come bozza</option>
            </select>
        </div>
    </>);
}