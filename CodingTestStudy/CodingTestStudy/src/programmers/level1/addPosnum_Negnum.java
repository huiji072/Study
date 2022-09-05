package programmers.level1;

public class addPosnum_Negnum {

    public static void main(String[] args) {
        int[] absolutes = {4, 7, 12};
        boolean[] signs = {true, false, true};

        int sum = 0;

        for(int i = 0 ; i <absolutes.length ; i ++){
            if(signs[i]==true){
                sum += absolutes[i];
            }else if(signs[i]==false)
                sum -= absolutes[i];
        }

        System.out.println(sum);
    }
}
