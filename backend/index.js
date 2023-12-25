const express = require("express");
const app = express();
const connectDB = require("./db/db");
const userRoutes = require("./routes/userRoutes");
const schoolRoutes = require("./routes/schoolRoutes");
const classRoutes = require("./routes/classRoutes");
const academyRoutes = require("./routes/academyRoutes");
const teacherRoutes = require('./routes/teacherRoutes');
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());

app.use(cors());

// Create route
app.use("/api", academyRoutes)
app.use("/api", classRoutes)
app.use("/api", userRoutes);
app.use("/api", schoolRoutes);
app.use("/api", teacherRoutes);
app.use("/api", studentRoutes);

// Create MongoDB connection and start server
connectDB().then(() => {
    const PORT = 5001;
    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`);
    });
});
