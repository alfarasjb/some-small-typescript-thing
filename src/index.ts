import express, { Request, Response } from "express"; 

const app = express(); 
const port = 5000; 

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({message: "Hello"});
})

app.listen(port, () => {
    const message = `Server is running at http://localhost:${port}`
    console.log(message);
});