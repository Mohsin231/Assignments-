# Input Parameter: a decimal value n
# Return Value: a string containing the Roman numeral representation of n
def roman(n):
#TODO: implement this function
    return(firstnumber(n//10)) + (secondnumber(n%10))
def firstnumber(n):
    if n==10:
        return("C")
    elif n ==9:
        return("XC")
    elif n==8:
        return("LXXX")
    elif n==7:
        return("LXX")
    elif n==6:
        return("LX")
    elif n==5:
        return("L")
    elif n==4:
        return("XL")
    elif n==3:
        return("XXX")
    elif n==2:
        return("XX")
    elif n==1:
        return("X")
    else:
        return ""
def secondnumber(n):
    if n==10:
        return("I")
    elif n ==9:
        return("IX")
    elif n==8:
        return("VIII")
    elif n==7:
        return("VII")
    elif n==6:
        return("VI")
    elif n==5:
        return("V")
    elif n==4:
        return("IV")
    elif n==3:
        return("III")
    elif n==2:
        return("II")
    elif n==1:
        return("I")
    else:
        return ""
for i in range(1,100):
    if i % 5 == 0:
        print()
    print(i, roman(i), ", ", end="")
