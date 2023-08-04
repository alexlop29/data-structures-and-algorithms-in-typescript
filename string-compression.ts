export {};

let provided_string = "sdasddddeeRRFFFmmmnnn";
let array_of_provided_string = provided_string.split('');

let bool_repeating_sequence = false;
let track_repeating_count = 0;
let compressed_string = "";

console.log(array_of_provided_string);

array_of_provided_string.forEach((value, index) => {
    console.log(value, provided_string[index+1]);
    if (index == 0) {
        compressed_string += value;
        return;
    }
    if (value == provided_string[index+1]) {
        console.log("equal");
        bool_repeating_sequence = true;
        if (track_repeating_count!=0) {
            compressed_string += value;
        }
        track_repeating_count+=1;
    }
    if ( track_repeating_count == 0) {
        compressed_string += value;
    }
    else {
        track_repeating_count = 0;
        bool_repeating_sequence = false;
    }
    console.log(value, track_repeating_count, bool_repeating_sequence);
});

console.log(compressed_string);
