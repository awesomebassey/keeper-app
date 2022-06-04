import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateArea from '.  /CreateArea';
import Note from './Note'; 

function App() {

    const [list, setList] = useState([]);

    function add(newItem) {
        setList(prev => {
            return [...prev, newItem];
        })
    }

    function remove(id) {
        setList(prev => {
            return prev.filter((item, index) => {
                return index !== id
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea addNote={add} />
            {list.map((note, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        delete={remove}
                    />
                )
            })}
            <Footer />
        </div>
    );
}

export default App;
