const largestRectangleArea = function(heights) {
    let solution = 0, i = 0;
    heights.push(0);
    
    const ourArray = [], n = heights.length;
    
    while (i < n) {
        if (!ourArray.length || heights[i] > heights[ourArray.at(-1)])
            ourArray.push(i++);
        else {
            const idx = ourArray.pop();
            solution = Math.max(solution, heights[idx] * (ourArray.length ? i - ourArray.at(-1) - 1 : i));
        }
    }
    
    return solution;
}