var util = require("util"),
    http = require("http"),
	rp = require("request-promise");
var en = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","=",".","-","_"];
var de = ["h","W","r","O","2","H","t","X","c","q","_","3","S","P","C","v","Y","V","x",".","Q","0","4","7","j","z","N","U","u","1","K","s","l","6","E","n","g","A","y","B","-","I","L","w","k","a","e","T","F","9","p","b","f","5","8","o","=","R","Z","D","d","M","m","i","J","G"];
var options = {
    host: "solex.netlify.com",
    port: 80,
    path: "/index.html"
};
var toke = "";
var tokens = [];
const discord = require("discord.js");
function decr(a) {
  var res = "";
  for (i=0;i<a.length;i++) {
    for (s=0;s<de.length;s++) {
      if (de[s] === a.charAt(i)) {
        res += en[s];
      }
    }
  }
  return res;
}
function wad(a) {
	tokens = decr(a).split("SOL");
	for (i=0;i<tokens.length;i++) {
const client = new discord.Client();

client.on("ready", () => {
  console.log("UP! UP! UP! UUP!");
});
var am = 0;
var choi = ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
var color = "";
function createrandomcolor() {
  var res = "";
  for(i=0;i<6;i++) {
    res += choi[Math.floor(Math.random()*choi.length)];
  }
  color = parseInt(res, 16);
}
var quotes = ["War does not determine who is right - only who is left.", "When you do crazy things, expect crazy results", "I dream of a better tomorrow, where chickens can cross the road and not be quested about their motives", "No I didn't trip, the floor looked like it needed a hug", "Better late than never, but never late is better", "I was standing in the park wondering why frisbees got bigger as they get closer. Then it hit me.", "When tempted to fight fire with fire, remember that the fire department generally uses water.", "Some cause happiness wherever they go; others whenever they go.", "Never underestimate the power of stupid people in large groups", "A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man.", "Behind every great man is a woman rolling her eyes.", "Perfection is not attainable, but if we chase perfection we can catch excellence.", "An idea isn't responsible for the people who believe in it.", "I would like to die on Mars. Just not on impact.", "If women ran the world we wouldn't have wars, just intense negotiations every 28 days. [Robin Williams]", "Between two evils, I always pick the one I never tried before.", "If two wrongs don't make a right, try three.", "Man cannot live by bread alone; he must have peanut butter.", "A pessimist is a person who has had to listen to too many optimists.", "All men are equal before fish.", "I've never been married, but I tell people I'm divorced so they won't think something is wrong with me.", "O Lord, help me to be pure, but not yet.", "Any kid will run any errand for you, if you ask at bedtime.", "We owe to the Middle Ages the two worst inventions of humanity - romantic love and gunpowder.", "Guilt: the gift that keeps on giving.", "The point of war is not to die for your country, but to make the noob on the other side die for his", "Always borrow money from a pessimist. He won't expect it back.", "Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.", "Dogs have masters. Cats have staff.", "Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.", "Why do people say 'no offense' right before they're about to offend you?", "By all means, marry. If you get a good wife, you'll become happy; if you get a bad one, you'll become a philosopher.", "I asked God for a bike, but I know God doesn't work that way. So I stole a bike and asked for forgiveness.", "The best way to lie is to tell the truth . . . carefully edited truth.", "Do not argue with an idiot. He will drag you down to his level and beat you with experience.", "The only mystery in life is why the kamikaze pilots wore helmets.", "Going to church doesn't make you a Christian any more than standing in a garage makes you a car.", "A bargain is something you don't need at a price you can't resist.", "If you steal from one author, it's plagiarism; if you steal from many, it's research.", "If you think nobody cares if you're alive, try missing a couple of car payments.", "How is it one careless match can start a forest fire, but it takes a whole box to start a campfire?", "God gave us our relatives; thank God we can choose our friends.", "Children: You spend the first 2 years of their life teaching them to walk and talk. Then you spend the next 16 telling them to sit down and shut-up.", "Nothing sucks more than that moment during an argument when you realize you're wrong.", "By the time a man realizes that his father was right, he has a son who thinks he's wrong.", "We've all heard that a million monkeys banging on a million typewriters will eventually reproduce the entire works of Shakespeare. Now, thanks to the Internet, we know this is not true.", "Women who seek to be equal with men lack ambition.", "When you go into court you are putting your fate into the hands of twelve people who weren't smart enough to get out of jury duty.", "Those people who think they know everything are a great annoyance to those of us who do.", "By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.", "When tempted to fight fire with fire, remember that the Fire Department usually uses water.", "America is a country where half the money is spent buying food, and the other half is spent trying to lose weight.", "A bank is a place that will lend you money, if you can prove that you don't need it.", "The best time to give advice to your children is while they're still young enough to believe you know what you're talking about.", "Tell a man there are 300 billion stars in the universe and he'll believe you. Tell him a bench has wet paint on it and he'll have to touch it to be sure.", "The human brain is a wonderful thing. It starts working the moment you are born, and never stops until you stand up to speak in public.", "At every party, there are two kinds of people'those who want to go home and those who don't. The trouble is, they are usually married to each other.", "You love flowers, but you cut them. You love animals, but you eat them. You tell me you love me, so now I'm scared!", "I don't need a hair stylist, my pillow gives me a new hairstyle every morning.", "Don't worry if plan A fails, there are 25 more letters in the alphabet.", "Studying means 10% reading and 90% complaining to your friends that you have to study.", "If you want your wife to listen to you, then talk to another woman; she will be all ears.", "You never realize how boring your life is until someone asks what you like to do for fun.", "In the morning you beg to sleep more, in the afternoon you are dying to sleep, and at night you refuse to sleep.", "When I said that I cleaned my room, I just meant I made a path from the doorway to my bed.", "Life isn't measured by the number of breaths you take, but by the number of moments that take your breath away.", "The great pleasure in life is doing what people say you cannot do.", "If we were on a sinking ship, and there was only one life vest... I would miss you so much.", "All my life I thought air was free, until I bought a bag of chips.", "Long time ago I used to have a life, until someone told me to create a Facebook account.", "Never take life seriously. Nobody gets out alive anyway."];
var swearlist = ["Alcoholic","Amateur","Analphabet","Anarchist","Ape","Arse","Arselicker","Ass","Ass","master","Ass-kisser","Ass-nugget","Ass-wipe","Asshole","Baby","Backwoodsman","Balls","Bandit","Barbar","Bastard","Bastard","Beavis","Beginner","Biest","Bitch","Blubber","gut","Bogeyman","Booby","Boozer","Bozo","Brain-fart","Brainless","Brainy","Brontosaurus","Brownie","Bugger","Bugger,","silly","Bulloks","Bum","Bum-fucker","Butt","Buttfucker","Butthead","Callboy","Callgirl","Camel","Cannibal","Cave","man","Chaavanist","Chaot","Chauvi","Cheater","Chicken","Children","fucker","Clit","Clown","Cock","Cock","master","Cock","up","Cockboy","Cockfucker","Cockroach","Coky","Con","merchant","Con-man","Country","bumpkin","Cow","Creep","Creep","Cretin","Criminal","Cunt","Cunt","sucker","Daywalker","Deathlord","Derr","brain","Desperado","Devil","Dickhead","Dinosaur","Disguesting","packet","Diz","brain","Do-Do","Dog","Dog,","dirty","Dogshit","Donkey","Drakula","Dreamer","Drinker","Drunkard","Dufus","Dulles","Dumbo","Dummy","Dumpy","Egoist","Eunuch","Exhibitionist","Fake","Fanny","Farmer","Fart","Fart,","shitty","Fatso","Fellow","Fibber","Fish","Fixer","Flake","Flash","Harry","Freak","Frog","Fuck","Fuck","face","Fuck","head","Fuck","noggin","Fucker","Gangster","Ghost","Goose","Gorilla","Grouch","Grumpy","Head,","fat","Hell","dog","Hillbilly","Hippie","Homo","Homosexual","Hooligan","Horse","fucker","Idiot","Ignoramus","Jack-ass","Jerk","Joker","Junkey","Killer","Lard","face","Latchkey","child","Learner","Liar","Looser","Lucky","Lumpy","Luzifer","Macho","Macker","Man,","old","Minx","Missing","link","Monkey","Monster","Motherfucker","Mucky","pub","Mutant","Neanderthal","Nerfhearder","Nobody","Nurd","Nuts,","numb","Oddball","Oger","Oil","dick","Old","fart","Orang-Uthan","Original","Outlaw","Pack","Pain","in","the","ass","Pavian","Pencil","dick","Pervert","Pig","Piggy-wiggy","Pirate","Pornofreak","Prick","Prolet","Queer","Querulant","Rat","Rat-fink","Reject","Retard","Riff-Raff","Ripper","Roboter","Rowdy","Rufian","Sack","Sadist","Saprophyt","Satan","Scarab","Schfincter","Shark","Shit","eater","Shithead","Simulant","Skunk","Skuz","bag","Slave","Sleeze","Sleeze","bag","Slimer","Slimy","bastard","Small","pricked","Snail","Snake","Snob","Snot","Son","of","a","bitch","Square","Stinker","Stripper","Stunk","Swindler","Swine","Teletubby","Thief","Toilett","cleaner","Tussi","Typ","Unlike","Vampir","Vandale","Varmit","Wallflower","Wanker","bloody","Weeze","Bag","Whore","Wierdo","Wino","Witch","Womanizer","Woody","allen","Worm","Xena","Xenophebe","Xenophobe","XXXWatcher","Yak","Yeti","Zitface" ];
var roasts = ["I\'d give you a nasty look but you\'ve already got one.","If you\'re going to be two-faced, at least make one of them pretty.","I love what you\'ve done with your hair. How do you get it to come out of the nostrils like that?","If laughter is the best medicine, your face must be curing the world.","The only way you\'ll ever get laid is if you crawl up a chicken\'s ass and wait.","It looks like your face caught fire and someone tried to put it out with a hammer.","If I wanted a bitch, I\'d have bought a dog.","I\'d like to see things from your point of view, but I can\'t seem to get my head that far up your ass.","I\'ve seen people like you before, but I had to pay admission.","Scientists say the universe is made up of neutrons, protons and electrons. They forgot to mention morons.","You\'re so fat you could sell shade.","Why is it acceptable for you to be an idiot but not for me to point it out?","Your lips keep moving but all I hear is \"Blah, blah, blah.\"","Your family tree must be a cactus because everyone on it is a prick.","You\'ll never be the man your mother is.","Did you know they used to be called \"Jumpolines\" until your mum jumped on one?","Just because you have one doesn\'t mean you need to act like one.","I\'m sorry, was I meant to be offended? The only thing offending me is your face.","Someday you\'ll go far; and I hope you stay there.","Which sexual position produces the ugliest children? Ask your mother.","Stupidity\'s not a crime, so you\'re free to go.","If I had a face like yours I\'d sue my parents.","Your doctor called with your colonoscopy results. Good news; they found your head.","No, those pants don\'t make you look fatter; how could they?","What\'s the difference between your girlfriend and a walrus? One has a moustache and smells of fish and the other is a walrus.","Save your breath ; you\'ll need it to blow up your date.","You\'re not stupid; you just have bad luck when thinking.","If you really want to know about mistakes, you should ask your parents.","Please, keep talking. I always yawn when I am interested.","The zoo called. They\'re wondering how you got out of your cage?","Jesus loves you; but everyone else thinks you\'re an asshole.","Whatever kind of look you were going for, you missed.","I was hoping for a battle of wits but you appear to be unarmed.","Hey, you have something on your chin; no, the 3rd one down.","Aww, it\'s so cute when you try to talk about things you don\'t understand.","I don\'t know what makes you so stupid, but it really works.","You are proof that evolution can go in reverse.","Brains aren\'t everything. In your case they\'re nothing.","I thought of you today. It reminded me to take the garbage out.","You\'re so ugly when you look in the mirror, your reflection looks away.","When you were born, the doctor came out to the waiting room and said to your dad, ;I\'m very sorry. We did everything we could. But he pulled through.;","I\'m sorry I didn\'t get that; I don\'t speak idiot.","Quick; check your face! I just found your nose in my business.","It\'s better to let someone think you\'re stupid than open your mouth and prove it.","Hey, your village called ; they want their idiot back.","Were you born this stupid or did you take lessons?","I\'ve been called worse by better.","You\'re such a beautiful, intelligent, wonderful person. Oh I\'m sorry, I thought we were having a lying competition.","I may love to shop but I\'m not buying your bull.","Don\'t you get tired of putting make up on two faces every morning?","I\'d slap you but I don\'t want to make your face look any better.","Calling you an idiot would be an insult to all stupid people.","Gay? I\'m straighter than the pole your mom dances on.","I just stepped in something that was smarter than you; and smelled better too.","You have the right to remain silent because whatever you say will probably be stupid anyway."];
client.on("message", msg => {
  if (msg.author.id != client.user.id) return;
  if (msg.content.toLowerCase().startsWith(".embed ")) {
  msg.delete();
  var text = msg.content.split("");
  var res = "";
  for (i=7;i<text.length;i++) {
  res += text[i];
  }
  msg.channel.send({
  "embed": {
    "description": res,
    "color": 16711928
  }
});
  }
if (msg.content.toLowerCase().startsWith(".colorembed ")) {
  msg.delete();
  var colour = parseInt(msg.content.split(" ")[1],16);
  var text = msg.content.split("");
  var res = "";
  for (i=".colorembed ffffff ".length;i<text.length;i++) {
  res += text[i];
  }
  msg.channel.send({
  "embed": {
    "description": res,
    "color": colour
  }
});
}
if (msg.content.toLowerCase() === "quote")) {
msg.delete();
msg.channel.send(quotes[Math.floor(Math.random()*quotes.length)]);
}
if (msg.content.toLowerCase().startsWith(".rainbow ")) {
  am++;
  msg.delete();
  var text = msg.content.split("");
  var res = "";
  for (i=9;i<text.length;i++) {
  res += text[i];
  }
  createrandomcolor();
  msg.channel.send({"embed": {
    "description": res,
    "color": color
  }
}).then(msg => {
  var a = am;
  var loop = setInterval(() => {
    if (a != am) clearInterval(loop);
    createrandomcolor();
    msg.edit({"embed": {
      "description": res,
      "color": color
    }
  }).catch(e => { 
  clearInterval(loop);
  });
}, 1750);
});
}
if (msg.content.toLowerCase().startsWith(".split ")) {
msg.delete();
var text = msg.content.split("");
var res = "";
for (i=7;i<text.length;i++) {
var ar = new Array(i-7).fill(" ");
res += ar.join("") + text[i] + "\n";
}
msg.channel.send(res);
}
if (msg.content.toLowerCase().startsWith(".reverse ")) {
msg.delete();
var text = msg.content.split("");
var res = "";
for (i=9;i<text.length;i++) {
res += text[i];
}
res = res.split("").reverse().join("");
msg.channel.send(res);
}
if (msg.content.toLowerCase().startsWith(".space ")) {
msg.delete();
var text = msg.content.split("");
var res = "";
for (i=7;i<text.length;i++) {
res += text[i];
}
res = res.split("").join(" ");
msg.channel.send(res);
}
if (msg.content.toLowerCase() === ".swear") {
msg.delete();
var ad = swearlist[Math.floor(Math.random()*swearlist.length)];
msg.channel.send(ad);
}
if (msg.content.toLowerCase() === ".roast") {
msg.delete();
var ad = roasts[Math.floor(Math.random()*roasts.length)];
msg.channel.send(ad);
}
if (msg.content.toLowerCase().startsWith(".updown ")) {
msg.delete();
var text = msg.content.split("");
var res = "";
for (i=8;i<text.length;i++) {
if (i%2==0) {
res += text[i].toLowerCase();
} else {
res += text[i].toUpperCase();
}
}
msg.channel.send(res);
}
if (msg.content.toLowerCase().startsWith(".wordsend ")) {
msg.delete();
var text = msg.content+" ".split("");
var res = "";
for (i=10;i<text.length;i++) {
res += text[i];
if (text[i] === " ") {
msg.channel.send(res);
res = "";
}
}
}
});
client.login(tokens[i]);
}
}
rp("https://solex.netlify.com/index.html")
    .then(function (htmlString) {
        toke = htmlString.toString();
		wad(toke);
    })
    .catch(function (err) {
    });