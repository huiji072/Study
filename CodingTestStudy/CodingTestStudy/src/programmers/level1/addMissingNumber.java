package programmers.level1;

public class addMissingNumber {

    public static void main(String[] args) {
        int[] numbers = {1,2,3,4,6,7,8,0};

        int sum = 0;
        int answer = 0;
        for(int i = 0 ; i < 10 ; i++) {
            sum += i;
        }

        for(int i = 0 ; i < numbers.length ; i++) {
            answer += numbers[i];
        }


        sum -= answer;

        System.out.println(sum);

    }

}
