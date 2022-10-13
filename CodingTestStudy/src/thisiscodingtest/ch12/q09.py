s = "aabbaccc"
s2 = "ababc"

cnt = 0
answer = len(s)

for i in range(1, len(s)//2+1):
    data = ""
    prev = s[0:i]
    count = 1
    
    for j in range(i, len(s), i):
        
        if prev == s[j:j+i]:
            count += 1
        else:
            if count < 2:
                data += prev
            else:    
                data += str(count)+prev
            prev = s[j:j+i]
            count = 1
    if count < 2:
        data += prev
    else:
        data += str(cnt) + prev
    answer = min(answer, len(data))
    
print(answer)