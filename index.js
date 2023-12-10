import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://api.kanye.rest";


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get ("/", async (req, res) => {
	try {
		const response = await axios.get (API_URL);
        console.log(response.data.quote);
        res.render("index.ejs", {
            quote: response.data.quote
        })
	} catch (error) {
		res.status(404).send(error.response.data);
	}
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });  