## React fundamentals workshop

Timings:

* 0930 - 1100 part 1
* 1125 - 1300 part 2
* 1400 - 1530 part 3
* 1555 - 1730 part 4

### As people are coming in

* join the tlk.io chat channel
* ensure Node v8 + npm or yarn installed
* editor plugins - VSCode: fine out the box - Atom: language-babel - Vim: vim-jsx - Sublime: ??
* react dev tools

### Part 1: React Introductions

* 1. First component - no JSX - functional component
* 2. JSX - why we use JSX over React.createElement - It's HTML like but gets converted to JS at build time
* 3. Properties - components can take properties to allow them to be configured
* 4. Spreading properties with the splat operator
* 5. PropTypes - how to use them, why they are good
* 6. Composition of components
* 7. Stateful components - class based components - counter component - basic event handlers - use bind for now, we'll come back to that
* 8. One way data flow - opposite of Angular! - parent can pass down data to children - children don't know who the parent is and can't pass data back to it
* 9. Callback properties - a parent can give its child a way to communicate to it explicitly via callback properties - the parent can manage state and just pass relevant parts of state down to the child
* 10. Rendering lists of data - use the JS map function - keys
* 11. this.props.children

### Small aside: Syntax, tools and state

* We won't be worrying about build tools in this course but I just want to explain how it's working.
* There's also some common Babel plugins we are about to use that make code much cleaner
* https://babeljs.io/docs/plugins/transform-class-properties/ - makes event handlers easier (show example where we remove the bind) - makes prototypes easier too (static)
* https://babeljs.io/docs/plugins/transform-object-rest-spread/ - this is a much nicer way to update objects with new keys that we'll use throughout the workshop
* Prettier

### Complex state, async and lifecycle hooks

* let's see how we can allow the user to modify state and how we React to that state - form with search that will search some API (TBC) - how to do async requests (fetch) + unfetch polyfill - dealing with input change - onSubmit event to fetch to update state
* lifecycle hooks: componentDidMount - how can we fetch some data immediately?
* lifecycle hooks: componentDidUpdate - how do we respond to props changing - parent passing prop down, parent prop changes, child does not react - use cDU to make the child react
* JSX conditional rendering with ternaries

### Component patterns for reusable components

* imperative vs declarative components
* compound components with React.Children.map
* Higher order components
* render props

### Context in React

(teach the new polyfill?)

### create-react-app

how to get up and running yourself
