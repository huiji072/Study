package thisiscodingtest.implement;

import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class AdventuresGuild {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt(); // 모험가 n명명
        int[] guild = new int[n];

        for(int i = 0 ; i < n ; i++) {
            guild[i] = sc.nextInt();
        }

        Arrays.sort(guild);

        int temp = n;
        int cnt = 0;
        for(int i = 0 ; i < n ; i++) {
            if(temp < guild[i]) {
                break;
            }
            temp -= guild[i];
            cnt++;
        }
        System.out.println(cnt);
    }
}
