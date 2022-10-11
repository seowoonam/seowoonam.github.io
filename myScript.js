window.onload=changeFilterStatus(1);
window.onload=changeFilterStatus(2);
window.onload=changeFilterStatus(3);

//Make the DIV element draggagle:
var draggableElements = document.getElementsByClassName("box");

for(var i = 0; i < draggableElements.length; i++){
    dragElement(draggableElements[i]);
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;
  

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }



function toggleFilter(type) {
	if (type === 1) {
      var cardtype = "workcard";
    }
    else if (type === 2) {
      var cardtype = "experimentcard";
    }
    else if (type === 3) {
      var cardtype = "writingcard";
    }
    var filteredElements = document.getElementsByClassName(cardtype);
  	for (var i = 0; i < filteredElements.length; i++) {
      var x = filteredElements[i];
      if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
  	}
  }



function changeFilterStatus(type) {
  if (type === 1) {
  	var filterButton = document.getElementById('workfilter'); 
    if (filterButton.style.backgroundColor === "rgb(81, 70, 67)") {
      filterButton.style.backgroundColor = "#B9B7B7";
      filterButton.innerHTML = "WORK&nbsp;&nbsp;&#43;";
    }
    else {
        filterButton.style.backgroundColor = "#514643";
        filterButton.innerHTML = "WORK&nbsp;&nbsp;&#8722; ";
      }
  }
  if (type === 2) {
    var filterButton = document.getElementById('experimentfilter'); 
    if (filterButton.style.backgroundColor === "rgb(81, 70, 67)") {
      filterButton.style.backgroundColor = "#B9B7B7";
      filterButton.innerHTML = "EXPERIMENT&nbsp;&nbsp;&#43;";
    }
    else {
        filterButton.style.backgroundColor = "#514643";
        filterButton.innerHTML = "EXPERIMENT&nbsp;&nbsp;&#8722; ";
      }
  }
  if (type === 3) {
    var filterButton = document.getElementById('writingfilter');
    if (filterButton.style.backgroundColor === "rgb(81, 70, 67)") {
      filterButton.style.backgroundColor = "#B9B7B7";
      filterButton.innerHTML = "WRITING&nbsp;&nbsp;&#43;";
    }
    else {
        filterButton.style.backgroundColor = "#514643";
        filterButton.innerHTML = "WRITING&nbsp;&nbsp;&#8722; ";
      }
  }
  
}

