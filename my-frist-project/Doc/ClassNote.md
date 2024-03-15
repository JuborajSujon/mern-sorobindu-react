# JSX

- JavaScript XML
- HTML code inside JS code
- Use any js from {js expression} in JSX
- Style JSX with css
  > Rules of JSX
  - Must have only one root element
  - For multiline use ()
  - Any JS code inside JSX must be wrapped in {}
  - Avoid semicolon in JSX
  - For conditional avoid {} for statement

# Team Member React App

- Setup a JSON Server For Developers
- Install axios for response
- Create a data for developers and use it
- Design a team member template by bootstrap and boxicon
- Render all data in react apps

# React Components

- React component are reuseable blocks of JSX
- React component is a function that returns JSX
- React component is a class that extends React.Component

  - Functional Component - State less
  - Class Component - State full

- Functional Component

```javascript
function Student(props) {
  return (
    <div className="card">
      <h5 className="card-title">Asraful Hossain</h5>
      <p className="card-text">React</p>
    </div>
  );
}
```

- Class Component

```javaScript
class Student extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="card">
        <h5 className="card-title">Asraful Hossain</h5>
        <p className="card-text">React</p>
      </div>
    )
  }
}

```

- Props drilling for data flow
  For data pass to a component we need props drilling
  <code><Student props1 ={value1} props2 = {value2} /></code>

- Get props value in functional component

```javascript
function Student(props) {
  return (
    your JSX code here
  )
}
```

- Get props value in class component

```javascript
class Student extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      your JSX code here
    )
  }
}
```

- CSS styling - inline

```javascript
<h1 style={{ color: "red" }}>Hello</h1>

const heading = {
  color: "red",
  backgroundColor: "yellow"
}
<h1 style={heading}>Hello</h1>
```

- import css or sass file for styling

# React Events

- Just like HTML DOM events, React can perform actions based on user events
- React has the same events as HTML DOM like click, change, mouseover etc.
- Set a event to a elements with handler function <br>
  <code>
  <button onClick={ handleClick}>Click Me</button>
  </code>
- Set a event with argument to a elements with handler function <br>
  <code>
  <button onChange={(e) => handleClick(value)}> Click Me</button>
  </code>

# State Management

- A template dynamic data controlled by react a state
- State is system to pass one component to another
- We can manage state by useState hook
- We can also manage state by

  - useState
  - Context API
  - Redux
  - Reducers

- Declare a state by useState hook <br>
  <code>const [counter, setCounter] = useState('Default value')</code>

- Create a counter project with state management
- Create a alert management project with state management
- Create a data loading state from JSON Server API for data management

# useEffect hook

- For render effect control with effect
- Reload any api response of data change after a successful state change

> Run on every render

```
useEffect(() => {

})
```

> Run on first render

```
useEffect(() => {

}, [])
```

> Run on first render and also run when state value change

```
useEffect(() => {

}, [props])
```

# Form Data State

- Create a form with different fields
- Now create state for all inputs fields
- Now set value fields value and state update

```
const [formData, setFormData] = useState({})

<input type="text" value={formData.name}>
<input type="text" value={formData.age} onChange={handleNameChange}>
```

- Update input fields value

```
<input type="text" value={formData.age} onChange={(e)=>setFormData(e.target.value)}>
```

- Create a form validation project

# React Bootstrap

- Use Bootstrap in react nicely
- Fully functional Bootstrap in React
- Component elements use
- You must know the core bootstrap for professional use

> Install React Bootstrap with Bootstrap

# Now Load any Component to ..

# Create a complete Online Product ..

# React router params
