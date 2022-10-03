package baekjoon.greedy;

import java.util.Scanner;

public class GasStation {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] distance = new int[n-1];
        int[] oilPrice = new int[n];

        for(int i = 0 ; i < n-1 ; i++) {
            distance[i] = sc.nextInt();
        }

        for(int i = 0 ; i < n ; i++) {
            oilPrice[i] = sc.nextInt();
        }

        int result =  oilPrice[0] * distance[0];

        for(int i = 1 ; i < oilPrice.length-1 ; i++) {

                if(oilPrice[i] > oilPrice[i+1]) {
                    result += distance[i] * oilPrice[i];
                } else{
                    result += (distance[i] + distance[i+1]) * oilPrice[i];
                    i++;
                }
        }
        System.out.println(result);

    }

}
