import { ApiResponse } from "../utils/apiResponse.js"
import { ApiError } from "../utils/apiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { expense } from "../models/expense.model.js";

const addExpense = asyncHandler(async (req,res) => {
    console.log(req.body);
    const {description,amount,category } = req.body
    const newExpense = await expense.create({
        description: description,
        amount: amount,
        category: category
    })
    if(!addExpense) {
        throw new ApiError(500, "Something went wrong while adding Expense")
    }
    res.status(200).json(new ApiResponse(200, newExpense, "Expense added"))
})

export { addExpense }