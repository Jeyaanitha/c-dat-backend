const express = require("express")
let bodyParser = require('body-parser')
var app=express();
const { exec } = require('child_process');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get("/", (req, res) => res.send("Hello World"));

const aws_router = require("./router/awsRouter")
app.use("/api/v1",aws_router)

const azure_router = require("./router/azureRouter")
app.use("/api/v1",azure_router)
// app.js
process.env.PATH = process.env.PATH + ':/usr/local/bin';
// app.js
 console.log('PATH:', process.env.PATH);


const port = 3000
//server port 
app.listen(port,()=>{
    console.log("Server has started successfully")
})



exec('/usr/local/bin/terraform --version', (error, stdout, stderr) => {
    console.log('Terraform version:', stdout);
    if (error) {
      console.error(`Error executing Terraform: ${error}`);
    }
  });

