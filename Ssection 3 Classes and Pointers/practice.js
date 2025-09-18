function minSubArrayLen(target, arr) {
    let n = arr.length;
    let left = 0, sum = 0, minLen = Infinity;

    for (let right = 0; right < n; right++) {
        sum += arr[right];

        console.log(`Expand → right=${right}, added ${arr[right]}, sum=${sum}, window=[${arr.slice(left, right+1)}]`);

        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            console.log(`  ✅ sum=${sum} >= ${target}, shrink window: left=${left}, length=${right-left+1}`);
            sum -= arr[left];
            left++;
            console.log(`  After shrink → sum=${sum}, window=[${arr.slice(left, right+1)}]`);
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

// Example Run
let arr = [3, 5, 1, 4, 2];
let target = 11;
console.log("Result:", minSubArrayLen(target, arr));