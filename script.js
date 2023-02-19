function minCostOfRopes(ropes) {
  // Sort the ropes in increasing order
  ropes.sort((a, b) => a - b);

  // Keep track of the total cost
  let totalCost = 0;

  // Repeat until there is only one rope left
  while (ropes.length > 1) {
    // Select the two smallest ropes and connect them
    const min1 = ropes.shift();
    const min2 = ropes.shift();
    const cost = min1 + min2;

    // Add the cost to the total cost
    totalCost += cost;

    // Insert the new rope into the sorted array
    // using binary search to maintain the order
    let left = 0;
    let right = ropes.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (ropes[mid] < cost) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    ropes.splice(left, 0, cost);
  }

  // Return the total cost
  return totalCost;
}
