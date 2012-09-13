var last_index_selected = -1;
var last_item;
var toDoKokoelma;


function startDisplayRefresh(){
	
	var x;
	
	x = document.getElementById("selectable_list").getElementsByTagName('li');
	while (x.length > 0)
		{
		document.getElementById("selectable_list").removeChild(x[0]);
		}

	for(x = 0; x <=  toDoKokoelma.lastItem();  x++){
		var node=document.createElement("LI");
		var itemName = toDoKokoelma.displayToDo(x);
		var textnode=document.createTextNode(itemName);
		node.appendChild(textnode);
	
		$(node).attr(
			"class","my_item ui-state-default ui-widget-content ui-selectee"
		);
		
		document.getElementById("selectable_list").appendChild(node);
		
	}
}


function addNewTestTask() {
	
	var toDo = new MyToDo("title for default to do task", "rami", "01-01-2013", "1");
	
	toDoKokoelma.addToDo(toDo);

	startDisplayRefresh() ;
	
}
	
function deleteTestTask() {
	
	if (last_index_selected >= 0){
		toDoKokoelma.deleteToDo(last_index_selected);
	
		startDisplayRefresh() ;		
	}
	
}
	


$(document).ready(function(){


$(function() {

		$( "#selectable_list" ).selectable({
			start: function(event, ui) {
		        $(event.target).children('.ui-selected').removeClass('ui-selected'); // disable multiselection
//				last_index_selected = $(this).index();
			},
		    selecting: function (event, ui) {
		        $(event.target).children('.ui-selecting').not(':first').removeClass('ui-selecting'); // disable multiselection by dragging mouse
			},
			stop: function(event, ui) {
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

	toDoKokoelma = new MyToDoCollection();

	startDisplayRefresh() ;

				

//Enf of file
})
