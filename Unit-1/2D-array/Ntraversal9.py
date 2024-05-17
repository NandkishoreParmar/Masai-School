def N_traversal(N,matrix):
    # if N == 1:
    #     for i in range(N-1,-1,-1):
    #         print(matrix[i][0], end = " ")
    # else:
    #     for i in range(N-1,-1,-1):
    #         print(matrix[i][0], end = " ")
    #     for i in range(1,N-1):
    #         print(matrix[i][N-1-i], end = " ")
    
    #     for i in range(N-1,-1,-1):
    #         print(matrix[i][N-1], end = " ")
    # print()
    if N == 1:
        for i in range(N-1,-1,-1):
            print(matrix[i][0], end = " ")
    else:
        for i in range(N-1,-1,-1):
            print(matrix[i][0], end = " ")
        for j in range(1,N-1):
            print(matrix[j][j], end = " ")
        
        for k in range(N-1,-1,-1):
            print(matrix[k][N-1], end = " ")
    print()
        
  
N = 3

matrix = [
          [1,2,3],
          [4,5,6],
          [7,8,9]
          ]
N_traversal(N,matrix)
