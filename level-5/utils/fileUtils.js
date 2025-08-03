import fs, { existsSync } from 'fs'

export function loadFile(file){
    if(!existsSync(file)){
        fs.writeFileSync(file , '[]')
    }
    const data = fs.readFileSync(file, 'utf-8');
    return JSON.parse(data);
}

export function saveFile(file, data){
    fs.writeFileSync(file, JSON.stringify(data,null,2));
}