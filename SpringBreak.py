#Loop over list explicitly
#INPUT list of [[miles, mph-driven],...]
# #RETURN (total miles, total time)
def totalTD1(xlst):
    #TO DO: IMPLEMENT BODY OF LOOP
    total_miles = 0
    total_time = 0
    for i in xlst:
        total_miles+=i[0]   
        total_time+=i[0]/i[1]
        print(i)
    
    return(total_miles, total_time)

#Loop over range and use index into list
#INPUT list of [[miles, mph-driven],...]
# #RETURN (total miles, total time)
def totalTD2(xlst):
    total_miles = 0
    total_time = 0
    for i in range(0,len(xlst)):
    #TO DO: IMPLEMENT BODY OF LOOP
        total_miles+=xlst[i][0]
        total_time+=xlst[i][0]/xlst[i][1]
    return (total_miles, total_time)

ds = [[100,55],[200,70],[421,55],[156,45],[156,55]]

print("Total miles to Galvaston is {0} taking {1:.2f} hrs.".format(*totalTD1(ds)))

#Assignment №4 Loops Page 3

print("Total miles to Galvaston is {0} taking {1:.2f} hrs.".format(*totalTD2(ds)))
##########
#
# DATA
# [[miles, mph],...]
ds = [[100,55],[200,70],[421,55],[156,45],[156,55]]
#########
