/**
 * @author Juha
 */

//function list_item(index, taskName, taskDesc, status, responsible) {
//	this.taskIndex = index;
//	this.taskName = taskName;
//	this.taskDescription = taskDesc;
//	this.status = status;
//	this.responsible = responsible;

/* debug */
//	document.write("new item");

// }

//function todo_list() {

//	this.list_init = list_init;
//	this.list_draw = list_draw;
//	this.list_add = list_add;
//	this.list_delete = list_delete;

/* debug */
//	document.write("constructor");

//}

function list_init() {

	if (localStorage.mainIndex == undefined) {
		localStorage.mainIndex = 0;
	}
	/* debug */
	//	document.write("init");

}

function list_add(name, description, status, responsible) {

	/* convert mainIndex to a number */
	var n = parseInt(localStorage.mainIndex);
	var Aname = new Array();
	var Adescription = new Array();
	var Astatus = new Array();
	var Aresponsible = new Array();

	if (n > 0) {
		Aname = JSON.parse(localStorage['names']);
		Adescription = JSON.parse(localStorage['descriptions']);
		Astatus = JSON.parse(localStorage['statuses']);
		Aresponsible = JSON.parse(localStorage['responsibles']);
	}

	Aname[n] = name;
	Adescription[n] = description;
	Astatus[n] = status;
	Aresponsible[n] = responsible;

	n = n + 1;

	localStorage.mainIndex = n;
	localStorage['names'] = JSON.stringify(Aname);
	localStorage['descriptions'] = JSON.stringify(Adescription);
	localStorage['statuses'] = JSON.stringify(Astatus);
	localStorage['responsibles'] = JSON.stringify(Aresponsible);

	/* debug */
	// document.write("list add");

}

function list_delete(index) {

	var n = parseInt(localStorage.mainIndex);
	var Aname = new Array();
	var Adescription = new Array();
	var Astatus = new Array();
	var Aresponsible = new Array();

	if (n > 0) {
		Aname = JSON.parse(localStorage['names']);
		Adescription = JSON.parse(localStorage['descriptions']);
		Astatus = JSON.parse(localStorage['statuses']);
		Aresponsible = JSON.parse(localStorage['responsibles']);
	}

	for ( i = 0; i < n; i++) {
		if (i > index) {
			/* remove reference to [index] */
			Aname[i - 1] = Aname[i];
			Adescription[i - 1] = Adescription[i];
			Astatus[i - 1] = Astatus[i];
			Aresponsible[i - 1] = Aresponsible[i];
		}

	}

	n = n - 1;
	localStorage.mainIndex = n;
	localStorage['names'] = JSON.stringify(Aname);
	localStorage['descriptions'] = JSON.stringify(Adescription);
	localStorage['statuses'] = JSON.stringify(Astatus);
	localStorage['responsibles'] = JSON.stringify(Aresponsible);

	/* debug */
	//document.write("list del");

}

function list_draw() {

	var n = parseInt(localStorage.mainIndex);
	var Aname = new Array();
	var Adescription = new Array();
	var Astatus = new Array();
	var Aresponsible = new Array();



	if (n == 0) {/* draw empty list */

		document.getElementById("listarea").innerHTML = "The list is empty "

	} else {
		Aname = JSON.parse(localStorage['names']);
		Adescription = JSON.parse(localStorage['descriptions']);
		Astatus = JSON.parse(localStorage['statuses']);
		Aresponsible = JSON.parse(localStorage['responsibles']);

		document.getElementById("listarea").innerHTML = "";

		for ( i = 0; i < n; i++) {

			document.getElementById("listarea").innerHTML = document.getElementById("listarea").innerHTML + "<br />" + Aname[i] + "  " + Aresponsible[i] + "   " + Astatus[i];

		}

	}

	/* debug */
	//document.write("list draw");

}

