// Function that throws an error, indicating that it never successfully returns
function throwError(message: string): never {
  throw new Error(message);
}

// Function that runs an infinite loop, never reaching its end
function infiniteLoop(): never {
  while (true) {
  }
}

// Usage of the never type in a type narrowing scenario
// Ensures that the function handles all possible cases in a switch statement
function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}

// Example usage of the above functions
// The following lines are not meant to be executed as they will cause runtime errors
// throwError('This will always throw an error');
// infiniteLoop();
// assertNever(); // This will fail at compile time since we're not passing a value of type never
