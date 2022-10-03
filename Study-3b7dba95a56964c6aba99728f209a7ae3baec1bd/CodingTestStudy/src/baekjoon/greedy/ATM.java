package baekjoon.greedy;

import java.util.Arrays;
import java.util.Scanner;

public class ATM {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] array = new int[n];
        int result = 0;

        for(int i = 0 ; i < n ; i++) {
            array[i] = sc.nextInt();
        }

        Arrays.sort(array);

        for(int i = 0 ; i < n ; i++) {
            result += (n-i) * array[i];
        }

        System.out.println(result);
    }

}
