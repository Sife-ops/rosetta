package dev.wyatt;

import java.util.Objects;

public class LinkedList<T> {

    private int size = 0;
    private Node<T> head = null;

    public LinkedList() {
        super();
    }

//    public LinkedList(T value) {
//        super();
//        this.setHead(new Node(value));
//    }

    public int getSize() {
        return size;
    }

    private void setSize(int size) {
        this.size = size;
    }

    public Node<T> getHead() {
        return head;
    }

    private void setHead(Node<T> head) {
        this.head = head;
    }

    public void add(T thing) {
        if (this.getHead() == null) {
            this.setHead(new Node<>(thing));
        } else {
            Node<T> lol = new Node<>(thing);
            lol.setNext(this.getHead());
            this.setHead(lol);
        }
        this.setSize(this.getSize() + 1);
    }

    public T get(int index) {
        if (index > this.getSize() - 1 || index < 0) {
            throw new ArrayIndexOutOfBoundsException();
        }

        if (this.getHead() == null) {
            throw new ArrayIndexOutOfBoundsException();
        }

        Node<T> c = getHead();
        for (int i = 0; i < index; i++) {
            c = c.getNext();
        }

        return c.getValue();
    }

    public LinkedList<T> reverse() {
        Node<T> c = this.getHead();
        Node<T> p = null;

        while (c != null) {
//            System.out.println(c.getValue());
            Node<T> n = c.getNext();
            c.setNext(p);
            p = c;
            c = n;
        }

//        System.out.println(p.getNext().getNext().getValue());

//        Node<T> h = p;
        LinkedList<T> r = new LinkedList<>();
        r.setHead(p);
        r.setSize(this.getSize());

        return r;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LinkedList<?> that = (LinkedList<?>) o;
        return size == that.size && head.equals(that.head);
    }

    @Override
    public int hashCode() {
        return Objects.hash(size, head);
    }

    @Override
    public String toString() {
        return "LinkedList{" +
                "size=" + size +
                ", head=" + head +
                '}';
    }
}
