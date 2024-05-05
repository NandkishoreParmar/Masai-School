def create_m_pattern(rows, cols):
    for i in range(rows):
        for j in range(cols):
            if j == 0 or j == cols - 1 or (i == j and i <= rows // 2) or (i + j == rows - 1 and i <= rows // 2):
                print('M', end=' ')
            else:
                print(' ', end=' ')
        print()

# Specify the number of rows and columns
rows = 5
cols = 5

# Create and print the pattern
create_m_pattern(rows, cols)
