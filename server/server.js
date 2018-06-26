let express = require('express');

let app = express();
const PORT = 5000;

//respomd with assets
app.use(express.static('server/public'));

app.listen(PORT, function(){
    console.log('App is running on', PORT);
    
})