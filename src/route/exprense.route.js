import { Router } from "express";
import { addExpense } from "../controller/addexpense.controller.js";
import { allExpenses } from "../controller/allExpense.controller.js";
import { deleteExpense } from "../controller/deleteExpense.controller.js";
import { resetTracker } from "../controller/resetTracker.js";
import { newUser } from "../controller/register.controller.js";
import { loginUser } from "../controller/login.controller.js";
import { verifyToken, isLoggedIn } from "../middleware/verifyUser.Middleware.js";

const router = Router()

// --- Page Rendering Routes ---
router.get('/login', isLoggedIn, (req, res) => res.render('login'));
router.get('/register', isLoggedIn, (req, res) => res.render('register'));
router.get('/tracker', verifyToken, (req, res) => res.render('tracker'));
router.get('/', verifyToken, (req, res) => res.render('tracker')); // Default to tracker

// API-Auth Routes
router.route('/api/register').post(newUser)
router.route('/api/login').post(loginUser)
router.post('/api/logout', (req, res) => {
    res.clearCookie('token').redirect('/login');
})

//API-Expense Routes (all protected)
router.route('/api/expenses').post(verifyToken, addExpense).get(verifyToken, allExpenses).delete(verifyToken,resetTracker)
router.route('/api/expenses/:id').delete(verifyToken,deleteExpense)


export default router