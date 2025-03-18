// Create a new Node.js module
module.exports = function(req, res) {
  // Set the HTTP status to 200 OK
  res.status(200);
  // Send a JSON response
  res.json({"message": "Hello World!"});
};
