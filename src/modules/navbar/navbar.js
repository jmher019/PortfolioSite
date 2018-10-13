NavBar = function () {
  this.initialize = function () {
    // Get the root app div element by searching for it by id
    // Create the nav bar element as a div and make it a child of the root app div element
    var parent = document.getElementById('app');
    this.navBarElement = DomUtils.create('div', parent, 'nav-bar');

    this.initNavItemsContainer();
  };

  this.initNavItemsContainer = function () {
    // Create a container to hold our nav bar items
    this.navItemsContainer = DomUtils.create('div', this.navBarElement, 'nav-item-container');

    // Set width to 0
    this.navItemsContainerWidth = 0;
    this.updateNavItemContainer();

    this.navItems = [];
  };

  this.getNavBarElement = function () {
    return this.navBarElement;
  };

  this.getNavItemsContainer = function () {
    return this.navItemsContainer;
  }

  this.addNavItem = function (label, width) {
    // Create a nav item and add it to the list of nav items
    // note: { width: width } is equivalent to { width }
    var navItem = new NavItem(this, label, { width });
    this.navItems.push(navItem);

    this.navItemsContainerWidth += navItem.getWidth();
    this.updateNavItemContainer();

    return navItem;
  };

  this.updateNavItemContainer = function () {
    this.navItemsContainer.style.width = `${this.navItemsContainerWidth}px`;
  };

  this.initialize();
};