

s = list(map(int, input()))
s2 = s

zeroToOne = 0
oneToZero = 0

answer_s = [s[0]]
answer_s2 = [s2[0]]
for i in range(1, len(s)):
    if answer_s[len(answer_s)-1] == s[i]:
        continue
    answer_s.append(s[i])

    if answer_s2[len(answer_s2)-1] == s2[i]:
        continue
    answer_s2.append(s2[i])

for i in range(len(answer_s)):
    if answer_s[i] == 0:
        answer_s[i] = 1
        oneToZero += 1
    elif answer_s2[i] == 1:
        answer_s2[i] = 0
        zeroToOne += 1

print(min(oneToZero, zeroToOne))