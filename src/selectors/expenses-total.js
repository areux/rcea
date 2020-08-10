export const selectExpensesTotal = (expenses) => {
    return expenses
        .map((x) => x.amount)
        .reduce((acc, cur) => acc + cur, 0);
}