process.env.NODE_ENV = "test";

const chai = require("chai");
const { expect } = chai;
const chaiSorted = require("chai-sorted");
const { app } = require("../app");
const request = require("supertest")(app);
const connection = require("../connection.js");
chai.use(chaiSorted);

describe("/api", () => {
  after(() => {
    connection.destroy();
  });
  // error when no route found
  describe("/non-existent-endpoint", () => {
    it("status 404: page does not exist", () => {
      return request
        .get("/api/bananas")
        .expect(404)
        .then(({ body: { msg } }) => {
          expect(msg).to.equal("Page does not exist");
        });
    });
  });
  // end-point: /api/users
  describe("/users", () => {
    // POST to users
    describe("POST method", () => {
      it("status 201: responds with newly created user", () => {
        return request
          .post("/api/users")
          .send({ profilername: "zazzyzoo", secretpass: "secret123" })
          .expect(200)
          .then(({ body: { user } }) => {
            expect(user).to.eql({
              profiler_id: 2,
              profilername: "zazzyzoo",
              secretpass: "secret123"
            });
          });
      });
    });
    // error handling for POST
    // 400 : invalid keys
    describe("Error handling for POST", () => {
      it("status: 400 for invalid keys in the body", () => {
        return request
          .post("/api/users")
          .send({ forename: "sherps", fullname: "secret223" })
          .expect(400)
          .then(({ body: { msg } }) => {
            expect(msg).to.equal("Bad request");
          });
      });
      // 400 : missing values inside body
      it("status: 400 for missing values", () => {
        return request
          .post("/api/users")
          .send()
          .expect(400)
          .then(({ body: { msg } }) => {
            expect(msg).to.equal("Bad request");
          });
      });
      // 405 : invalid methods
      it("status 405: invalid methods for endpoint", () => {
        const invalidMethods = ["patch", "put", "delete", "get"];
        const methodPromises = invalidMethods.map(method => {
          return request[method]("/api/users")
            .expect(405)
            .then(({ body: { msg } }) => {
              expect(msg).to.equal("Method not allowed");
            });
        });
        return Promise.all(methodPromises);
      });
    });
  });
  // end-point: /api/users/:profilername
  describe("/users/:profilername", () => {
    // GET user data
    describe("GET method", () => {
      it("GET responds with a status of 200", () => {
        return request.get("/api/users/sherpie").expect(200);
      });
    });
    // Error handling
    describe("Error handling for GET", () => {
      // 404 when no user found
      it("status 404 when no user found", () => {
        return request
          .get("/api/users/jolly")
          .expect(404)
          .then(({ body: { msg } }) => {
            expect(msg).to.equal("Page does not exist");
          });
      });
      // 405 : invalid methods
      it("status 405: invalid methods for endpoint", () => {
        const invalidMethods = ["patch", "put", "delete", "post"];
        const methodPromises = invalidMethods.map(method => {
          return request[method]("/api/users/sherpie")
            .expect(405)
            .then(({ body: { msg } }) => {
              expect(msg).to.equal("Method not allowed");
            });
        });
        return Promise.all(methodPromises);
      });
    });
  });
});
