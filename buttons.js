function openListView() {
	// open listView.html
	window.location = "listView.html";
}

function createNewUser() {
	// open listView.html
	window.location = "userAdd.html";
}

function goToMain() {
	// open listView.html
	window.location = "index.html";
}

function deleteTask() {
		deleteTestTask();
	}
	
function getStoredName() {
	var a = localStorage.currentUser;
	return a;
}

function storeNewName (newName) {
		var d = document.getElementById('currentUser');
		localStorage.currentUser = newName;
	console.log(newName);
}


function addNewTask() {
	window.location = "add_new_task.html";
}

function editTask(index) {
	sessionStorage.listIndex = index;
	window.location = "edit_task.html"
}

function deleteTask() {
	deleteTestTask();
}
