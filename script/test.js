let a = [
    {
    name : "test1",
    username : "test11",
    pass : "test111"
    },
    {
        name : "test2",
        username : "test22",
        pass : "test222"
    },
    {
        name : "test3",
        username : "test33",
        pass : "test333"
    }
]

const b = JSON.parse(`{"name" : "test3", "username" : "test33", "pass" : "test333"}`)

console.log("Sebelum")
console.log(a)
// console.log(b)

a = a.filter(t => t != b)
console.log("Sesudah")
console.log(a)
