food_times = [0, 0, 0]
k = 1

result = 0

for i in range(len(food_times)):
    if food_times[i] == 0:
        continue
    else:
        food_times[i] = food_times[i]-1
        result = i+2
    k -= 1
    if k == 0:          
        break  

    if sum(food_times) <= k:
        return -1
    elif result > len(food_times):
        return 1
    else:
        return result