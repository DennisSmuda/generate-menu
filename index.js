'use strict';
/**
 * generate-menu - simple JS class that takes a selector and outputs a typical
 * 								 menu structure to a target element
 *
 * 		selector | should be a css class
 * 		target   | should be an id
 */
var scrollto = require ('scroll-to-element');

function generateMenu(selector, targetid) {
  const selection = document.getElementsByClassName(selector);
  const headers = Array.prototype.slice.call(selection);
  const target  = document.getElementById(targetid);

  /**
  * Create DOM
  *
  * Appends an li>a>"Header Text" structure to
  * a target 'ul' element.
  * Additionally it sets up an EventListener that
  * scrolls to the clicked element within the page.
  */
  headers.forEach((header, i) => {
    // Generate li>a>"header-text" structure
    let li = document.createElement('li');
    let link = document.createElement('a');
    let text = document.createTextNode(header.innerHTML);

    // Set up link
    link.appendChild(text);
    link.href = "#";
    link.addEventListener('click', (e) => {
      scrollto(selection[i], {
          offset: 0,
          ease: 'in-out-expo',
          duration: 500
      });
    });

    li.appendChild(link);
    target.appendChild(li);
  });
}

module.exports = function(sel, tar) {
  return generateMenu(sel, tar);
};
