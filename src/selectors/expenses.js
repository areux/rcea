import moment from 'moment';
// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        console.log(a, b);
        switch (sortBy) {
            case 'date':
                if (a.createdAt === b.createdAt) return 0;
                return a.createdAt < b.createdAt ? 1 : -1;
            case 'amount':
                if (a.amount === b.amount) return 0;
                return a.amount < b.amount ? 1 : -1;
        }
    });
};
