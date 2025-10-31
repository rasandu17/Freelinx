export function formatDate(dateInput, options = {}) {
const date = new Date(dateInput);

if (isNaN(date.getTime())) {
return 'Invalid Date';
}

const defaultOptions = {
year: 'numeric',
month: 'short',
day: 'numeric',
};

const combinedOptions = { ...defaultOptions, ...options };
const locale = options.locale || 'en-US';

try {
return new Intl.DateTimeFormat(locale, combinedOptions).format(date);
} catch (error) {
return date.toISOString().split('T')[0];
}
}

export function getDueDateStatus(dueDateInput) {
const dueDate = new Date(dueDateInput);

if (isNaN(dueDate.getTime())) {
return {
status: 'invalid',
days: null,
message: 'Invalid due date',
};
}

const today = new Date();
today.setHours(0, 0, 0, 0);

const dueDay = new Date(dueDate);
dueDay.setHours(0, 0, 0, 0);

const timeDiff = dueDay.getTime() - today.getTime();
const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

let status;
let message;

if (daysDiff < 0) {
status = 'overdue';
message = `${Math.abs(daysDiff)} day${Math.abs(daysDiff) === 1 ? '' : 's'} overdue`;
} else if (daysDiff === 0) {
status = 'dueToday';
message = 'Due today';
} else if (daysDiff === 1) {
status = 'dueTomorrow';
message = 'Due tomorrow';
} else if (daysDiff <= 7) {
status = 'dueSoon';
message = `Due in ${daysDiff} day${daysDiff === 1 ? '' : 's'}`;
} else {
status = 'upcoming';
message = `Due on ${formatDate(dueDate, { year: 'numeric', month: 'short', day: 'numeric' })}`;
}

return {
status,
days: daysDiff,
message,
};
}
