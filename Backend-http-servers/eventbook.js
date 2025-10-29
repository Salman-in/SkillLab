const express = require("express")

const app = express()

app.use(express.json())

let event = []

app.post('/event',(req, res) => {
    const { name, details, location } = req.body;
    const newEvent = {
        name,
        details,
        location
    }
    event.push(newEvent)
    res.status(201).json({ message: "Event created successfully", event: newEvent });
});

app.get('/event',(req, res) => {
    res.status(200).json(event)
})

app.put('/event/:id', (req, res) => {
    const eventId = parseInt(req.params.id);
    const { name, details, location } = req.body;
    const findEvent = event.find(event => event.id === eventId);

    if(!findEvent) {
        res.status(404).json({ message: "Event not found" });
    }
    if(name) event.name = name;
    if(details) event.details = details;
    if(location) event.location = location;

    res.status(201).json({ message: "Event updated successfully", event: findEvent });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})