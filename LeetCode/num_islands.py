# 200. Number of Islands
# Medium

# 3610

# 133

# Favorite

# Share
# Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

# Example 1:

# Input:
# 11110
# 11010
# 11000
# 00000

# Output: 1
# Example 2:

# Input:
# 11000
# 11000
# 00100
# 00011

# Output: 3


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:

        if not grid:
            return 0

        islands = [[False for _ in range(len(grid[0]))]
                   for _ in range(len(grid))]
        counter = 0

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if not islands[i][j] and grid[i][j] == '1':
                    self.numIH(grid, i, j, islands)
                    counter += 1

        return counter

    def numIH(self, grid, i, j, islands):

        if i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0]) or grid[i][j] != '1' or islands[i][j]:
            return

        # set the spot as seen
        islands[i][j] = True

        # the spot is an island, check all around
        self.numIH(grid, i+1, j, islands)
        self.numIH(grid, i-1, j, islands)
        self.numIH(grid, i, j+1, islands)
        self.numIH(grid, i, j-1, islands)
