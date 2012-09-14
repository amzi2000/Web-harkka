var last_index_selected = -1;
var last_item;
var toDoKokoelma;


function startDisplayRefresh(){
	
	var x;
	
	x = document.getElementById("selectable_list").getElementsByTagName('tr');
	while (x.length > 0)
		{
		document.getElementById("selectable_list").removeChild(x[0]);
		}

	var node=document.createElement("TR");

	$(node).attr(
		"class","item_header_row ui-state-default ui-widget-content ui-selectee"
		);

//	$(node).innerHTML("<th>Title</th><th>Responsible</th><th>Due date</th><th>Priority</th>");
	var nodeX=document.createElement("TH");
	var textnode=document.createTextNode("Title");
	
	nodeX.style.width = 600;	
	nodeX.appendChild(textnode);
	node.appendChild(nodeX);
	
	nodeX=document.createElement("TH");
	nodeX.style.width = 300;	
	textnode=document.createTextNode("Responsible");
	nodeX.appendChild(textnode);
	node.appendChild(nodeX);

	nodeX=document.createElement("TH");
	nodeX.style.width = 100;	
	textnode=document.createTextNode("Due date");
	nodeX.appendChild(textnode);
	node.appendChild(nodeX);

	nodeX=document.createElement("TH");
	nodeX.style.width = 100;	
	textnode=document.createTextNode("Priority");
	nodeX.appendChild(textnode);
	node.appendChild(nodeX);


	document.getElementById("selectable_list").appendChild(node);
		

	for(x = 0; x <=  toDoKokoelma.lastItem();  x++){
		var node=document.createElement("TR");
	
		$(node).attr(
			"class","my_item ui-state-default ui-widget-content ui-selectee"
			);
	
		var nodeX=document.createElement("TD");
		var textnode=document.createTextNode("Title");
		
		nodeX.style.width = 600;	
		nodeX.appendChild(textnode);
		node.appendChild(nodeX);
		
		nodeX=document.createElement("TD");
		nodeX.style.width = 300;	
		textnode=document.createTextNode("Responsible");
		nodeX.appendChild(textnode);
		node.appendChild(nodeX);
	
		nodeX=document.createElement("TD");
		nodeX.style.width = 100;	
		textnode=document.createTextNode("Due date");
		nodeX.appendChild(textnode);
		node.appendChild(nodeX);
	
		nodeX=document.createElement("TD");
		nodeX.style.width = 100;	
		textnode=document.createTextNode("Priority");
		nodeX.appendChild(textnode);
		node.appendChild(nodeX);
	
	
		document.getElementById("selectable_list").appendChild(node);
	}
}


function addNewTestTask() {
	
	var toDo = new MyToDo("title for default to do task", "rami", "01-01-2013", "1");
	
	toDoKokoelma.addToDo(toDo);

//	startDisplayRefresh() ;
	
}
	
function deleteTestTask() {
	
	if (last_index_selected >= 0){
//		toDoKokoelma.deleteToDo(last_index_selected);
		list_delete(last_index_selected);
//		startDisplayRefresh() ;		
		list_draw();
	}
	last_index_selected = -1;
}



$(document).ready(function(){


$(function() {

		$( "#selectable_list" ).selectable({ 
			start: function(event, ui) {
		        $(event.target).children('.ui-selected').removeClass('ui-selected'); // disable multiselection
			},
		    selecting: function (event, ui) {
//		        $(event.target).children('.item_header_row').removeClass('ui-selecting'); // disable header row selection
		        $(event.target).children('.ui-selecting').not(':first').removeClass('ui-selecting'); // disable multiselection by dragging mouse
			},
			stop: function(event, ui) {
//		        $(event.target).children('.item_header_row').removeClass('ui-selected'); // disable header row selection
				last_index_selected = $(event.target).children('.ui-selected').index();
			}
		});
	});

/*
	
	$(function() {
	    var delay = $( "#selector_list" ).sortable( "option", "delay" );
	    var delay = $( "#selector_list" ).sortable( "option", "distance" );

	    //setter
	    $( "#selector_list" ).sortable( {delay: 300 });
	    $( "#selector_list" ).sortable( {distance: 30 });

		$( "ol.droptrue" ).sortable({
			connectWith: "ol"
		});

		$( "ol.dropfalse" ).sortable({
			connectWith: "ol",
			dropOnEmpty: false
		});
		$( "#selector_list" ).disableSelection();
	});
*/

//	toDoKokoelma = new MyToDoCollection();

//	startDisplayRefresh() ;

	list_draw();
				

//Enf of file
})
