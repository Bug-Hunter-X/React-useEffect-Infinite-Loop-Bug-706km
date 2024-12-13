# React useEffect Infinite Loop Bug
This repository demonstrates a common bug in React applications involving the `useEffect` hook. The bug causes an infinite loop due to incorrect dependency management. 

## Bug Description
The `MyComponent` function uses the `useEffect` hook to log the current count and increment it after every render.  The problem is that `setCount` inside the effect causes a re-render, which in turn triggers the effect again, creating an infinite loop. The application will likely crash or become unresponsive. 

## Solution
The solution involves correctly managing the dependencies array of the `useEffect` hook. By removing the `count` dependency or using a different approach that avoids directly modifying state within the effect, we can prevent the infinite loop.

## How to reproduce the bug
1. Clone the repository.
2. Navigate to the root directory.
3. Run `npm install`.
4. Run `npm start`.
5. Observe the console output and the infinite loop error.

## How to fix the bug
Refer to the `bugSolution.js` file for the corrected code.