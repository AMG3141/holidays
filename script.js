function addToTable(cityId) {
	let tableId = cityId;
	// Check if the thing has been booked or not
	if (document.getElementById(tableId + "BookedInput").checked) {
		tableId += "Booked";
	} else {
		tableId += "Ideas";
	}

	let table = document.getElementById(tableId);
	let row = table.insertRow(table.rows.length);

	let cells = [];
	let inputs = [];
	for (let i = 0; i < table.rows[0].cells.length; i++) {
		// Create the cells and get the inputs
		cells.push(row.insertCell(i));
		inputs.push(document.getElementById(cityId + "Input" + i).value);

		// Add the data to the cells
		cells[i].innerHTML = inputs[i];

		// Reset the inputs
		document.getElementById(cityId + "Input" + i).value = "";
	}
}