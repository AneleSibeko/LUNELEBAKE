const axios = require("axios");
const { expect } = require("chai");

describe("GET API Request Test", function () {
  it("should be able to get user list", async function () {
    const res = await axios.get('https://regres.in/api/users?page=2');
    expect(res.status).to.equal(200);
    expect(res.data).to.have.property("data").that.is.an("array");
  });
});
