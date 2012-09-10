/**
 * @author Juha
 */

var i;
var Data = new Array();
var mainIndex; 



function list_item(index, taskName, taskDesc, status, responsible) {
	this.taskIndex = index;
	this.taskName = taskName;
	this.taskDescription = taskDesc;
	this.status = status;
	this.responsible = responsible;

	/* debug */
//	document.write("new item");

}


function todo_list() {

	mainIndex = 0; 
	
	this.list_init = list_init;
	this.list_draw = list_draw;
	this.list_add = list_add;
	this.list_delete = list_delete;

	/* debug */
//	document.write("constructor");

}


function list_init() {
	/* TBA, initialisation from file or server code here */
	/* Currently always creates an empty list */
	mainIndex = 0;

	/* debug */
//	document.write("init");

}

function list_add(name, description, status, responsible) {


    Data[mainIndex] = new list_item(mainIndex, name, description, status, responsible);

	mainIndex = mainIndex + 1;

	/* debug */
//	document.write("list add");

}

function list_delete(index) {
	for ( i = 0; i < mainIndex; i++) {
		if (i > index) {
			/* remove reference to todo_list[index] */
			Data[i - 1] = Data[i];
			Data[i - 1].taskIndex = i - 1;
		}
		mainIndex = mainIndex - 1;

	}

	/* debug */
	//document.write("list del");

}

function list_draw() {


	if (mainIndex == 0) {/* draw empty list */

		document.getElementById("listarea").innerHTML = "The list is empty"

	} else {


		for (i=0;i<mainIndex; i++)
		{

		document.getElementById("listarea").innerHTML = Data[i].taskName + "  " + Data[i].responsible + "   " + Data[i].status;			
			
//		document.getElementById("listarea").innerHTML = Data[i].list_item.taskName + Data[i].list_item.responsible + Data[i].list_item.status;			
		}


	}

	/* debug */
	//document.write("list draw");

}


