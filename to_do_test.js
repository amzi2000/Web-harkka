/* RVS test functions and class for ToDo */ 


function MyToDo (title, resp, due, prio){

	this.title = title;
	this.responsible = resp;
	this.dueDate = due;
	this.priority = prio;
	
}

function MyToDoCollection (){

	this.todo = new Array();
	this.last = -1;


	if(typeof(Storage)!=="undefined")
	  {
	  if (sessionStorage.toDoLast)
	    {
// Retrieve the object from storage
		this.todo = JSON.parse(sessionStorage.getItem('toDoCollection'));
		this.last = Number(sessionStorage.toDoLast);
	    }
	  }
	else
	  {
	  //"Sorry, your browser does not support web storage...";
	  }
  
	this.addToDo = function (toDo) {
		// returns the index of inserted message

		
		this.todo[++this.last] = toDo;

	if(typeof(Storage)!=="undefined") {
    	// Put the object into storage
		sessionStorage.setItem('toDoCollection', JSON.stringify(this.todo));
		sessionStorage.toDoLast = this.last;
		}
	else {
//"Sorry, your browser does not support web storage...";
		}
  
		return this.last;
	}
	
	this.deleteToDo = function(index) {
				
		if (index >= 0 && this.last >= 0) {
			for (var x = index; x < this.last; x++ ){
				this.todo[index] = this.todo[index + 1];
			};
		this.last--;

		if(typeof(Storage)!=="undefined") {
			if (sessionStorage.toDoLast)	
				{
		    	// Put the object into storage
				sessionStorage.setItem('toDoCollection', JSON.stringify(this.todo));
				sessionStorage.toDoLast = this.last;
				}
			}
		else {
//"Sorry, your browser does not support web storage...";
			}
	  

		};
	}

	this.displayToDo = function(index) {
		// returns message as a text!!!
		// if index out of bounds t´returns empty string
		
		var result = "";
		
		if (index >= 0 && index <= this.last) {
			result = this.todo[index].title + " | " + this.todo[index].responsible  + " | " + this.todo[index].dueDate  + " | " + this.todo[index].priority;
		};
		
		return result;
	}
	
	this.lastItem = function() {
		return this.last;
	}

}
