function changeColor(x) {
  document.getElementsByTagName("a")[0,1,2,3,4].setAttribute("class","blue-steel")
}

function correctColor(x) {
  document.getElementsByTagName("a")[0,1,2,3,4].removeAttribute("class","blue-steel")  
}

// Couldn't figure out how to apply the functions to all nav elements.  Right now, it only applies to the lask nav element, Blog.