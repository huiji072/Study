# CodingTestStudy

String에서 특정값 뺴기
String str = "";
String[] temp = str.split("");



오름차순
int[] array = "오름차순해야 할 수'
Integer[] temp = Arrays.stream(array).boxed().toArray(Integer[]::new);
Arrays.sort(temp, Comparator.reverseOrder());


파이썬 
result = sorted(result, key=lambda r:(-r[1]))

result 리스트에 1이 몇 개 있는지 찾을 때
result.count(1)

result에 첫번째만 출력하고 싶을때
print([i[0] for i in result])
