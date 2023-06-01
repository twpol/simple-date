/**
 * @type {(Date) => number}
 */
export function getIsoWeek(date) {
	const week1 = getWeekFromYear(date.getFullYear() - 1, date);
	const week2 = getWeekFromYear(date.getFullYear() + 0, date);
	const week3 = getWeekFromYear(date.getFullYear() + 1, date);
	return week2 <= 0 ? week1 : week3 > 0 ? week3 : week2;
}

function getWeekFromYear(year, date) {
	const jan1 = new Date(year, 0, 1);
	const ordinal = 1 + Math.floor((date - +jan1) / (1000 * 60 * 60 * 24));
	const day = date.getDay() || 7;
	const week = Math.floor((ordinal - day + 10) / 7);
	return week;
}
