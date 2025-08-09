import { ApiResponse } from "../utils/apiResponse.js"
import { apiError } from "../utils/apiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { expense } from "../model/expense.model.js";


const allExpenses = asyncHandler(async (req,res) => {
    const id = req.userinfo.id
    const expenseAll = await expense.find({user: id})

    if(!expenseAll) {
        throw new apiError(500, "Something went wrong while fetching all Expenses")
    }

    res.status(200).json(new ApiResponse(200, expenseAll, "All Expense are fetched"))
    
})


export {allExpenses}