function openListView() {
	// open listView.html
	window.location = "listView.html";
}

function createNewUser() {
	// open userAdd.html
	window.location = "userAdd.html";
}

function goToMain() {
	// open index.html
	window.location = "index.html";
}

function addNewTask() {
	window.location = "add_new_task.html";
}

function deleteTask() {
	deleteTestTask();
}

function storeNewName (newName) {
	var d = document.getElementById('currentUser');
	localStorage.currentUser = newName;
	console.log(newName);
	
}

function getStoredName() {
	var a = localStorage.currentUser;
	return a;
}
