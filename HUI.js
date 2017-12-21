/* HUI.js Javascript UI Library
  * Author: Oyedele Hammed Horlah
  * Release Date: November 20th, 2017
*/

(function() {
  this.HUI = {
    Create: function( props, text, elem ) {
      var root = document.createElement( elem || 'section' );
      if ( text ) {
        root.innerHTML += text;
      }
      if ( props ) {
        for ( var prop in props ) {
          if ( !props.hasOwnProperty( prop ) ) continue;
          root.setAttribute( prop, props[prop] );
        }
      }
      var fns = {
        Node: function() {
          return root;
        },
        Child: function( elem, text, props ) {
          var node = document.createElement( elem );
          if ( text ) {
            node.innerHTML += text;
          }
          if ( props ) {
            for ( var prop in props ) {
              if ( !props.hasOwnProperty( prop ) ) continue;
              node.setAttribute( prop, props[prop] );
            }
          }
          root.appendChild( node );
          return this;
        },
        Join: function( lay ) {
          if ( !lay instanceof( Array ) ) lay = [lay];
          lay.forEach(function( elem ) {
            root.appendChild( elem.Node() );
          });
          return this;
        }
      };
    return fns;
    },
    Render: function( elem, view ) {
      document.getElementById( view ).appendChild( elem.Node() );
    }
  };
})();