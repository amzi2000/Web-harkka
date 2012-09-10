/**
 * @author Juha
 */

var i;

function todo_list() {

	var Data;

	var mainIndex = 0; 
	
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
	this.Data = undefined;
	this.mainIndex = 0;

	/* debug */
//	document.write("init");

}

function list_add(name, description, status, responsible) {
	this.Data[mainIndex] = new list_item(mainIndex, name, description, status, responsible);
	this.mainIndex = this.mainIndex + 1;

	/* debug */
	//document.write("list add");

}

function list_delete(index) {
	for ( i = 0; i < this.mainIndex; i++) {
		if (i > index) {
			/* remove reference to todo_list[index] */
			this.Data[i - 1] = this.Data[i];
			this.Data[i - 1].list_item.taskIndex = i - 1;
		}
		this.mainIndex = this.mainIndex - 1;

	}

	/* debug */
	//document.write("list del");

}

function list_draw() {

	if (this.Data == undefined) {/* draw empty list */

		document.getElementById("listarea").innerHTML = "The list is empty"

	} else {


		for (i=0;i<this.mainIndex; i++)
		{
		document.getElementById("listarea").innerHTML = this.Data[i].list_item.taskName + this.Data[i].list_item.responsible + this.Data[i].list_item.status;			
		}
		

	}

	/* debug */
	//document.write("list draw");

}

function list_item(index, taskName, taskDesc, status, responsible) {
	this.taskIndex = index;
	this.taskName = taskName;
	this.taskDescription = taskDesc;
	this.status = status;
	this.responsible = responsible;

	/* debug */
	//document.write("new item");

}

