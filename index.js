import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) =>{
  res.render("index1.ejs");
});

app.get("/signIn", (req, res) =>{
  res.render("signIn.ejs", {errorMessage : null});
});

app.get("/signUp", (req, res) =>{
  res.render("signUp.ejs");
});
app.get("/post", (req, res) =>{
  res.render("post.ejs");
});
app.get("/index2", (req, res) =>{
  res.render("index2.ejs");
});

app.post("/Sign-In", (req, res) =>{
  let correctEmail = false;
  let correctPassword = false;

  if(req.body.email === "srdjr000@gmail.com")   correctEmail = true;
  if(req.body.password === "MyBlog")    correctPassword = true;
  if(correctEmail && correctPassword){
    res.render("index2.ejs");
    // console.log("rendering...");
  }     
  else{
    res.render("signIn.ejs", {errorMessage : "Invalid Email Id or Password! Please try again..."});
  }
});

app.post("/Sign-up", (req, res) =>{
  res.render("index2.ejs");
});

app.post("/submit-blog", (req, res) =>{
  res.render("post.ejs", {message : "Our website is undergoing maintenance, so Post facility is not available right now. Sorry for the inconvenience, please try again later."});
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
