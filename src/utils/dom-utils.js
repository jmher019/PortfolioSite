var DomUtils = {
  create: function (htmlTag, className, id) {
    // create the html element, set the className if provided, and set the id if provided
    var element = document.createElement(htmlTag);
    element.className = className ? className : '';
    element.id = id ? id : '';

    return element;
  },

  containsClassName: function (element, className) {
    // classes in an html element are separated by spaces
    // Split the string by using space as the delimiter
    // Filter out any classes that are not equivalent to className
    // Check if the final array has a length greater than 0 (if true then the className is already present in the element)
    return element.className
      .split(' ')
      .filter(function (str) { str === className; })
      .length > 0;
  },

  addClassName: function (element, className) {
    // Check if the element already contains the class
    // If no, add it
    if (!DomUtils.containsClassName(element, className)) {
      // ` ${className}` === ' ' + className
      element.className = element.className ? (element.className + ` ${className}`) : className;
    }
  }
};