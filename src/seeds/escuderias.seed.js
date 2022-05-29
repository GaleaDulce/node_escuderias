
const mongoose = require("mongoose");

const Escuderia = require("../api/models/escuderia.model");

const escuderias = [
    {
      escu: "Ferrari",
      year: 1929,
      pilotName: "Charles Lecrerc",
      image:
        "https://cdn-5.motorsport.com/images/mgl/6VRnqmN6/s800/charles-leclerc-ferrari-1.jpg",
    },
  
    {
      escu: "Red Bull",
      year: 1987,
      pilotName: "Max Verstappen",
      image:
        "https://www.cymotorsport.com/wp-content/uploads/2019/10/Formula-1-Driver-Max-Verstappen-Cranky-Yankee-F1.png",
    },

    {
      escu: "Mercedes Benz",
      year: 1954,
      pilotName: "Lewis Hamilton",
      image:
        "https://futbolete.com/apuestas/wp-content/uploads/2021/03/Lewis-Hamilton.png"
    }
    
  ];


const escuderiasDocuments = escuderias.map((escuderia) => new Escuderia(escuderia));


mongoose
  .connect("mongodb://localhost:27017/escuderias", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    
    const allEscuderias = await Escuderia.find();
   
    if (allEscuderias.length) {
      await Escuderia.collection.drop();
      console.log("Escuderias DB deleted")
    }
  })
  .catch((error) => console.log("Error deleting escuderias", error))
  
  .then(async () => {
    await Escuderia.insertMany(escuderiasDocuments);
    console.log("Escuderias DB created")
  })
  .catch((error) => console.log("Error creating escuderias", error))
  
  .finally(() => mongoose.disconnect());