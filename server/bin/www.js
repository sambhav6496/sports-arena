const app = require("../index");
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`listening on ${PORT}`);
});
