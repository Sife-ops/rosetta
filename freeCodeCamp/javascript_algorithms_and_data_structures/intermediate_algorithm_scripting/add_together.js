function addTogether() {
  const [first, second] = Object.values(arguments);

  // Check first argument
  if (typeof first !== "number") {
    return undefined;
  }

  // Function to add second argument
  const addSecond = (second) => typeof second === "number" ? first + second : undefined;

  // Check second argument
  if (second !== undefined) {
    return addSecond(second);
  } else {
    return addSecond
  }

}

console.log(
addTogether(2,3)
);

