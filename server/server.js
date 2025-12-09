import express from "express";



// server set up 
const app = express();
const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server listening on port: ${PORT}`)
})
export default app;