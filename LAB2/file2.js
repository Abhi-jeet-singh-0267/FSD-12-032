// import { readFile } from "fs/promises";
import { unlink } from "fs";
import { appendFile,readFile,writeFile } from "fs/promises";
const readData=async(filenmae)=>{
   try{
    const content=await readFile(filenmae,'utf-8');
    return content;
} catch(e){
    console.log(e.messege);
    console.log("File not found");
} finally{
    console.log("Read data finished");
}
};

const writeData=async(filename,content)=>{
    try {
        await writeFile(filename, content);
    } catch (error) {
        console.log(error.messege);
    }
}
const appendData=async(filename,content)=>{
    try {
        await appendFile(filename, content);
    } catch (error) {
        console.log(error.messege);
    }
};
const deleteFile=async(filename)=>{
    try{
        await unlink(filename);
    }catch(error){
        console.log("file not found");
    }
};

const data=await readData("file2.js");
console.log(data);