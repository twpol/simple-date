import { getElements } from '../modules/elements.mjs';
import { getIsoWeek } from '../modules/dates.mjs';

const e = getElements();

const QUARTERS = ["Q1", "Q2", "Q3", "Q4"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function update() {
    const date = new Date();
    const isoWeek = getIsoWeek(date);

    e.date.calendar.quarter = QUARTERS[Math.floor(date.getMonth() / 3)];
    e.date.calendar.month = MONTHS[date.getMonth()];
    e.date.calendar.day = date.getDate();

    e.date.mumps.mump = `M${1 + Math.floor((isoWeek - 1) / 4)}`;
    e.date.mumps.week = `W${isoWeek}`;
    e.date.mumps.dow = DAYS[date.getDay()];
}

setInterval(update, 10000);
update();
