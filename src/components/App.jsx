import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const [notes,setNotes]= useState([]);
    function addNote(newNote){
        setNotes(prevNotes=>{
            return [...prevNotes,newNote];
        });

    }
    function deleteNote(id){
        setNotes(prevNotes=>{
            return prevNotes.filter((noteItem,index)=>{
                return index !== id;
            });
        });
    }
    return <div>
        <Header/>
        <CreateArea addNote={addNote}/>
        {notes.map((noteInf,index)=>(
            <Note
                key={index}
                id={index}
                title={noteInf.title}
                content={noteInf.content}
                onDelete={deleteNote}
            />
        ))}
        <Footer/>
    </div>;
}
export default App;