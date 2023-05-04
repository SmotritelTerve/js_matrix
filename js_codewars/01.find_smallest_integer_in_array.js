/*
Given an array of integers your solutin should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

class SmallestIntegerFinder {
    findSmallestInt(args) {
        // 1 solution
        // we need to use spread operator to "unpack" the array
        // return Math.min(...args);

        // 2 solution
        let currentMin = args[0];
        for (let i = 0; i < args.length; i++) {
            if (args[i] < currentMin) currentMin = args[i];
        }
        return currentMin;
    }
}