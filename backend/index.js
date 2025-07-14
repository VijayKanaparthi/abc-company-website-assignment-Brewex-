const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const Heading = require("./models/Heading")

require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000

app.post("/", async (request, response) => {
  try {
    const { text } = request.body
    const newHeading = new Heading({ text })
    await newHeading.save()
    return response.status(201).json(newHeading)
  } catch (error) {
    return response.status(500).json("Failed to Post the Heading", error)
  }
})

app.get("/", async (request, response) => {
  try {
    const heading = await Heading.findOne().sort({ updatedAt: -1 })
    return response.status(200).json(heading)
  } catch (error) {
    return response.status(500).json("Failed to Fetch the Heading", error)
  }
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server Running at ${port} & DB Connected`)
    })
  })
  .catch((err) => {
    console.log("Mongoose Error: ", err.message)
  })
