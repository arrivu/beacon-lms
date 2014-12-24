(function() {
  define(['ember'], function(_arg) {
    var Component, FastSelectComponent, doc, get, set;

    Component = _arg.Component, get = _arg.get, set = _arg.set;
    doc = document;
    return FastSelectComponent = Component.extend({
      initialized: false,
      items: null,
      valuePath: 'value',
      labelPath: 'label',
      labelDefault: null,
      valueDefault: '',
      value: null,
      selected: null,
      tagName: 'select',
      didInsertElement: function() {
        var self;

        self = this;
        return this.$().on('change', function() {
          return set(self, 'value', this.value);
        });
      },
      valueDidChange: (function() {
        var items, selected, value;

        items = this.items;
        value = this.value;
        selected = null;
        if (value && items) {
          selected = items.findBy(this.valuePath, value);
        }
        return set(this, 'selected', selected);
      }).observes('value').on('init'),
      itemsWillChange: (function() {
        var items;

        items = this.items;
        if (items) {
          items.removeArrayObserver(this);
          return this.arrayWillChange(items, 0, get(items, 'length'), 0);
        }
      }).observesBefore('items').on('willDestroyElement'),
      itemsDidChange: (function() {
        var items;

        items = this.items;
        if (items) {
          items.addArrayObserver(this);
          return this.arrayDidChange(items, 0, 0, get(items, 'length'));
        }
      }).observes('items').on('didInsertElement'),
      arrayWillChange: function(items, start, removeCount, addCount) {
        var i, options, select, _results;

        select = get(this, 'element');
        options = select.childNodes;
        i = start + removeCount - 1;
        if (get(this, 'hasDefaultOption')) {
          start = start + 1;
          i = i + 1;
        }
        _results = [];
        while (i >= start) {
          select.removeChild(options[i]);
          _results.push(i--);
        }
        return _results;
      },
      updateSelection: (function() {
        var currentValue, select, selected, _ref;

        selected = get(this, 'selected');
        if (!selected) {
          return;
        }
        currentValue = get(selected, this.valuePath);
        select = this.$("[value=" + currentValue + "]");
        if (select != null) {
          if ((_ref = select[0]) != null) {
            _ref.selected = true;
          }
        }
        if (currentValue && currentValue !== this.value) {
          return set(this, 'value', currentValue);
        }
      }).observes('selected'),
      updateOptions: (function() {
        this.arrayWillChange(this.items, 0, get(this.items, 'length'), 0);
        return this.arrayDidChange(this.items, 0, 0, get(this.items, 'length'));
      }).observes('labelPath'),
      arrayDidChange: function(items, start, removeCount, addCount) {
        var hasDefault, i, ind, item, l, label, option, select, value;

        select = get(this, 'element');
        hasDefault = get(this, 'hasDefaultOption');
        if (hasDefault) {
          start = start + 1;
        }
        i = start;
        l = start + addCount;
        while (i < l) {
          ind = hasDefault ? i - 1 : i;
          item = items.objectAt(ind);
          value = get(item, this.valuePath);
          label = get(item, this.labelPath);
          option = doc.createElement("option");
          option.textContent = label;
          option.value = value;
          if (this.value === value) {
            option.selected = true;
            set(this, 'selected', item);
          }
          select.appendChild(option);
          i++;
        }
        return set(this, 'value', select.value);
      },
      insertDefaultOption: (function() {
        var option, select;

        if (!(this.labelDefault && !this.hasDefaultOption)) {
          return;
        }
        select = get(this, 'element');
        option = doc.createElement("option");
        option.textContent = this.labelDefault;
        option.value = this.valueDefault;
        select.appendChild(option);
        return set(this, 'hasDefaultOption', true);
      }).observes('items').on('didInsertElement')
    });
  });

}).call(this);
