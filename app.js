const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
    res.send(`
        <h2>Cookie Example</h2>

        <form action="/set">
            First Name: <input type="text" name="fname"><br><br>
            Last Name: <input type="text" name="lname"><br><br>

            <button type="submit">Set Cookie</button>
        </form>

        <br>

        <a href="/get"><button>Get Cookie</button></a>

        <a href="/delete"><button>Delete Cookie</button></a>
    `);
});

app.get("/set", (req, res) => {
    res.cookie("fname", req.query.fname);
    res.cookie("lname", req.query.lname);

    res.send("Cookies Set Successfully");
});

app.get("/get", (req, res) => {
    res.send(req.cookies);
});


app.get("/delete", (req, res) => {
    res.clearCookie("fname");
    res.clearCookie("lname");

    res.send("Cookies Deleted");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

