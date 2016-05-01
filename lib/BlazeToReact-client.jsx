import React from 'react';
import Blaze from 'meteor/blaze';
import Template from 'meteor/blaze-html-templates';

export default function BlazeToReact(name, options) {
  if (!options) {
    options = {};
  }

  if (!options.container) {
    options.container = <span />;
  }

  return React.createClass({
    shouldComponentUpdate() {
      // Blaze has the full control once started
      return false;
    },

    componentWillUnmount() {
      Blaze.remove(this.blazeView);
    },

    componentWillReceiveProps(props) {
      this.blazeView.dataVar.set(props);
    },

    render() {
      return React.cloneElement(options.container, {
        ref: function(el) {
          if (el && !this.blazeView) {
            this.blazeView = Blaze.renderWithData(Template[name], this.props, el);
          }
        }.bind(this)
      });
    }
  });
};
