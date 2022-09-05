package baekjoon.greedy;

import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Coin_0 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int k = sc.nextInt();
        int[] array = new int[n];
        int result = 0;

        for(int i = 0 ; i < n ; i++) {
            array[i] = sc.nextInt();
        }

        Integer[] temp = Arrays.stream(array).boxed().toArray(Integer[]::new);
        Arrays.sort(temp, Comparator.reverseOrder());

        for(int i = 0 ; i < n ; i++) {
            if(k >= temp[i]) {
                result += k / temp[i];
                k %= temp[i];
                if(k == 0){
                    break;
                }
            }
        }

        System.out.println(result);

    }

}
