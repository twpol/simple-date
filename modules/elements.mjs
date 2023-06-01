export function getElements() {
	const e = Object.create(null);
	for (const element of document.querySelectorAll("[id]")) {
		setByPath(e, element.id.split("-"), element);
	}
	return e;
}

function setByPath(root, path, value) {
	for (let i = 0; i < path.length - 1; i++) {
		root[path[i]] = root[path[i]] || Object.create(null);
		root = root[path[i]];
	}
	root[path[path.length - 1]] = value;
}
