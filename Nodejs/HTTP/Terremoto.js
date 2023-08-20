const http = require("https");
const url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson";

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.log("Use: node <script> <magnitud>");
  process.exit(1);
}

const minMagnitude = parseFloat(args[0]);
if (isNaN(minMagnitude)) {
  console.log("La magnitud debe ser un número válido.");
  process.exit(1);
} else if (minMagnitude < -1 || minMagnitude > 10) {
  console.log(`Magnitud inválida, el rango permitido es [-1..+10].`);
  process.exit(1);
}

http
  .get(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      const earthquakes = JSON.parse(data).features;

      console.log("USGS All Earthquakes, Past Hour");
      console.log("---------------------");
      console.log(`Total: ${earthquakes.length}`);
      console.log("Status:", response.statusCode);
      console.log("---------------------");

      for (const earthquake of earthquakes) {
        if (earthquake.properties.mag >= minMagnitude) {
          console.log("==============================");
          console.log(new Date(earthquake.properties.time).toLocaleString());
          console.log("------------------------------");
          console.log(
            `M ${earthquake.properties.mag} - ${earthquake.properties.place}`
          );
          console.log(`Magnitud: ${earthquake.properties.mag}`);
          console.log(`Estatus: ${earthquake.properties.status}`);
          console.log(`Tipo: ${earthquake.properties.type}`);
          console.log(`Lugar: ${earthquake.properties.place}`);
          console.log(
            `Coordenadas: ${earthquake.geometry.coordinates[0]}, ${earthquake.geometry.coordinates[1]}`
          );
          console.log(`Info: ${earthquake.properties.url}`);
          console.log(`Detalles: ${earthquake.properties.detail}`);
          console.log("==============================");
        }
      }
    });
  })
  .on("error", (error) => {
    console.error("Error:", error.message);
  });
