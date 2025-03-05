const express = require("express");
const router = express.Router();
const { Users } = require("../models");  // Use `Users` (with uppercase 'U')

//
router.get('/', (req, res) => 
{
    res.send("hello world");
});

// adds the user to the database
router.post("/", async (req, res) => 
{
    const { username, country, score } = req.body;

    // Validate incoming data
    if (!username || !country || !score) 
    {
        return res.status(400).json({ error: "Username, country, and score are required" });
    }

    try 
    {
        // Assuming you have a "Users" model, create a new user
        const user = await Users.create
        ({
            username,
            country,
            score
        });

    // Respond with the created user    
    res.status(201).json(user);  // Respond with the correct variable `user`
    } 
    catch (error) 
    {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating the user" });
    }
});

module.exports = router;
