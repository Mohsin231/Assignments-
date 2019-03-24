text_file=open("INFOcourses.txt","r")
info_contents=text_file.readlines()
#print(info_contents)
text_file.close()

courses={}
for lines in info_contents:
    code,course=lines.split(",")
    courses[code]=course.strip()
print(courses)

while True:
    coursecode=input("please enter a cousrse")
    if coursecode.lower()=="stop":
        break
    elif coursecode not in courses:
        print("the name of the course is not found")
    else:
        print("the name of that course is: ",courses[coursecode])



