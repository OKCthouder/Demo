/**
 * Created by Simple_Y on 2017/4/25.
 */
function showPic(whichpic) {
    if(!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);

    if(document.getElementById("description")){
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if(description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

function prepareGallery() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;

    var gallery = document.getElementById("imagegallery");
    var links = document.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
        links[i].onclick = function () {
            return showPic(this) ? false : true;
        }
      //  links[i].onkeypress = links[i].onclick;
    }
}

function addLoadEvent(func) {
    var oldload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function () {
            oldload();
            func();
        }
    }
}


function insertAfter(newElement, targetElemnt) {
    var parent = targetElemnt.parentNode;
    if(parent.lastChild == targetElemnt){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement, targetElemnt.nextSibling);
    }
}

function preparePlaceholder() {
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.gif");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);