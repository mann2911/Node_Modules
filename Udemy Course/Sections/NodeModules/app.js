const yargs=require('yargs');
const chalk=require('chalk');
const fs=require("fs");
const note=require("./notes");
//customize the yargs version
yargs.version("2.7.2")

//add
yargs.command({
    command:'add',
    describe:"add a new note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:'string'
        }, 
        body:{
            describe:"Note body",
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        const data={
            title:argv.title,
            body:argv.body
        }
        note.addNote(data);
    }
})
//remove
yargs.command({
    command:'remove',
    describe:"delete a new note",
    builder:{
        title:{
            describe:"delete an note",
            demandOption:true,
            type:'string'      
        }
    },
    handler:function(argv){
        note.removeNote(argv.title);
    }
})

//list
yargs.command({
    command:'list',
    describe:"listing notes",
    handler:function(){
        note.listNotes();
    }
})

yargs.command({
    command:'read',
    describe:"reading notes",
    builder:{
        title:{
            describe:"read a note",
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        note.readNote(argv.title)
    }
})
//  console.log(yargs.argv);
yargs.parse();

