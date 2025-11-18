const axios = require("axios");
const { expect } = require("chai");

describe("POST API Request Test", function () {
  it("should be able to post user details", async function () {
    const res = await axios.post('https://regres.in/api/users',
    {
        "name" : "morpheus", 
        "job" : "leader"
    });
    console.log(res.data);
  });
});