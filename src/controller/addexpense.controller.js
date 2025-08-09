import { ApiResponse } from "../utils/apiResponse.js"
import { apiError } from "../utils/apiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { expense } from "../model/expense.model.js";

const addExpense = asyncHandler(async (req,res) => {
    const {description,amount,category } = req.body
    const id = req.userinfo.id

    const newExpense = await expense.create({
        description: description,
        amount: amount,
        category: category,
        user: id
    })
    if(!addExpense) {
        throw new apiError(500, "Something went wrong while adding Expense")
    }
    res.status(200).json(new ApiResponse(200, newExpense, "Expense added"))
})

export { addExpense }