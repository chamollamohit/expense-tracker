import { ApiResponse } from "../utils/apiResponse.js"
import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { expense } from "../models/expense.model.js";


const resetTracker = asyncHandler(async (req, res) => {
    const trackerReset = await expense.deleteMany({})
    if (!trackerReset) {
        throw new ApiError(500, "Something went wrong reseting  Expenses Tracker")
    }

    res.status(200).json(new ApiResponse(200, trackerReset, "Expense Tracker Reseted!!!"))
})

export {resetTracker}