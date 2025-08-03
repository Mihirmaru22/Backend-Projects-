import path from 'path'
import {loadFile, saveFile} from '../utils/fileUtils.js'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const UserData = path.join(__dirname, '../data/user.json'); 

export function getFile(req,res){
    const employ = loadFile(UserData);
    res.json({employ});
}

export function postFile(req,res) {
    const {name ,email} = req.body;
    if(!name || !email){
        res.status(400).json({error : "name and email both required"})
    }
    const employ = loadFile(UserData);
    const newEmpoly = {
        id : employ.length + 1,
        name,
        email,
        time : new Date().toISOString()
    }
    employ.push(newEmpoly);
    saveFile(UserData,employ);
    res.status(200).json({sucess: true, data : newEmpoly});
}
