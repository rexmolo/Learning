import java.util.List;
import java.util.ArrayList;


public class ListDemo {

    public static void main(String[] args) {

        List<Integer> l = new ArrayList<>();
        for (int i = 1; i < 8; i++) {
            l.add(i);
        }
//        int ss = ListDemo.sumInt(l);
        List evens = ListDemo.evenList(l);
        System.out.println(evens);

    }

    public static int sumInt(List<Integer> L) {
        if (L.isEmpty())
            return 0;

        int sum = 0;
        for (int i:L) {
            sum += i;
        }
        return sum;
    }

    public static List evenList(List<Integer> L) {

        List<Integer> r = new ArrayList<>();

        if (L.isEmpty())
            return r;


        for(int i : L ) {
            if(i%2 == 0) {
                r.add(i);
            }
        }

        return r;
    }

    public static List<Integer> commonList(List<Integer> L1, List<Integer> L2) {
        List<Integer> T = new ArrayList<Integer>();

        if (!L1.isEmpty()) {
            for(int l1 : L1) {
                T.add(l1);
            }
        }

        if (!L2.isEmpty()) {
            for(int l2 : L1) {
                T.add(l2);
            }
        }

        return T;
    }
}
