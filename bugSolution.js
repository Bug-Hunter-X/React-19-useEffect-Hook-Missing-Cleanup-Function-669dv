```javascript
// Correct usage of functional component
function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    // Cleanup function
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```