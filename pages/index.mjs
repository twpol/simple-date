import { getElements } from "../modules/elements.mjs";
import { getIsoWeek } from "../modules/dates.mjs";

const e = getElements();

const QUARTERS = ["Q1", "Q2", "Q3", "Q4"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const url = new URLSearchParams(location.search);
const test = url.get("test");
let count = 0;

function getDate() {
	if (test) {
		if (test.length === 10) {
			return new Date(test);
		}
		return new Date(+new Date("2020-12-01") + count++ * 1000 * 60 * 60 * 24);
	}
	return new Date();
}

function ordinalSuffix(number) {
	const suffix = ["th", "st", "nd", "rd"];
	const lastDigit = number < 10 || number > 20 ? number % 10 : 0;
	return number + (suffix[lastDigit] || suffix[0]);
}

function update() {
	const date = getDate();
	const isoWeek = getIsoWeek(date);

	e.date.calendar.quarter.textContent = QUARTERS[Math.floor(date.getMonth() / 3)];

	e.date.calendar.month.textContent = MONTHS[date.getMonth()];
	e.date.calendar.month.setAttribute("sub", date.getMonth() + 1);

	e.date.calendar.day.textContent = ordinalSuffix(date.getDate());

	e.date.mumps.mump.textContent = `M${1 + Math.floor((isoWeek - 1) / 4)}`;

	e.date.mumps.week.textContent = `W${isoWeek}`;
	e.date.mumps.week.setAttribute("sub", `${1 + ((isoWeek - 1) % 4)}/4`);
	e.date.mumps.week.setAttribute("tag", isoWeek % 4);

	e.date.mumps.dow.textContent = DAYS[date.getDay()];
	e.date.mumps.dow.setAttribute("tag", date.getDay());
}

setInterval(update, 1000);
update();
