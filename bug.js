```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Component rendered with count:', count);
    // This will cause an infinite loop because setCount triggers a re-render, which triggers this effect again.
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```