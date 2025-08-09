import { ApiResponse } from "../utils/apiResponse.js"
import { apiError } from "../utils/apiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { expense } from "../model/expense.model.js";


const resetTracker = asyncHandler(async (req, res) => {
    const id = req.userinfo.id
    const trackerReset = await expense.deleteMany({user:id})
    if (!trackerReset) {
        throw new apiError(500, "Something went wrong reseting  Expenses Tracker")
    }

    res.status(200).json(new ApiResponse(200, trackerReset, "Expense Tracker Reseted!!!"))
})

export {resetTracker}