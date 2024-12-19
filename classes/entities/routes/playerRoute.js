const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController");

router.post("/create",(req,res) =>{
    const { name, health, attack, score } = req.body;
    try {
        const player = playerController.createNewPlayer(name, health, attack, score);
        res.status(200).json(player);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get("/:name",(req,res) =>{
    const { name } = req.params;
    try {
        const player = playerController.findPlayerByName(name);
        res.status(200).json(player);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

router.patch("/:name/score",(req,res) => {
    const { name } = req.params;
    const { points } = req.body;
    try {
        const player = playerController.addScoretoPlayer(name,points);
        res.status(200).json(player);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

router.patch("/:name/damage",(req,res) => {
    const { name } = req.params;
    const { amount } = req.body;
    try {
        const player = playerController.damagePlayer(name,amount);
        res.status(200).json(player);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});
