const Note =require("../models/Note")

const createNote =async (req,res)=>{
try {       
    const { title, content } = req.body;
    
    if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
}
const note =await Note.create({
    title,
    content,
    userId:req.user.id
})
return res.status(201).json({
    message: "Note created successfully",
    note
});
} catch (error) {
    res.status(500).json({message:"Server  error"})
}
}


const getNotes=async (req,res)=>{
    try {
        const notes=await Note.find({userId:req.user.id})
        return res.status(200).json({
    message: "Note fetched successfully",
    notes
});
    } catch (error) {
          res.status(500).json({message:"Server  error"})
    }
}



const updateNote= async (req,res)=>{
    try {
        const noteId=req.params.id;
       const { title, content } = req.body;
       const note= await Note.findById(noteId);
//If user tries to edit a note that doesn't exist
       if(!note){
        return res.status(404).json({message:"Note not found"})
       } 
       //Only the creator of the note can update it.
       if (note.userId.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
}
note.title=title||note.title;
note.content=content||note.content;
const updatedNote=await note.save();


return res.status(200).json({
    message: "Note updated successfully",
    note: updatedNote
});
    } catch (error) {
           res.status(500).json({message:"Server  error"})
    }
}

const deleteNote=async (req,res)=>{

   try {const noteId=req.params.id;

    const note=await Note.findById(noteId);
    if(!note){
        return res.status(404).json({message:"Note not found"})
       }


        if (note.userId.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
}

await note.deleteOne();

return res.status(200).json({
    message: "Note deleted successfully",
    
});
}catch(err){
     res.status(500).json({message:"Server  error"})
}
}

module.exports = {
  createNote,
  getNotes,
  updateNote,
  deleteNote
}