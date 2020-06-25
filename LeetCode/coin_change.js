// 322. Coin Change
// Medium

// Share
// You are given coins of different denominations and a total amount of money amount.
// Write a function to compute the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:

// Input: coins = [1, 2, 5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Note:
// You may assume that you have an infinite number of each kind of coin.

// Bottom-up w/ dp
// find the minimum amt of coins for each subproblem starting from 0 up to amount

const coinChange = (coins, amount) => {
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0; // Number of coints to make 0 change is 0

  for (let i = 1; i <= amount; i++) {
    // loop from 1 up to and including amount b/c that's what i'm solving for
    for (let j = 0; j < coins.length; j++) {
      // go through every coin
      if (i <= coins[j]) {
        // if the coin can be taken from the current amount
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]); // minimum number of coins is the min number of coins from previous problem + 1 (the 1 is the coin i'm currently taking)
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};
