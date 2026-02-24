1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

*getElementById=find the specific id and it work for unique element.
*getElementsByClassName=find the same classes of the code and it gives HTMLCollect array(not array like array)
*querySelector is the css selector ,it match the first element .
*querySelectorAll is the also CSS selector,it match the all element and gives a nodeList array.

2. How do you create and insert a new element into the DOM?
const li = document.createElement('li')
li.innerText = 'new item';
const ul = document.getElementById('ul')
ul.appendChild(li);

3. What is Event Bubbling? And how does it work?
Event bubbling is a mechanism of javascript and it works as a trigger that click the child element,it trigger up to parent element.

4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is adding event in parent element for that it handle the child element and add the new element of that event.

It is useful because cannot add the event for each element ans save the memory storage.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault()=it stop the default work of the browser.
Ex:if click the link,normally it will be open a new page but preventDefault stop to open the page.

stopPropagation()=stop the event bubbling where we set it.
Ex:when we add a event in child,normally it upwards the parent but when we set the stopPropagation then the event upwards the parent. 
