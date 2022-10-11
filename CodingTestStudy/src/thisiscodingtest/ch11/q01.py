n = 5
data = [2, 3, 1, 2, 2]

# 낮은 공포도부터 계산해야 최대의 인원이 모험을 갈 수 있음
data = sorted(data)

cnt = 0
result = 0

# data를 순서대로 출력
for i in data:
    cnt += 1
    if cnt >= i:
        result += 1
        cnt = 0
        
print(result)


# cnt에 사람이 한명
#사람이 한명있을 때 공포도가 1이면 그룹 하나 추가
#cnt 초기화

#cnt에 사람이 한명
#사람이 한명있을 때 공포도가 2이면 넘어감
#cnt에 사람 한명 더 추가
#사람이 두명있을 때 공포도가 2이면 그룹 하나 추가