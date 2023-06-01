import fs from "fs";
import events from "events";

const readStream = fs.createReadStream("./demo.txt");

// readStream.on("open", () => {
//   console.log("THE FILE IS OPEN");
// });

let eventsEmitter = new events.EventEmitter();

//Create an event handler
let myEventHandler = () => {
  console.log("I HEAR");
};

//Assign the event handler to an event:
eventsEmitter.on("HEAR", myEventHandler);

//Fire the event
eventsEmitter.emit("HEAR");
