require("dotenv").config();
const connectDB = require("./config/db.js");
const app = require("./app.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
})
