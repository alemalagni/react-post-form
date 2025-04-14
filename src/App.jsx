import './App.css'

export default function App() {
    <>
        <p>Nuovo post</p>
        <div>
            <p>Inserire il nome dell'autore:</p>
            <input type="text" id='inputAuthor' />
        </div>
        <div>
            <p>Inserire il titolo del post:</p>
            <input type="text" id='inputTitle' />
        </div>
        <div>
            <p>Inserire il corpo del post:</p>
            <input type="text" id='inputBody' />
        </div>
        <div>
            <select name="" id="inputPublic">
                <option value="true">Pubblica</option>
                <option value="false">Salva come bozza</option>
            </select>
        </div>
    </>
}