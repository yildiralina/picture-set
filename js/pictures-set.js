document.querySelector('.grid').addEventListener('mouseover', function (e) {
  if (e.target.tagName === 'IMG') {
    var myElement = document.createElement('div');
    // myElement.id =
    myElement.className = 'preview';
    e.target.parentNode.appendChild(myElement);
    // You create the element, then you can change any properties, and then you append the element to an existing element in the DOM.
    var myImg = document.createElement('img');
    var imgLoc = e.target.src;
    myImg.src = imgLoc.substr(0, imgLoc.length - 7) + '.jpg';
    myElement.appendChild(myImg);
    e.target.addEventListener('mouseout', function handler(d) {
      var myNode = d.target.parentNode.querySelector('div.preview');
      myNode.parentNode.removeChild(myNode);
      e.target.removeEventListener('mouseout', handler, false);
    }, false);
  }
}, false);



// document.querySelector('.grid').addEventListener('contextmenu', function(e) {
//   e.preventDefault();
//   if (e.target.tagName === 'IMG') {
//     var myElement = document.createElement('div');
//     myElement.className = 'preview';
//     e.target.parentNode.appendChild(myElement);
//     var myImg = document.createElement('img');
//     var imgLoc = e.target.src;
//     myImg.src = imgLoc.substr(0, imgLoc.length - 7) + '.jpg';
//     myElement.style.left = e.offsetX + 15 + 'px';
//     myElement.style.top = e.offsetY + 15 + 'px';
//     myElement.appendChild(myImg);
//     e.target.addEventListener('mouseout', function handler(d) {
//       var myNode = d.target.parentNode.querySelector('div.preview');
//       myNode.parentNode.removeChild(myNode);
//       e.target.removeEventListener('mouseout', handler, false);
//     }, false);
//     e.target.addEventListener('mousemove', function(f) {
//       myElement.style.left = f.offsetX + 15 + 'px';
//       myElement.style.top = f.offsetY + 15 + 'px';
//     }, false);
//   }
// }, false);



document.querySelector('.grid').addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    var howmany = this.querySelectorAll('li').length;
    if (howmany > 1) {
      var removeTarget = e.target.parentNode; // parentNode - And we don't want to get rid of just the image. We want to get rid of what right on the other side of the image, which is our list items.
      removeTarget.parentNode.removeChild(removeTarget);
      // Now, remove child is going to want to reference the parent of the element that you want to remove.
      // So, we've got the list item right here, and by calling parent node we're asking for the unordered list.
      // And then we want to remove a child of. The unordered list. We can't just remove the list item, because remove child obviously removes a child element.
      // And since we want to get rid of the list item, we first have to get to its parent, and then ask to remove a child of that. And the child that we want is the remove target.
    } else {
      var photoTitle = e.target.alt;
      document.querySelector('#photography p').innerHTML = "<p>" + photoTitle + "</p>";
    }
  }
}, false);
// Remember if you put true it's going to be registered in the capturing phase, which means that it would recognize the click on the unordered list first.
// That on the list item and then on the image, if you put false here it means the event is going to bubble, so it's going to register the event first on the image.
// It doesn't really matter but false happens to be a little more compatible.