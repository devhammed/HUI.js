/* HUI.js Javascript UI Library
  * Author: Oyedele Hammed Horlah
  * Release Date: November 20th, 2017
*/

(function () {
this.HUI = {
Create: function (props, text, elem) {
var root = document.createElement(elem || 'section');
if (text) root.innerHTML += text;
if (props) {
for (var prop in props) {
if (!props.hasOwnProperty(prop)) continue;
root.setAttribute(prop, props[prop]);
 }
}
var methods = {
Show: function () {
return root;
},
Child: function (elem, text, props) {
var node = document.createElement(elem);
if (text) node.innerHTML += text;
if (props) {
for (var prop in props) {
if (!props.hasOwnProperty(prop)) continue;
node.setAttribute(prop, props[prop]);
           }
        }
root.appendChild(node);
     },
Merge: function (layout) {
root.appendChild(layout.Show());
    }
 };
return methods;
},
Render: function (layout, view) {
document.getElementById(view).appendChild(layout.Show());
   }
 };
})();