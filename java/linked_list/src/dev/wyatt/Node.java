package dev.wyatt;

import java.util.Objects;

public class Node<T> {
    private T value;
    private Node<T> next = null;

    public Node() {
        super();
    }

    public Node(T value) {
        super();
        this.value = value;
    }

    public Node(T value, Node<T> next) {
        super();
        this.value = value;
        this.next = next;
    }

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }

    public Node<T> getNext() {
        return next;
    }

    public void setNext(Node next) {
        this.next = next;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Node<?> node = (Node<?>) o;
        return value.equals(node.value) && next.equals(node.next);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value, next);
    }

    @Override
    public String toString() {
        return "Node{" +
                "value=" + value +
                ", next=" + next +
                '}';
    }
}
