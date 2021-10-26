

const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
 ];

 gameInfo.forEach( items  => {
   console.log(items.username + "!")
   
 });

 let hightSorce = [];
 gameInfo.forEach(val => {
   console.log((val.score > 5 ? hightSorce.push(val.username):hightSorce ));
 })


 let alluser = 0;
 gameInfo.forEach(items => alluser += items.score);
 console.log(alluser)



