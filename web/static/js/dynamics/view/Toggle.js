var DynamicTableToggleView = function(options, controller, parentView) {
  this.currentMode = DynamicTableToggleView.up;
  this.options = options;
  this.controller = controller;
  this.parentView = parentView;
  this.button = null;
  this.initialize();
  if(this.options.expanded) {
    this.expand();
  } else {
    this.collapse();
  }
};

DynamicTableToggleView.collapsed = 1;
DynamicTableToggleView.expanded = 2;

DynamicTableToggleView.prototype.initialize = function() {
  this.button = $("<div />").appendTo(
      this.paretnView.getElement());
  var me = this;
  this.button.click(function(event) {
    if (me.button.hasClass("dynamictable-expand")) {
      me.expand();
    } else {
      me.collapse();
    }
    return false;
  });
};

DynamicTableToggleView.prototype.collapse = function() {
  this.button.attr("title", "Expand").removeClass("dynamictable-collapse")
      .addClass("dynamictable-expand");
  this.currentMode = DynamicTableToggleView.collapsed;
  this.options.collapse.call(this.controller, this);
};

DynamicTableToggleView.prototype.expand = function() {
  this.button.attr("title", "Collapse").addClass("dynamictable-collapse")
      .removeClass("dynamictable-expand");
  this.currentMode = DynamicTableToggleView.expanded;
  this.options.expand.call(this.controller, this);
};