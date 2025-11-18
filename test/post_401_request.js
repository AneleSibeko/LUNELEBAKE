const axios = require("axios");
const { expect } = require("chai");

describe("POST 401 Unauthorized Test (Local)", function () {
  it("should return 401 for unauthorized POST request", async function () {
    try {
      await axios.post("http://localhost:5001/unauthorized", { name: "Anele" });
      throw new Error("Expected request to fail with 401, but it succeeded.");
    } catch (error) {
      if (error.response) {
        expect(error.response.status).to.equal(401);
      } else {
        console.error("No response received:", error.message);
        expect.fail("No HTTP response was received.");
      }
    }
  });
});
