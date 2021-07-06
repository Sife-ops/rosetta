/**
 * Algorithms
 */

package dev.wyatt;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class Algorithms {

    /**
     * Use for testing stuff out.
     * @param args
     */
    public static void main(String[] args) {
        
        // Binary search
        List<Integer> l = new ArrayList<>(Arrays.asList(1,5,3,8,22));
        BinarySearch<Integer> bs = new BinarySearch<>(l);
        System.out.println(bs.indexOf(8));

        // Inventory Update
        Map<String, Integer> ma = new HashMap<>();
        ma.put("cat", 5);
        ma.put("dog", 5);
        Map<String, Integer> mb = new HashMap<>();
        mb.put("cat", 5);
        mb.put("mouse", 3);
        Map<String, Integer> mc = updatedInventory(ma, mb);
        System.out.println(mc);

        System.out.println(permutateString("abcde").size());
        System.out.println(permutateString("abcab").size());
        // permutateString("abca").forEach(System.out::println);

    }

    /**
     * Every possible permutation of a string.
     * Input: 
     * abc
     * Output:
     * abc, acb, bac, bca, cab, cba
     *
     * @param in
     * @param out
     * @param acc
     */
    private static void permutateString
    (
        String in, 
        String out, 
        List<String> acc
    ) 
    {

        if (in.length() == 0) {
            acc.add(out);
            return;
        }

        for (int i = 0; i < in.length(); i++) {
            char ch = in.charAt(i);

            String rest = 
                in.substring(0, i) +
                in.substring(i + 1);

            permutateString(rest, out + ch, acc);
        }

    }

    public static List<String> permutateString (String string) {
        List<String> permutations = new ArrayList<>();
        permutateString(string, "", permutations);

         String patternString = "(\\w)\\1+";
         Pattern pattern = Pattern.compile(patternString);

        return permutations.stream()
            .filter(e -> {
                Matcher matcher = pattern.matcher(e);
                if(!matcher.find()) {
                    return true;
                }
                return false;
            }).collect(Collectors.toList());
    }

    /**
     * Update inventory.
     * @param curInv
     * @param newInv
     * @return
     */
    public static Map<String, Integer> updatedInventory
    (
        Map<String, Integer> curInv, 
        Map<String, Integer> newInv
    ) 
    {
        Map<String, Integer> updatedInv = new HashMap<>();

        Set<String> newInvKeys = newInv.keySet();
        Set<String> curInvKeys = curInv.keySet();

        curInvKeys.stream()
            .filter(i -> newInvKeys.stream()
                .noneMatch(j -> j.equals(i)))
            .forEach(i -> updatedInv.put(i, curInv.get(i)));

        newInvKeys.stream()
            .filter(i -> curInvKeys.stream()
                .noneMatch(j -> j.equals(i)))
            .forEach(i -> updatedInv.put(i, newInv.get(i)));

        newInvKeys.stream()
            .filter(i -> curInvKeys.stream()
                .anyMatch(j -> j.equals(i)))
            .forEach(i -> updatedInv.put(i, newInv.get(i) + curInv.get(i)));

        return updatedInv;
    }

    /**
     * Symmetric difference.
     * Return a list of elements unique to all lists.
     * @param <T>
     * @param args
     * @return
     */
    public static <T> List<T> symmetricDifference(List<T> ...args) {
        return Arrays.stream(args)
            .reduce(Algorithms::symmetricDifferenceHelper)
            .orElse(null);
    }

    /**
     * Symmetric difference helper function. 
     * Return a list of elements unique to both lists.
     * @param <T>
     * @param a
     * @param b
     * @return
     */
    public static <T> List<T> symmetricDifferenceHelper(List<T> a, List<T> b) {
        Set<T> s = new HashSet<>();

        a.stream()
            .filter(e -> b.stream().noneMatch(f -> f.equals(e)))
            .forEach(s::add);

        b.stream()
            .filter(e -> a.stream().noneMatch(f -> f.equals(e)))
            .forEach(s::add);

        return new ArrayList<>(s);
    }

    /**
     * Return an array of elements unique to all arrays.
     * @param args
     * @return
     */
    public static int[] symmetricDifference_ (int[] ...args) {
        Optional<int[]> o = Arrays.stream(args).reduce(Algorithms::symmetricDifferenceHelper_);
        if (o.isPresent()){
            try {
                return o.get();
            } catch (NoSuchElementException e) {
                return null;
            }
        }

        return null;
    }

    /**
     * Return an array of elements unique to both arrays.
     * @param a
     * @param b
     * @return
     */
    public static int[] symmetricDifferenceHelper_ (int[] a, int[] b) {
        Set<Integer> s = new HashSet<>();

        Arrays.stream(a)
                .filter(e -> Arrays.stream(b).noneMatch(f -> f == e))
                .forEach(s::add);
        Arrays.stream(b)
                .filter(e -> Arrays.stream(a).noneMatch(f -> f == e))
                .forEach(s::add);

        int[] r = new int[s.size()];
        Iterator<Integer> it = s.iterator();
        for (int i = 0; it.hasNext(); i++){
            r[i] = it.next();
        }

        return r;
    }

}

