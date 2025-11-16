const express=require("express")
const router=express.Router();
const requireAuth=require("../middleware/requireAuth")
const { createNote,getNotes,updateNote,deleteNote } =require("../controllers/notesController")


router.post("/",requireAuth,createNote);
router.get("/",requireAuth,getNotes);
router.put("/:id",requireAuth,updateNote);
router.delete("/:id",requireAuth,deleteNote);

module.exports=router;
