import express from "express"
import { createReview, deleteReview, getReviews } from "../controllers/review.controller.js"
import { verifyToken } from "../middeleware/jwt.js"

const route = express.Router()

route.post("/", verifyToken, createReview)
route.get("/:gigId", getReviews)
route.delete("/:id", deleteReview)

export default route