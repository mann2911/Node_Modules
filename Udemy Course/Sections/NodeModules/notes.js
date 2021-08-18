const fs=require('fs');
const chalk=require('chalk');

const addNote=(data)=>{
    const notes=loadNotes();
    // const duplicateNote=notes.filter(note=>note.title===data.title); 
    const duplicateNote=notes.find(note=>note.title===data.title);// more advanced and optimal method...
    //debugger == for debbuging the node js applications
    if(duplicateNote){
        console.log(" There is already a note with this title!!");
    }else{
        notes.push(data);
        const jsonData=JSON.stringify(notes);
        fs.writeFileSync("data.json",jsonData);
        console.log("Note Added Successfully!!!");
    }
}

const removeNote=(title)=>{
    const notes=loadNotes();
    const notesCheck=notes.filter(note=>note.title===title);
    const notesToKeep=notes.filter(note=>note.title!==title);
    if(notesCheck.length!==0){
        const jsonData=JSON.stringify(notesToKeep);
        fs.writeFileSync("data.json",jsonData);
        console.log(chalk.green.bold.inverse("Note deleted Successfully!!!"));
    }else{
        console.log(chalk.red.bold.inverse("Wrong title!!!"));
    }
    
}

const loadNotes=()=>{
  try{
      const bufferedData=fs.readFileSync("data.json");
      const dataJson=bufferedData.toString();
      return JSON.parse(dataJson);
  }catch(e){
      return [];
  }
}


const listNotes=()=>{
    const notes=loadNotes();
    console.log(chalk.magenta.inverse("Your Notes!!!"))
    notes.forEach(note=>{
        console.log(chalk.blue.inverse(note.title));
    })
}

const readNote=(title)=>{
    const notes=loadNotes();
    const note=notes.find(note=>note.title===title);
    if(note){
        console.log(chalk.redBright.inverse(note.body));
    }else{
        console.log(chalk.italic.magentaBright.inverse("Not Found!!!"))
    }
}

module.exports={addNote,removeNote,listNotes,readNote}