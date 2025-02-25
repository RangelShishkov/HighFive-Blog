import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webHookRouter from "./routes/webhook.route.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import cors from "cors"

const app = express();

app.use(cors(process.env.CLIENT_URL))
app.use(clerkMiddleware())
app.use("/webhooks", webHookRouter);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

app.get("/home", (req, res) => {
  res.status(200).send("Hello!");
});

// app.get("/auth-state",(req,res)=>{
//   const authState = req.auth
//   res.json(authState)
// })

// app.get("/protect",(req,res)=>{
//   const {userId} = req.auth;
//   if(!userId){
//     return res.status(401).json("Not authenticated")
//   }
//   res.status(200).json("Successfully authenticated")
// })

// app.get("/protect2",requireAuth(),(req,res)=>{
//   const {userId} = req.auth;
//   if(!userId){
//     return res.status(401).json("Not authenticated")
//   }
//   res.status(200).json("Successfully authenticated")
// })

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

//EXPRESS 5 ERROR HANDLING
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack,
  });
}); 

app.listen(3030, () => {
  connectDB();
  console.log("server is listening!");
});
