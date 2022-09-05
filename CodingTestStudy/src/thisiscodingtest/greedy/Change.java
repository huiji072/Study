package thisiscodingtest.greedy;

import java.util.Scanner;

public class Change {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] coin = {500, 100, 50, 10};
        int result = 0;

        for(int i = 0 ; i < coin.length ; i++) {
            result += n / coin[i];
            n %= coin[i];
        }
        System.out.println(result);
    }
}
