```javascript
// Incorrect usage of functional component
function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Missing return statement to cleanup the effect
    console.log('Component mounted');
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```