package programmers.level1;

public class makeDecimal {


    public static void main(String[] args) {

        int[] nums = {1, 2, 3, 4};

        makeDecimal md = new makeDecimal();
        int sum = 0;
        int cnt = 0;

        for(int i = 0 ; i < nums.length-2 ; i++){
            for(int j = i+1 ; j < nums.length-1; j++) {
                for(int k = j+1 ; k < nums.length ; k++) {
                    sum = nums[i] + nums[j] + nums[k];

                    if(md.isPrime(sum) == true) {
                        cnt++;
                    }
                }
            }
        }
        System.out.println(cnt);
    }
    public boolean isPrime(int n) {
        for(int i = 2 ; i < n ; i++) {
            if(n % i == 0){
                return false;
            }
        }
        return true;
    }

}
