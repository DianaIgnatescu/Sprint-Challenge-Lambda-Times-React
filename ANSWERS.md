- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

A: Proptypes is a package that allows developers to validate data at the time the component is being built by type checking the data that's being passed in as props. PropTypes is a great too for React developers because it helps to catch bugs and makes it easier and cleared for other developers to know the type of data that is being passed in.

- [ ] Describe a life-cycle event in React?

Components have several life-cycle methods that can be used to run code at specific times in the process. The most commonly used events are mounting, updating and unmounting. Mounting is the phase when an instance of the component is being created and inserted into the DOM. Updating is a life-cycle event triggered by changes to props or state. Unmounting signals the removal of a component from the DOM. 

- [ ] Explain the details of a Higher Order Component?

A Higher Order Component(HOC) is an advanced React technique in which the component logic can be reused. At its core, a HOC is a function that takes in a component as an argument and returns a new component. A HOC can be used to act as a container for another component, and in turn, receives all the props of the original container, along with a new prop, which is used to render the new output. 

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

Three different ways of styling components in React are Reactstrap, LESS and the Styled Components library. Reactstrap comes with pre-built components that are already styled using it's parent library, Bootstrap. The benefits of Reactstrap are that it's ready to use and that components can be easily implemented throughout the project. Preprocessors such as LESS are also often favored for styling components because of their ability to extend dynamic behaviour through variables, mixins, operations and functions. Styles Components is a library that helps developers build reussable styled components in javascript. An advantage of it is dynamic styling by adapting the styling of components based on its props or a global theme, without having to manage classes.