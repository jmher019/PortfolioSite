var MenuItem = function (navItem, label) {
  this.navItem = navItem;

  this.initialize = function () {
    this.menuItemElement = DomUtils.create('div', this.navItem.getNavItemElement());
    this.menuItemElement.innerHTML = `<label>${label}</label>`;
  };

  this.initialize();
};