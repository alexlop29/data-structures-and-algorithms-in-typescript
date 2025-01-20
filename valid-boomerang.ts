/*
Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.
A boomerang is a set of three points that are all distinct and not in a straight line.

Example 1:
Input: points = [[1,1],[2,3],[3,2]]
Output: true

Example 2:
Input: points = [[1,1],[2,2],[3,3]]
Output: false

Constraints:
points.length == 3
points[i].length == 2
0 <= xi, yi <= 100
*/

function isBoomerang(points: number[][]): boolean {
    // potential algorithms
    // in-line write to hash map
    //   - loop and if exists in hash map return false
    //   - check if after loop to see if straight line

    // given only three points, we can: 
    // check if they are the same
    // if so, return false - non-distinct
    // compare if successive, if so return false
    // otherwise, return true
    // ** Selected

    if (
        points[0].toString() == points[1].toString() ||
        points[0].toString() == points[2].toString() ||
        points[1].toString() == points[2].toString()
    ) {
        return false // signifies non-distinct points
    };

    if (
        points[0][0].toString() == points[0][1].toString() ||
        points[1][0].toString() == points[1][1].toString() ||
        points[2][0].toString() == points[2][1].toString()
    ) {
        return false // signifies non-distinct X,Y of each point
    };

    if (
        points[0][0]+1 == points[1][0] &&
        points[0][1]+1 == points[1][1] &&
        points[1][0]+1 == points[2][0] && 
        points[1][1]+1 == points[2][1]
    ){
        return false; // signifies a straight-line
    };

    if (
        points[0][0]+1 == points[1][0] &&
        points[0][1] == points[1][1] &&
        points[1][0]+1 == points[2][0] && 
        points[1][1] == points[2][1]
    ){
        return false; // signifies a straight-line with the same Y
    };

    return true;
};
