import React, { useState } from 'react';

function ToDoList() {

    const [chores, setChores] = useState([]);
    const [newChores, setNewChores] = useState("");

    function handleInputChange(event) {
        setNewChores(event.target.value);
    }

    function addChore() {
        if(newChores.trim() !== ""){
        setChores([...chores, newChores]);
        setNewChores("");
        }
    }

    function deleteChore(index) {
        const updatedChores = chores.filter((chore, i) => i !== index);
        setChores(updatedChores)
    }

    function moveChoreUp(index) {
        if(index > 0){
            const updatedChores = [...chores];
            [updatedChores[index], updatedChores[index - 1]] = 
            [updatedChores[index - 1], updatedChores[index]]
            setChores(updatedChores);
        }
    }

    function moveChoreDown(index) {
        if(index < chores.length -1){
            const updatedChores = [...chores];
            [updatedChores[index], updatedChores[index + 1]] = 
            [updatedChores[index + 1], updatedChores[index]]
            setChores(updatedChores);
        }
    }

    return (
    <div className="to-do">

        <h1>Things I Have To Do</h1>

        <form>
            <input type="text"
                placeholder="Enter a new chore..."
                value={newChores}
                onChange={handleInputChange} />
        </form>

        <button className="add-button"
            onClick={addChore}>
            Add
        </button>

        <ol>
            {chores.map((chore, index) =>
                <li key={index}>
                    <span className="text">{chore}</span>
                    <button className="moveUp-button"
                        onClick={() => moveChoreUp(index)}>
                        Move Up
                    </button>
                    <button className="moveDown-button"
                        onClick={() => moveChoreDown(index)}>
                        Move Down
                    </button>
                    <button className="delete-button"
                        onClick={() => deleteChore(index)}>
                        Delete
                    </button>
                </li>



            )}
        </ol>


    </div>)
}


export default ToDoList