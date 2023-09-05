// Компонент 1
function Component1(props) {
  return (
    <div>
      <h1>{props.text}</h1>
      <Component2 text={props.text} />
    </div>
  );
}

// Компонент 2
function Component2(props) {
  return (
    <div>
      <h2>{props.text}</h2>
      <Component3 text={props.text} />
    </div>
  );
}

// Компонент 3
function Component3(props) {
  return (
    <div>
      <h3>{props.text}</h3>
      <Component4 text={props.text} />
    </div>
  );
}

// Компонент 4
function Component4(props) {
  return (
    <div>
      <h4>{props.text}</h4>
      <Component5 text={props.text} />
    </div>
  );
}

// Компонент 5
function Component5(props) {
  return (
    <div>
      <h5>{props.text}</h5>
    </div>
  );
}

// Использование компонента 1
function App() {
  return <Component1 text="Привет, мир!" />;
}

export default App;