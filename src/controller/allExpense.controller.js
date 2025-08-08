import { ApiResponse } from "../utils/apiResponse.js"
import { ApiError } from "../utils/apiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { expense } from "../models/expense.model.js";


const allExpenses = asyncHandler(async (req,res) => {
    const expenseAll = await expense.find({})

    if(!expenseAll) {
        throw new ApiError(500, "Something went wrong while fetching all Expenses")
    }

    res.status(200).json(new ApiResponse(200, expenseAll, "All Expense are fetched"))
    
})


export {allExpenses}