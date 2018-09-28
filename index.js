
function circle (x) {
  var elem = document.createElement ( 'div' );
  elem.style.width = x*20 + 'px';
  elem.style.height = x*20 + 'px';
  elem.style.borderRadius = '50%';
  elem.style.backgroundColor = 'yellow';

  return function () {
    document.body.appendChild ( elem )
  }
}

for ( var i = 1; i < 8; i++ ) {
  setTimeout ( (circle(i) ) , 1000*i)
}
