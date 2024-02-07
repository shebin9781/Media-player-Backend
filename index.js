//import json-server library in index.js

const jsonServer = require('json-server')

//create server using json-server librery

const mediaPlayerServer = jsonServer.create()

//creat path to pd.json file

const router =jsonServer.router('pd.json')

//middlewares to convert js to json

const middleware = jsonServer.defaults()



//connect/use middlewares and router in server

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//setup port for the server(json server run by 3000 react 3000)

const port =8000 || process.env.PORT  //used while hosting if there is another port with 6000


//to listen server for resolving request
mediaPlayerServer.listen(port,()=>{
    console.log(`mediaPlayerServer started at${port}and ready fetch request`);
 })