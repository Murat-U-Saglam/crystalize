/* Create bubble sort alogrithm */

function bubble() {
    var i, j, temp;
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

const array = [10, 2, 3, 4, 5, 6, 7, 8, 9, 1];

console.log(bubble(array))