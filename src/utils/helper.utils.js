import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

/**
 * Load data from a JSON file
 * @param {string} jsonPath - Path to the JSON file
 * @returns {Promises<Object[]>} - Return a promise that resolves to an array of objects from the JSON file
 */
export const loadJsonData = async (jsonPath) => {
  try {
    /**
     * step1: Read the JSON file contents as a string
     * step2: parse the string into an object/array
     * step3: Return the parsed data
     */

    // step1: Read the JSON file contents as a string
    const data = await fs.readFile(jsonPath, "utf8");

    // step2: parse the string into an object/array
    const parseData = JSON.parse(data);

    // step3: Return the parsed data
    return parseData;
  } catch (error) {
    console.log(
      `Error while reading json file contents: ${jsonPath}`,
      error.message
    );
    throw error;
  }
};

/**
 * Get the full path to a JSON file based on the current file location.
 * @param {string} relativePath - Relative path to the JSON file
 * @returns {string} - Full path to the JSON file
 */
export const JsonFilePath = (relativePath) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const jsonPath = path.join(__dirname, relativePath);
  return jsonPath;
};
