package baekjoon.greedy;

import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Treasure {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] a = new int[n];
        int[] b = new int[n];
        int result = 0;

        for(int i = 0 ; i < n ; i++){
            a[i] = sc.nextInt();
        }

        for(int i = 0 ; i < n ; i++) {
            b[i] = sc.nextInt();
        }

        Arrays.sort(a);

        Integer[] temp = Arrays.stream(b).boxed().toArray(Integer[]::new);
        Arrays.sort(temp, Comparator.reverseOrder());

        for(int i = 0 ; i < n ; i++) {
            result += a[i] * temp[i];
        }

        System.out.println(result);

    }

}
