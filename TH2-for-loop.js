let arr = ["We", "don't", "care", "the", "keys", "since", "they", "are", "a", "known", "set", "of", "number"];
for (const string of arr) {
    console.log(string)
}
let object = {
    we: "care",
    about: "the",
    key :"since",
    they: "may",
    have: "meaning",
    also: "use",
    square: "bracket",
    as: "iterating",
    through: "an array"
}
for (const objectKey in object) {
    console.log(objectKey, object[objectKey])
}