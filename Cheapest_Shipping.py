def ground_shipping(weight):
  fee=20
  if weight<=2:
    price_per_pound=1.5
  elif weight<=6:
  	price_per_pound=3
  elif weight<=10:
  	price_per_pound=4
  else:
    price_per_pound=4.75
  
  return fee+(price_per_pound*weight)

def premium_shipping(weight):
  return 125

def drone_shipping(weight):
  if weight<=2:
    price=weight*4.5
  elif weight<=6:
    price=weight*9
  elif weight<=10:
    price=weight*12
  else:
    price=weight*14.25
  return price

def cheapest(weight):
  ground=ground_shipping(weight)
  premium=premium_shipping(weight)
  drone=drone_shipping(weight)
  if ground<drone and ground<premium:
    method="standard ground"
    cost=ground
  elif drone<ground and drone<premium:
    method="Drone"
    cost=drone
  else:
    method="Premium"
    cost=premium 
  
  print("The cheapest shipping method was {0} and the cost is {1}".format(method,cost))

      

print(ground_shipping(8.4))
print(drone_shipping(1.5))
print(cheapest(4.8))
print(cheapest(41.5))
