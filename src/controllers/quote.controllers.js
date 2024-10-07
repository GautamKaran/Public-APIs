import { loadJsonData, JsonFilePath } from "../utils/helper.utils.js";

const getrandomquote = async (_, res) => {
  try {
    /********************************************************
     * Step1: Call JsonFilePath() & loadJsonData()
     * Step2: Check if qoute array is empty
     * Step3: Get a random index and retrieve the joke
     * Step4: Return the selected joke
     ********************************************************
     */

    // Step1: get jsonData
    const JsonPath = JsonFilePath("../json/quote.json");
    const qoute = await loadJsonData(JsonPath);

    // Step2: Check if qoute array is empty
    if (!Array.isArray(qoute) || qoute.length === 0) {
      return res.status(404).json({ error: "No qoute available." });
    }

    // Step3: Get a random index and retrieve the joke
    const randomIndex = Math.floor(Math.random() * qoute.length);
    const randomQoute = qoute[randomIndex];

    // Step4: Return the selected joke
    return res.status(200).json(randomQoute);
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
};

export { getrandomquote };
