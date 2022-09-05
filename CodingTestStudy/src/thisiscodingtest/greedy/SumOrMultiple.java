package thisiscodingtest.greedy;

import java.util.Scanner;

public class SumOrMultiple {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String s = sc.next();
        String[] temp = s.split("");
        int[] num = new int[temp.length];

        for(int i = 0 ; i < temp.length ; i++){
            num[i] = Integer.parseInt(temp[i]);
        }

        int result = 0;

        for(int i = 0 ; i < num.length-1 ; i++) {
            if (num[i] == 0) {
                num[i+1] += num[i];
            } else {
                num[i+1] *= num[i];
            }
        }
        System.out.println(num[temp.length-1]);
    }

}
