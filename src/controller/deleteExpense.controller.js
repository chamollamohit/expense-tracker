import { ApiResponse } from "../utils/apiResponse.js"
import { apiError } from "../utils/apiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { expense } from "../model/expense.model.js";


const deleteExpense = asyncHandler(async (req,res) => {
    const dltexpense = await expense.findByIdAndDelete(req.params.id)
    if(!dltexpense) {
        throw new apiError(500, "Something went wrong whilte deleting Expense")
    }

    res.status(200).json(new ApiResponse(200, dltexpense, "Expense deleted!!!"))

})


export {deleteExpense}