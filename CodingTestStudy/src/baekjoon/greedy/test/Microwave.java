package baekjoon.greedy;

import java.util.Scanner;

public class Microwave {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int t = sc.nextInt();

        int[] arr = {300, 60, 10};
        int[] cnt = new int[3];

        for(int i = 0 ; i < arr.length ; i++) {
            if(t >= arr[i]) {
                cnt[i] = t / arr[i];
                t %= arr[i];
            }

        }
        if(t == 0) {
            for(int c : cnt) {
                System.out.print(c+" ");
            }
        } else {
            System.out.println("-1");
        }
    }

}
