const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    router.get("/api/workouts", (req, res) => {
        db.Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    router.put("/api/workouts/:id", ({ body, params}, res) =>{
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: {exercises: body} }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;
