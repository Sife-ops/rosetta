package dev.wyatt;

public class Debug {
    public static void main(String[] args) {

//        Node<Integer> sup = new Node<>();
//        sup.setValue(8);
//        System.out.println(sup.getValue());

        System.out.println("sup");

        LinkedList<Integer> ll = new LinkedList<>();

//        ll.add(111);
//        ll.add(222);
//        ll.add(223);
//        ll.add(224);
//        ll.add(225);
//        ll.add(226);

        for (int i = 0; i < 1000000; i++){
            ll.add(i);
        }

        System.out.println(ll.get(500000));

//        for (int i = 0; i < ll.getSize(); i++) {
//            System.out.println(ll.get(i));
//        }
//
//        LinkedList<Integer> rr = ll.reverse();
//
//        for (int i = 0; i < rr.getSize(); i++) {
//            System.out.println(rr.get(i));
//        }
//
//        System.out.println(rr.get(0));

//        Node n = ll.getHead();
//
//        System.out.println(n.getValue());

    }
}
