const app = require("./config/server.js")

require('./routes.js')

require('./config/database.js')

let port = 3000;
app.listen(port, () => {
    console.info(`Server is running in port ${port}`);
  });