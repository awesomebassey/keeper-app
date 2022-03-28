import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function update(event) {
        const { name, value } = event.target
        setNote(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.addNote(note)
                setNote({ title: "", content: "" })
            }
            } className="create-note">
                <input value={note.title} onChange={update} name="title" placeholder="Title" />
                <textarea value={note.content} onChange={update} name="content" placeholder="Take a note..." rows="3" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;