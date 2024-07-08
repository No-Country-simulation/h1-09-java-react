import app from "./src/app.js";
import sequelize from "./src/database/index.js";

const PORT = process.env.PORT || 8080;

const Main = async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => {
      console.log(`Server running locally http://localhost:${PORT}`)
    });
  } catch (error) {
    console.error("Ups! Something went wrong: \n", error);
  }
}

Main();