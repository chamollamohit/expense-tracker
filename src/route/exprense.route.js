import { Router } from "express";
import { addExpense } from "../controller/addexpense.controller.js";
import { allExpenses } from "../controller/allExpense.controller.js";
import { deleteExpense } from "../controller/deleteExpense.controller.js";
import { resetTracker } from "../controller/resetTracker.js";

const router = Router() 

// To Add Rest Get Expenses
router.route('/').post(addExpense).get(allExpenses).delete(resetTracker)

// To delete expense
router.route('/:id').delete(deleteExpense)

export default router