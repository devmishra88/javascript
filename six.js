const coding = ["js", "ruby", "java", "php", "cpp"];

// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// })

// console.log(values);
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//by using filter function to return value

// const tempnewnum = myNums.filter((num)=>num > 4)

// const tempnewnum = myNums.filter((num)=>{
//     return num > 5;
// })

// console.log(tempnewnum)

//by using forEach loop to return value

// const newNums = [];

// myNums.forEach((num)=>{
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1995, edition: 2000 },
    { title: "Book Three", genre: "Science Fiction", publish: 2010, edition: 2015 },
    { title: "Book Four", genre: "Fantasy", publish: 2003, edition: 2012 },
    { title: "Book Five", genre: "Mystery", publish: 1999, edition: 2001 },
    { title: "Book Six", genre: "Biography", publish: 1985, edition: 1990 },
    { title: "Book Seven", genre: "Horror", publish: 1978, edition: 1985 },
    { title: "Book Eight", genre: "Romance", publish: 2007, edition: 2010 },
    { title: "Book Nine", genre: "Thriller", publish: 2018, edition: 2020 },
    { title: "Book Ten", genre: "History", publish: 1992, edition: 1997 }
  ];

//this will return which genre is 'History'

let userBooks = books.filter((singlebook)=>{
    return singlebook.genre === "History"
});

//this will return which publish year is '2000' and genre will be 'Thriller'

userBooks = books.filter((singlebook)=>{
    return singlebook.publish >= 2000 && singlebook.genre === "Thriller"
})

console.log(userBooks)
