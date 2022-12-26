package baekjoon.greedy;

import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Rope {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] weight = new int[n];

        for(int i = 0 ; i < n ; i++) {
            weight[i] = sc.nextInt();
        }

        Integer[] temp = Arrays.stream(weight).boxed().toArray(Integer[]::new);
        Arrays.sort(temp, Comparator.reverseOrder());

        int[] result = new int[n];

        for(int i = 0 ; i < n ; i++) {
            result[i] = temp[i] * (i+1);
        }

        int max = 0;
        for(int i : result) {
            max = Math.max(i, max);
        }
        System.out.println(max);

    }

}
