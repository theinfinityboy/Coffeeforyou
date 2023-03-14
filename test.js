let hello = [
    {
        name:"lakshya",
        class:"12",
        mother_name :"Sunita Gupta",
        father_name :"om prakash gupta"
    },
    {
        name:"lakshya",
        class:"12",
        mother_name :"Sunita Gupta",
        father_name :"om prakash gupta"
    },
    {
        name:"lakshya",
        class:"12",
        mother_name :"Sunita Gupta",
        father_name :"om prakash gupta"
    }
]

let string_hello = JSON.stringify(hello);

console.log(string_hello);

let json_hello = JSON.parse(string_hello);

console.log(json_hello);