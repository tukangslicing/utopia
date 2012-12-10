require('./../app');

var request = require('request');
var assert = require("assert");

var host = "https://localhost:3000";

suite('Login', function () {
  test('#Invalid login', function (done) {
    request.get(host + "/login/not-a-user/not-a-password", function (err, res, body) {
      assert.equal(JSON.parse(body).failed, true);
      done();
    });
  });
  test('#Valid login', function (done) {
    request.get(host + "/login/c@k.com/password", function (err, res, body) {
      assert.equal(JSON.parse(body).failed, false);
      done();
    });
  });
});

suite('Create Project', function () {
  var project_id = 0;
  setup(function () {
    request.get(host + "/login/c@k.com/password", function (err, res, body) {
      assert.equal(JSON.parse(body).failed, false);
      console.log("logged in");
    });
  });

  test('#Express', function (done) {
    var data = { form : {title : "Test project",
      description : "This is created from test"} };
    request.post(host + "/api/project/create/express", data, function (err, res, body) {
      console.log("res received");
      assert.notEqual((JSON.parse(body).project_id), 'undefined');
      project_id = (JSON.parse(body).project_id);
      done();
    });
  });
});