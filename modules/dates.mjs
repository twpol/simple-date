export function getIsoWeek(date) {
	const temp = document.createElement("input");
	temp.type = "week";
	temp.valueAsDate = date;
	return temp.value.split("W").pop();
}
