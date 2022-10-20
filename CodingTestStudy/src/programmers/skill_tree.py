skill = "BCD"
skill_trees = ["BACDE", "CBADF", "AECB", "BDA"]

def solution(skill, skill_trees):
    answer = 0

    for tree in skill_trees:
        data = []
        for t in tree:
            for s in skill:
                if t == s:
                    data.append(t)
        print(data)
        for i in range(0, len(data)):
            if skill[i] != data[i]:
                break
            answer += 1
                

    
    return answer
