package programmers.level1;

import java.util.Arrays;

public class NotCompletePlayer {

    public static void main(String[] args) {

        //"leo", "kiki", "eden"   "eden", "kiki"
        //"mislav", "stanko", "mislav", "ana"    "stanko", "ana", "mislav"
        String[] participant = {"mislav", "stanko", "mislav", "ana" };
        String[] completion = {"stanko", "ana", "mislav"};

        Arrays.sort(participant);
        Arrays.sort(completion);



//        List<String> p = new ArrayList<String>(Arrays.asList(participant));
//        List<String> c = new ArrayList<String>(Arrays.asList(completion));


    }
}
