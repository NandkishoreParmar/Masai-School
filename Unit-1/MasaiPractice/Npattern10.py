def create_n_pattern(rows, cols):
    for i in range(rows):
        for j in range(cols):
            if j == 0 or j == cols - 1 or i == j:
                print('*', end=" ")
            else:
                print(' ', end=' ')
        print()

# Specify the number of rows and columns
rows = 4
cols = 4

# Create and print the pattern
create_n_pattern(rows, cols)
