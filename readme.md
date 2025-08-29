1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans => getElementById: Selects a single element by its ID.
  getElementsByClassName: Selects all elements with a specific class.
  querySelector: Selects the first element that matches any CSS selector.
  querySelectorAll: Selects all elements that match a CSS selector.

2.How do you create and insert a new element into the DOM?
Ans => Use document.createElement() to make an element, set its content or attributes, then use appendChild() o add it to the DOM.

3.What is Event Bubbling and how does it work?
Ans => When an event happens on an element, it first triggers on that element and then bubbles up to its parent elements.

4.What is Event Delegation in JavaScript? Why is it useful?
Ans => Attach a single event listener to a parent element to handle events on its child elements. Useful for dynamic elements and reducing multiple listeners.

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans => preventDefault(): Stops the default browser action (like form submission or link navigation).
      stopPropagation(): Stops the event from bubbling up to parent elements.