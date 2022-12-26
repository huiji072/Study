package baekjoon.greedy;

import java.util.Scanner;

public class LostParenthesis {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String str = sc.next();


        int answer = 0;

        String[] diff = str.split("\\-");


        for(int i = 0 ; i < diff.length ; i++) {
            String[] sum = diff[i].split("\\+");

            int result = 0;
            for(String s : sum) {
                result += Integer.parseInt(s);
            }

            if(i == 0) {
                answer += result;
            } else {
                answer -= result;
            }
        }
        System.out.println(answer);

    }

}
