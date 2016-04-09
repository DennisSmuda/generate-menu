/**
 * generate-menu - simple JS class that takes a selector and outputs a typical
 * 								 menu structure to a target element
 *
 * 		selector | should be a css class
 * 		target   | should be an id
 */
 import scrollto from 'scroll-to-element';


 class MenuGenerator {
   constructor(selector, target) {
     this.selection = document.getElementsByClassName(selector);
     this.headers = Array.prototype.slice.call(this.selection);
     this.target  = document.getElementById(target);

     this.create();
   }

   /**
    * Create Function
    *
    * Appends an li>a>"Header Text" structure to
    * a target 'ul' element.
    * Additionally it sets up an EventListener that
    * scrolls to the clicked element within the page.
    */
   create() {
     this.headers.forEach((header, i) => {
       // Generate li>a>"header-text" structure
       let li = document.createElement('li');
       let link = document.createElement('a');
       let text = document.createTextNode(header.innerHTML);

       // Set up link
       link.appendChild(text);
       link.href = "#";
       link.addEventListener('click', (e) => {
         scrollto(this.selection[i], {
             offset: 0,
             ease: 'in-out-expo',
             duration: 500
         });
       });

       li.appendChild(link);
       this.target.appendChild(li);
     });
   }
 }

 export default MenuGenerator;


let Menu = new MenuGenerator('headline', 'test-target');
