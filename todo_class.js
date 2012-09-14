/**
 * @author Juha
 */

function list_modify(index, name, description, status, responsible) {

	/* convert mainIndex to a number */
	var Aname = new Array();
	var Adescription = new Array();
	var Astatus = new Array();
	var Aresponsible = new Array();

	Aname = JSON.parse(localStorage['names']);
	Adescription = JSON.parse(localStorage['descriptions']);
	Astatus = JSON.parse(localStorage['statuses']);
	Aresponsible = JSON.parse(localStorage['responsibles']);

	Aname[index] = name;
	Adescription[index] = description;
	Astatus[index] = status;
	Aresponsible[index] = responsible;

	localStorage['names'] = JSON.stringify(Aname);
	localStorage['descriptions'] = JSON.stringify(Adescription);
	localStorage['statuses'] = JSON.stringify(Astatus);
	localStorage['responsibles'] = JSON.stringify(Aresponsible);

	/* debug */
	// document.write("list add");

}

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
	var padding1 = "";
	var padding2 = "";

	if (n == 0) {/* draw empty list */

		document.getElementById("selectable_list").innerHTML = "The list is empty "

	} else {
		Aname = JSON.parse(localStorage['names']);
		Adescription = JSON.parse(localStorage['descriptions']);
		Astatus = JSON.parse(localStorage['statuses']);
		Aresponsible = JSON.parse(localStorage['responsibles']);

		document.getElementById("selectable_list").innerHTML = "";

		for ( i = 0; i < n; i++, padding1 = "", padding2 = "") {

			/* elegant hard coded values instead of CSS - fix later */
			for ( j = 0; j < 35 - Aname[i].length; j++) {
				padding1 = padding1 + " ";
			}

			for ( j = 0; j < 22 - Aresponsible[i].length; j++) {
				padding2 = padding2 + " ";
			}

			document.getElementById("selectable_list").innerHTML = document.getElementById("selectable_list").innerHTML + "<li><pre>" + Aname[i] + padding1 + Aresponsible[i] + padding2 + Astatus[i] + "</pre></li>";

		}

	}

	/* debug */
	//document.write("list draw");

}

