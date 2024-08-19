import app from "./app.js";
// app.use(cors());

//app.listen(4000);
app.listen(4000, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})

