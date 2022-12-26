package baekjoon.greedy;

import java.util.Scanner;

public class SumOfNum {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        long n = sc.nextLong();

        long result = 0;
        long cnt = 0;

        while(result < n) {
            cnt++;
            result += cnt;
        }
        if(result == n){
            System.out.println(cnt);
        }else{
            System.out.println(cnt-1);
        }
    }

}
