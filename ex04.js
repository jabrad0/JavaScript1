var cat = {
            tiredness: 20,
            hunger: 20,
            loneliness: 3,
            happiness: 50,
            independence: 5000,
            feed: function(){
                console.log("Om nom nom");
                this.hunger = this.hunger -5;
                return this.hunger;
                },
            sleep: function(){
                console.log("Zzzzzzzz");
                this.tiredness = this.tiredness -5;
                this.hunger = this.hunger +2;
                return this.tiredness, this.hunger;
                },
            contentment: function(){
                console.log("Purrrrrrrr");
                this.happiness = this.happiness -3;
                return this.happiness;
                },
            petting: function(){
                console.log("Tail is starting to flick...");
                this.independence = this.independence -10;
                return this.independence;
            },
            talkingto: function(){
                console.log("Meow, Meow");
                this.loneliness = this.loneliness + 5;
                return this.loneliness;
            },
            happycat: function(activity){
                if (activity === "pet"){
                    console.log("Purrrrr... tail flick");
                    this.happiness = this.happiness +5;
                    this.indepence = this.indpendence -10;
                    this.hunger = this.hunger+15;
                }
                else if (activity === "laser"){
                    console.log("Yippee!!!!!");
                    this.happiness = this.happiness +30;
                    this.hunger = this.hunger+45;
                    console.log("Feed me now!");
                    this.independence = this.independence -1000;
                }
                return this.happiness, this.hunger, this.independence;
            }
        };
     

cat.feed();
console.log("hunger", cat.hunger);

cat.sleep();
console.log("tiredness", cat.tiredness);

cat.contentment();
console.log("happiness", cat.happiness);

cat.petting();
console.log("independence", cat.independence);

cat.talkingto();
console.log("talkingto", cat.loneliness);


cat.happycat("laser");
console.log("laser, happycat", cat.happiness, "hunger", cat.hunger, "independence", cat.independence);

cat.happycat("pet");
console.log("pet, happycat", cat.happiness, "hunger", cat.hunger, "independence", cat.independence);
