document.addEventListener('DOMContentLoaded', () => {
    // --- Element Selectors ---
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalAmountValue = document.getElementById('total-amount-value');
    const resetButton = document.getElementById('reset-btn');

    const API_URL = '/api/expense';

    // Fetch Expenses from the DB
    async function fetchExpenses() {
        try {
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
            totalAmountValue.textContent = `₹${totalExpense.toFixed(2)}`
        } catch (error) {
            console.error('Error fetching expenses:', error);
            expenseList.innerHTML = `<p class="text-red-500 text-center py-4">Could not load expenses.</p>`;
        }
    }
// Event listner to add expense
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const category = document.getElementById('category').value;

        // Validation to check if we are getting correct data
        if (!description || isNaN(amount) || !category) {
            alert('Please fill in all fields correctly.');
            return;
        }
        try {
            await fetch(API_URL, {
                method: "POST",
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify({ description, amount, category}) // it sends the data in body in string format as data is in Object type which cannot be send 
            })
            form.reset()
            fetchExpenses();
        } catch (error) {
            console.error('Error adding expense:', error)
        }
    })

// Event listner to delete Expense
    expenseList.addEventListener('click', async (event) => {
        if(event.target.classList.contains('delete-btn')){
            const id = event.target.getAttribute('data-id');
            try {
                await fetch(`${API_URL}/${id}`, {method: "DELETE"})
                fetchExpenses();
            } catch (error) {
                console.error('Error deleting expense:', error);
            }
        }

    })

// Event listner to Reset Expense Tracker
    resetButton.addEventListener('click', async () => {
        const isConfirmed = confirm('Are you sure you want to reset the tracker? This will delete all expenses permanently.');
        if (isConfirmed) {
            try {
                await fetch(API_URL, { method: 'DELETE' });
                fetchExpenses();
            } catch (error) {
                console.error('Error resetting tracker:', error);
            }
        }
    
    })

    fetchExpenses();

})