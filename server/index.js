import app from "./src/app.js";
import sequelize from "./src/database/index.js";
import path from "path";
import { fileURLToPath } from "url";
import {loadSQLScript} from "./src/utils/sql/loadSQLScripts.js";

const PORT = process.env.PORT || 8080;

const FORCE_SYNC = true;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//models
await import("./src/models/index.js");

const Main = async () => {
  try {
    await sequelize.sync({ force: FORCE_SYNC });

    if (FORCE_SYNC) {
      const sqlFilePath = path.join(__dirname, "src/utils/sql/script.sql");
      await loadSQLScript(sqlFilePath);
    }

    app.listen(PORT, () => {
      console.log(`Server running locally http://localhost:${PORT}`)
    });
  } catch (error) {
    console.error("Ups! Something went wrong: \n", error);
  }
}

Main();