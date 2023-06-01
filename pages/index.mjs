import { getElements } from "../modules/elements.mjs";
import { getIsoWeek } from "../modules/dates.mjs";

const e = getElements();

const QUARTERS = ["Q1", "Q2", "Q3", "Q4"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function update() {
	const date = new Date();
	const isoWeek = getIsoWeek(date);

	e.date.calendar.quarter.textContent = QUARTERS[Math.floor(date.getMonth() / 3)];
	e.date.calendar.month.textContent = MONTHS[date.getMonth()];
	e.date.calendar.day.textContent = date.getDate();

	e.date.mumps.mump.textContent = `M${1 + Math.floor((isoWeek - 1) / 4)}`;
	e.date.mumps.week.textContent = `W${isoWeek}`;
	e.date.mumps.dow.textContent = DAYS[date.getDay()];
}

setInterval(update, 10000);
update();
