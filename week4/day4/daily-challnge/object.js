class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    };
    watch () {
        console.log(`${this.uploader} watched ${this.time} seconds of ${this.title}!`);
    };
};

let film = new Video ("game scuid", "haim", 90);
film.watch();

let action = new Video("armagedon", "david", 110);
action.watch();


// let [ 
//     titel:doco , uploader: , time: , 
//     titel: worms, uploader: , time: , 
//     titel: kids , uploader: , time: , 
//     titel: love , uploader: , time: , 
//     titel: wild , uploader: , time: , 
// ]

// Exercise class
// 1) Create a TV class with properties brand, channel and volume. Channel should be 1 by default. Volume should be 50 by default.
// 2) Add methods to increase and decrease volume. Whe the methods are called it will increase or decrease the volume by 1.
// 3) Create an Object for the LG TV
// 4) Create a subclass for Smart TV
// 5) It overrides the method increase, so it increase the volume by 10 and not by 1
// 6) Add a attribute of Netflix that should be equal to true by default

class tv {
    constructor(brand, channel =1, volume = 50){
        this.brand = brand;
        this.channel+1 = channel+1;
        this.volume = volume;
    } 

      increase() {
          return volume++
      }

      decrease(){
        return volume++
       }

       let obj = new tv
      


