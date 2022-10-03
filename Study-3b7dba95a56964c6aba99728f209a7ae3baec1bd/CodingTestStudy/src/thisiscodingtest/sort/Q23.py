n = int(input())

student = []

for _ in range(n):
    data = input().split()
    student.append((data[0], int(data[1]), int(data[2]), int(data[3])))
    
student = sorted(student, key=lambda s:( -s[1], s[2], -s[3], s[0]))

for s in student:
    print(s[0])