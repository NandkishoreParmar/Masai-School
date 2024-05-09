def check_win(matrix):
    # Check rows
    for row in matrix:
        # If all cells in a row are 'o', return True (o wins)
        if all(cell == 'o' for cell in row):
            return True
    # Check columns
    for col in range(3):
        # If all cells in a column are 'o', return True (o wins)
        if all(matrix[row][col] == 'o' for row in range(3)):
            return True
    # Check diagonals
    if all(matrix[i][i] == 'o' for i in range(3)) or all(matrix[i][2 - i] == 'o' for i in range(3)):
        # If either diagonal has all 'o's, return True (o wins)
        return True
    # If no winning condition is met, return False (o does not win)
    return False

# Your matrix
matrix = [
    ['x', 'o', 'x'],
    ['o', 'x', 'x'],
    ['o', 'o', 'o']
]

# Check if 'o' wins in the matrix
if check_win(matrix):
    print("o")
else:
    print("Tie")
