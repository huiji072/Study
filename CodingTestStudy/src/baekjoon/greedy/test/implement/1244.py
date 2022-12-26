from audioop import lin2alaw


n = int(input())

switch = list(map(int, input().split()))

# 학생수
s = int(input())

student = []
for i in range(s):
    student.append(list(map(int, input().split())))
    

for stu in student:
    cnt = 1
    for swtch in range(1, n+1):
        if stu[0] == 1:
            if stu[1]*cnt == swtch and stu[1]*cnt <= n:
                if switch[swtch-1] == 0:
                    switch[swtch-1] = 1
                else:
                    switch[swtch-1] = 0
                    
                cnt += 1
        elif stu[0] == 2:
            if switch[stu[1] -1 - cnt] == switch[stu[1] -1 + cnt] and stu[1] -1 - cnt >= 0 and stu[1] -1 + cnt < n:
                print(swtch)
                if switch[stu[1] -1 - cnt] == 0:
                    switch[stu[1] -1 - cnt] = 1
                    switch[stu[1] -1 + cnt] = 1
                else:
                    switch[stu[1] -1 - cnt] = 0
                    switch[stu[1] -1 + cnt] = 0
                cnt += 1
                    

print(switch)
