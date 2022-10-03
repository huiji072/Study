package thisiscodingtest.greedy;

import java.util.Scanner;

public class Until1 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int k = sc.nextInt();

        int count = 0;

        while(n > 1) {
            if (n % k == 0){
                n /= k;
                count++;
            } else {
                n -= 1;
                count++;
            }
        }
        System.out.println(count);
    }

}
