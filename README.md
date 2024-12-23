# React 19 useEffect Hook Missing Cleanup Function
This repository demonstrates a common error in React 19 applications: forgetting to include a cleanup function in the `useEffect` hook.  This can lead to memory leaks and unexpected behavior.

## Bug Description
The `bug.js` file contains a functional component with a `useEffect` hook. The effect logs a message to the console when the component mounts, but it's missing a return statement containing a cleanup function. This causes the cleanup logic to never run.

## Solution
The `bugSolution.js` demonstrates the corrected code with a cleanup function in `useEffect` to resolve the memory leak issue.  The cleanup function is essential for releasing resources that were allocated during the effect. 

## How to reproduce
1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the application.
5. Observe the console logs and behavior. 
