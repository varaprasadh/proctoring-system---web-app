const express=require('express');
const mysql=require('mysql');
const app=express();
const path=require('path');
const cors=require('cors');
const bodyParser=require('body-parser');

const Auth=require('./rotes/Auth');
const getRouter=require('./rotes/getroutes');
const dataSender=require('./rotes/dataSender').Router;
const mapHandler=require('./rotes/mapHandler');
const checkUser=require('./rotes/checkUser');
const RegisterUser=require('./rotes/RegisterUser');
const ProfilePic=require('./rotes/ProfilePic');
const updatePassword=require('./rotes/updatePassword');

const port=process.env.port||9999;
app.use(cors());
// app.use(body_parser.urlencoded({extended:true}));
// app.use(body_parser.json());
app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }))

app.use(express.static(path.join(__dirname,'public')));
app.use(Auth);
app.use(checkUser);
app.use(getRouter);
app.use(dataSender);
app.use(mapHandler);
app.use(RegisterUser);
app.use(ProfilePic);
app.use(updatePassword);

app.listen(port, "localhost",() => {
  console.log("listening at lol " + port);
});
   

//sdinisha.16.cse@anits.edu.in
//Anits@2018