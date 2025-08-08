document.addEventListener('DOMContentLoaded', () => {
    // --- Element Selectors ---
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalAmountValue = document.getElementById('total-amount-value');
    const resetButton = document.getElementById('reset-btn');

    const API_URL = '/api/expense';

    // Fetch Expenses from the DB
    async function fetchExpenses() {
        const response = await fetch(API_URL)
        if (!response.ok) {
            throw new Error("Something Went wrong while getting API Response")
        }
        const expense = await response.json()

        expenseList.innerHTML = ""
        const expenseAll = Array.from(expense.data)
        let totalExpense = 0


        if (expenseAll.length === 0) {
            expenseList.innerHTML = `<p class="text-slate-500 text-center py-4">No expenses recorded yet.</p>`;
        } else {
            expenseAll.forEach((selectedExpense) => {
                totalExpense += selectedExpense.amount
                console.log(selectedExpense);

                const item = document.createElement('li');
                item.innerHTML = `
                        <div class="flex items-center justify-between p-4 bg-slate-50 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div class="flex items-center gap-4">
                                <div class="font-bold text-slate-700">${selectedExpense.description}</div>
                                <div class="text-xs text-slate-600 bg-slate-200 px-2 py-1 rounded-full">${selectedExpense.category}</div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="font-semibold text-slate-800 text-lg">₹${selectedExpense.amount.toFixed(2)}</div>
                                <button class="delete-btn bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold hover:bg-red-600 transition-colors" data-id="${selectedExpense._id}">
                                    &times;
                                </button>
                            </div>
                        </div>
                    `;
                expenseList.appendChild(item);
            })
        }



        // const allExpense = expense.data.reduce((sum,expense) => {})
    }

    fetchExpenses();

})