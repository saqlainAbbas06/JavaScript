const addTogether = function(...args) {
  const [first, second] = args;

  if (typeof first !== "number") {
    return undefined;
  }

  if (args.length === 2) {
    if (typeof second !== "number") {
      return undefined;
    }
    return first + second;
  }

  if (args.length === 1) {
    return function(nextArg) {
      if (typeof nextArg !== "number") {
        return undefined;
      }
      return first + nextArg;
    };
  }
};
