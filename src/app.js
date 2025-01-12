import express from "express";
import path from 'path';
import { fileURLToPath } from "url";

 

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// app.use(express.static('pages'));  
// // app.use(express.static('.')); 
// app.use(express.static(path.join(__dirname)));
// said by chatGPT  // to deply
app.use(express.static(path.join(__dirname, 'pages')));


app.get('/', (req, res)=>{
    // if(login)
    // {
        // res.sendFile(path.join(__dirname, 'pages', 'home.html'))
        // window.location.href = "https://www.google.com";
    // }
    // else{
        res.sendFile(path.join(__dirname, 'pages', 'index.html'));
    // } 
});

app.get('/register.html', (req, res)=>{
    res.sendFile(path.join(__dirname, 'pages', 'register.html'));
});
app.get('/login.html', (req, res)=>{
    res.sendFile(path.join(__dirname, 'pages', 'login.html'));
});
app.get('/register.js', (req, res)=>{
    res.sendFile(path.join(__dirname, 'register.js'));
});
app.get('/mapLocation.html', (req, res)=>{
    res.sendFile(path.join(__dirname, 'pages', 'mapLocation.html'));
}); 
app.get('/volReg.html', (req, res)=>{
    res.sendFile(path.join(__dirname, 'pages', 'volReg.html'));
});
app.get('/home', (req, res)=>{
    res.sendFile(path.join(__dirname, 'pages', 'home.html'));
});

 
let passedLat, passedLong;
app.post('/passedLatLong', (req, res) => { 
    const { lat, long } = req.body;
    passedLat = parseFloat(lat.toFixed(14));
    passedLong = parseFloat(long.toFixed(14));
    console.log(passedLat, "samplessssss", passedLong);  
    
    res.json({ success: true, message: 'Location data received successfully' });
}); 
// got the latitude and longitude here and now this can be sent to the mapLocation page


//sending data(lat and long) to the mapLocation.js
app.get('/latLongForMap', (req, res) => {
    res.json({
      lat: passedLat,
      long: passedLong 
    });
});



// Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });                     //said by claude -> to deploy
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

