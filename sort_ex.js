// Problem 4
// Sorting of the array
function selectsort(array){
  for (var i = 0; i < array.length - 1; i++) {
    var min_index = i;
    for (var j = i + 1; j < array.length - 1; j++) {
      if (array[j] < array[min_index]) {
        min_index = j;
      }
    }
    var temp = array[i];
    array[i] = array[min_index];
    array[min_index] = temp;
  }
  return array;
}


function bubblesort(array){
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

var arr = [1,5,2,6,3,3];
console.log(bubblesort(arr));
console.log(selectsort(arr));
