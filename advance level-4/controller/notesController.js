import {loadFile , saveFile} from '../utils/notesUtills.js'
import path from 'path'

const NoteFile = path.join('../read.json')

export function getNotes(req,res) {
    const notes = loadFile(NoteFile);
    res.json({notes});
}

export function postNotes(req,res) {
    const {title, content} = req.body;
    if(!title || !content ) {
        return res.status(400).json({error : "title and content both needed"});
    }
    const notes = loadFile(NoteFile);
    const newNotes = {
        id : notes.length + 1,
        title,
        content,
        time : new Date().toISOString()
    }

    notes.push(newNotes);
    saveFile(NoteFile, notes);
    res.status(200).json({sucess : true, data : newNotes});
}