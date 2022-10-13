s = "aabbaccc"

answer = len(s)

for i in range(1, len(s)//2+1):
    prev = s[0:i]
    data = ""
    cnt = 1
    
    for j in range(i, len(s), i):
        if prev == s[j:j+i]:
            cnt += 1
        else:
            if cnt < 2:
                data += prev
            else:
                data += str(cnt) + prev
            prev = s[j:j+i]
            cnt = 1
    if cnt < 2:
        data += prev
    else:
        data += str(cnt) + prev
    
    answer = min(answer, len(data))
print(answer)