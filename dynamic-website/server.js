const express = require("express");

const app = express();

app.get("/", (req, res) => {
    const time = new Date().toLocaleTimeString();

    res.send(`
        <html>
        <body style="font-family:Arial;text-align:center;margin-top:80px;">
            <h1>🚀 Dynamic Website</h1>
            <p>The current time is:</p>
            <h2>${time}</h2>
            <p>Refresh the page to see it change!</p>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});body{
    margin:0;
    font-family:Georgia, serif;
    background:#f6efe7;
    color:#3d2c1e;
    text-align:center;
}

header{
    background:#5b3a29;
    color:white;
    padding:30px;
}

.hero{
    padding:60px 20px;
}

.hero h2{
    font-size:40px;
}

.hero p{
    width:60%;
    margin:auto;
}

button{
    margin-top:20px;
    padding:12px 25px;
    border:none;
    background:#8b5e3c;
    color:white;
    font-size:16px;
    cursor:pointer;
}

.cards{
    display:flex;
    justify-content:center;
    gap:20px;
    padding:40px;
}

.card{
    width:220px;
    padding:20px;
    background:white;
    border:2px solid #d7b899;
}

footer{
    background:#5b3a29;
    color:white;
    padding:20px;
    margin-top:30px;
}