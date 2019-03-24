def unmarriedTax(income):
	if 9700>income>0:
		return income*.10
	elif 39475>income>9700:
		return income*.12
	elif 84200>income>39475:
		return income*.22
	elif 160725>income>84200:
		return income*.24
	elif 204100>income>160725:
		return income*.32
	elif 510300>income>204100:
		return income*.35
	else:
		return income*.37
print(unmarriedTax)

#TO DO: IMPLEMENT FUNCTION


# 2 Finish this function
# Calculates the taxes a married person owes for 2018
# Input Parameters: amount of income in USD income
# Return Value: amount taxes owed (USD)
def marriedTax(income):
	if 13850>income>0:
		return income*.10
	elif 52850>income>13850:
		return income*.12
	elif 84200>income>52850:
		return income*.22
	elif 160700>income>84200:
		return income*.24
	elif 204100>income>160700:
		return income*.32
	elif 510300>income>204100:
		return income*.35
	else:
		return income*.37
print(marriedTax)

#TO DO: IMPLMEMENT FUNCTION
# Calculates the taxes an individual owes for 2018
# Input Parameters: amount of income in USD income and marital status Boolean maritalStatus
# Return Value: amount taxes owed (USD)
def tax(income, maritalStatus):
	if(maritalStatus):
		return marriedTax(income)
	else:
		return unmarriedTax(income)
		
############################
#   DATA
############################
UrsalaIncome,UrsalaMarried = 160726, True
KaiserIncome, KaiserMarried = 501000, True
ShilahIncome, ShilahMarried = 20, True

############################
#   TESTS
############################
print("Ursala owes ", tax(UrsalaIncome, UrsalaMarried))
print("Kaiser owes ", tax(KaiserIncome, KaiserMarried))
print("Shilah owes ", tax(ShilahIncome, ShilahMarried))

print()
############################
#   DATA
############################
UrsalaIncome,UrsalaMarried = 204099, False
KaiserIncome, KaiserMarried = 510310, False
ShilahIncome, ShilahMarried = 9400, False

############################
#   TESTS
############################
print("Ursala owes ", tax(UrsalaIncome, UrsalaMarried))
print("Kaiser owes ", tax(KaiserIncome, KaiserMarried))
print("Shilah owes ", tax(ShilahIncome, ShilahMarried))
