// Define React component
// React.createClass is used to create a component class. This 
// houses the methods, properties, and state of the component. 
var HelloWorld = React.createClass({
  //propTypes: {
  //  name: React.PropTypes.string
  //},
  render: function() {
    // It is important to mention that there 
    // must be a single wrapping element.
    return (
        <div>
          Hello World! From Chida.
        </div>
      );
  }
});

//Now lets render the component.
React.render(
  <HelloWorld/>,  // We pass the value of the prop through an attribute
  document.getElementById('root')        // Element to attach component to
);