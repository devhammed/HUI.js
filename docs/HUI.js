/** HUI.js | JavaScript UI Layout Library
  * @author Oyedele Hammed Horlah
  * @version 2.0
  * @since January 1, 2017
  * @see http://www.oyedelehammed.ml/HUI.html
*/

function hui( tag, attrs ) {
  var children = [].slice.call( arguments, 2 ),
    d = document;
  var node = d.createElement( tag );
  if ( attrs ) {
    for ( var attr in attrs ) node.setAttribute( attr, attrs[attr] );
  }
  if ( children ) {
    children.forEach(function( child ) {
      node.appendChild(
        (typeof child == 'string') ? d.createTextNode( child ) : child
      );
    });
  }
  return node;
}
function huiRender( node, view ) {
  document.querySelector(view).appendChild( node );
}