import sequelize from "../../database/index.js";
import fs from "fs";

export const loadSQLScript = async (filePath) => {
    const sql = fs.readFileSync(filePath, "utf8");
    const queries = sql.split(";").filter(query => query.trim() !== "");
    for (const query of queries) {
        await sequelize.query(query);
    }
};