def circuit(A, B, C):
    def Z(a, b, c):
        if A==True and B==True:
            return True
        elif C==True:
            return True 
        else:
            return False
    z=Z(A, B, C)
    return not z or not C
   
print(circuit)

print(0,0,0,circuit(0,0,0))
print(0,0,1,circuit(0,0,1))
print(0,1,0,circuit(0,1,0))
print(0,1,1,circuit(0,1,1))
print(1,0,0,circuit(1,0,0))
print(1,0,1,circuit(1,0,1))
print(1,1,0,circuit(1,1,0))
print(1,1,1,circuit(1,1,1))
