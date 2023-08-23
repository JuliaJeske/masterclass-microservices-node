import express from "express";

const PORT = process.env.PORT ?? 3002;

const app = express();
app.use(express.json());
//app.use(router);

app.listen(PORT, () => console.log("server orders orders is running"));
