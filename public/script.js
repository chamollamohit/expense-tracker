document.addEventListener('DOMContentLoaded', ()=> {
    // --- Element Selectors ---
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalAmountValue = document.getElementById('total-amount-value');
    const resetButton = document.getElementById('reset-btn');

    const API_URL = '/api/expenses';

    // Fetch Expenses from the DB
    async function fetchExpenses() {
        const response = await fetch(API_URL)
        if(!response.ok) {
            throw new Error("Something Went wrong while getting API Response")
        }
        const expense = await response.json()

        expenseList.innerHTML = ""
    }

})