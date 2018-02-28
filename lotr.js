var sceneHit; // the scene user will get up to
var filmHit; // the film user will get up to
var loopsLOTR; // how many times the user can watch the whole trilogy
var secondsRemaining = 0; // seconds user has remaining after watching LOTR as many times as they can fully
var skipFrodo;

// movie runnning times in seconds
var LOTR = 39840;
var FOTR = 10690;
var TT = 21441;
var ROTK = 33486;

function resetVar() {
    var sceneHit = undefined; // the scene user will get up to
    var filmHit = undefined; // the film user will get up to
    var loopsLOTR = undefined; // how many times the user can watch the whole trilogy
    var secondsRemaining = 0; // seconds user has remaining after watching LOTR as many times as they can fully
    var skipFrodo = undefined;

    // movie runnning times in seconds
    var LOTR = 39840;
    var FOTR = 10690;
    var TT = 21441;
    var ROTK = 33486;
}

function getUserTime() {
    frodoAndSam(); // are we watching the Frodo and Sam bits?
    resetVar();

    console.log("%cgetUserTime function HIT", "color: #00CC00");
    var userHours = document.getElementById("input_minutes").value;

    if (userHours !== null) { // get times and loops for LOTR
        var userSeconds = ((userHours * 60) * 60);

        if (userSeconds > 1) {
            console.log("%c[getUserTime()] User has " + userSeconds + " seconds to burn.", "color: #0033CC");
        } else {
            console.log("%c[getuserTime()] User has 1 second to burn.", "color: #0033CC");
        }

        if (userSeconds > LOTR) { // if userSecond is longer than LOTR then get LOTR loops and seconds remaining.
            var userSecondsDivided = userSeconds / LOTR;
            loopsLOTR = Math.floor(userSecondsDivided); //LOTR loops
            var removeLoops = userSecondsDivided - loopsLOTR;
            secondsRemaining = removeLoops * LOTR;
            returnResults(secondsRemaining, loopsLOTR); // send results to returnResults
        } else { // get seconds and make LOTR loops set to null or equivalent.
            secondsRemaining = userSeconds;
            loopsLOTR = 0; // LOTR did not loop
            returnResults(secondsRemaining, loopsLOTR); // send results to returnResults
        }
    }
}

function frodoAndSam() {
    if (document.getElementById("frodo_and_sam").value == false) {
        skipFrodo = true;
    } else {
        skipFrodo = false;
    }
}

function returnResults(secondsRemaining, loops) { // output full LOTR loops multiple
    console.log("%creturnResults function HIT", "color: #00CC00");
    if (loops == 0) {
        console.log("%c[returnResults()]did not loop LOTR once", "color: #FF0000");
    } else {
        console.log("%c[returnResults()] looped LOTR " + loops + " times", "color: #FF0000");
    }
    whichMovie(secondsRemaining);
}

function whichMovie(seconds) {
    seconds = secondsRemaining;
    console.log("%cwhichMovie function HIT", "color: #00CC00");
    // select which movie in the trilogy to use by seconds
    if (secondsRemaining < FOTR) { // Fellowship of the Ring
        console.log("%cwhichMovie(" + secondsRemaining + ") was hit returning 'Fellowship of the Ring'", "color: #0033CC");
        filmHit = "The Fellowship of the Ring";
        document.getElementById("image_holder").src = "img/fotr.jpg"
        searchFOTR(secondsRemaining);
    } else if (secondsRemaining < TT) { // The Two Towers
        console.log("%cwhichMovie(" + secondsRemaining + ") was hit returning 'Two Towers'", "color: #0033CC");
        document.getElementById("image_holder").src = "img/tt.jpg"
        filmHit = "The Two Towers";
        searchTT(secondsRemaining);
    } else if (secondsRemaining < ROTK) { // Return of the King
        console.log("%cwhichMovie(" + secondsRemaining + ") was hit returning 'Return of the King'", "color: #0033CC");
        document.getElementById("image_holder").src = "img/rotk.jpg"
        filmHit = "The Return of the King";
        searchROTK(secondsRemaining);
    }
}

function postResults() {
    document.getElementById("loopHolder").innerHTML = "<span style='font-weight: bold;'>Trilogy Watch Multiple: </span>" + loopsLOTR;
    document.getElementById("filmHolder").innerHTML = "<span style='font-weight: bold;'>Film: </span>" + filmHit;
    document.getElementById("sceneHolder").innerHTML = "<span style='font-weight: bold;'>Scene: </span>" + sceneHit;
}

function searchFOTR(seconds) {
    console.log("%csearchFOTR function HIT", "color: #00CC00");
    switch (true) {
        case (seconds < 417):
            sceneHit = ("Prologue: One Ring to Rule Them All...");
            break;
        case (seconds < 722):
            sceneHit = ("The Shire")
            break;
        case (seconds < 953):
            sceneHit = ("Very Old Friends");
            break;
        case (seconds < 1254):
            sceneHit = ("A Long-expected Party");
            break;
        case (seconds < 1499):
            sceneHit = ("Farewell Dear Bilbo");
            break;
        case (seconds < 1629):
            sceneHit = ("Keep It Secret, Keep It Safe");
            break;
        case (seconds < 1795):
            sceneHit = ("The Account of Isildur");
            break;
        case (seconds < 2328):
            sceneHit = ("The Shadow of the Past");
            break;
        case (seconds < 2620):
            sceneHit = ("Saruman the White");
            break;
        case (seconds < 2883):
            sceneHit = ("A Shortcut to Mushrooms");
            break;
        case (seconds < 3022):
            sceneHit = ("Bucklebury Ferry");
            break;
        case (seconds < 3340):
            sceneHit = ("At the Sign of the Prancing Pony");
            break;
        case (seconds < 3534):
            sceneHit = ("The Nazgul");
            break;
        case (seconds < 3647):
            sceneHit = ("The Spoiling of Isengard");
            break;
        case (seconds < 3934):
            sceneHit = ("A Knife in the Dark");
            break;
        case (seconds < 4090):
            sceneHit = ("The Caverns of Isengard");
            break;
        case (seconds < 4497):
            sceneHit = ("Flight to the Ford");
            break;
        case (seconds < 4610):
            sceneHit = ("Rivendell");
            break;
        case (seconds < 4807):
            sceneHit = ("Many Meetings");
            break;
        case (seconds < 5012):
            sceneHit = ("The Fate of the Ring");
            break;
        case (seconds < 5120):
            sceneHit = ("The Sword That Was Broken");
            break;
        case (seconds < 5198):
            sceneHit = ("The Evenstar");
            break;
        case (seconds < 5577):
            sceneHit = ("The Council of Elrond");
            break;
        case (seconds < 5682):
            sceneHit = ("Bilbo's Gifts");
            break;
        case (seconds < 5877):
            sceneHit = ("The Ring Goes South");
            break;
        case (seconds < 6196):
            sceneHit = ("The Pass of Caradhras");
            break;
        case (seconds < 6492):
            sceneHit = ("Moria");
            break;
        case (seconds < 6749):
            sceneHit = ("A Journey in the Dark");
            break;
        case (seconds < 7300):
            sceneHit = ("Balin's Tomb");
            break;
        case (seconds < 7908):
            sceneHit = ("The Bridge of Khazad-Dum");
            break;
        case (seconds < 8270):
            sceneHit = ("Lothlorien");
            break;
        case (seconds < 8577):
            sceneHit = ("The Mirror of Galadriel");
            break;
        case (seconds < 8687):
            sceneHit = ("The Fighting Uruk-hai");
            break;
        case (seconds < 8734):
            sceneHit = ("Farewell the Lorien");
            break;
        case (seconds < 8920):
            sceneHit = ("The Great River");
            break;
        case (seconds < 9311):
            sceneHit = ("Parth Galen");
            break;
        case (seconds < 9786):
            sceneHit = ("The Breaking of the Fellowship");
            break;
        case (seconds < 9922):
            sceneHit = ("The Departure of Boromir");
            break;
        case (seconds < 10320):
            sceneHit = ("The Road Goes Ever On");
            break;
        case (seconds < 10690):
            sceneHit = ("Credits");
            break;
        default:
            console.log("Switch Statement 1 Default Hit");
            break;
    }
    postResults();
}

function searchTT(seconds) {
    console.log("%csearchTT function HIT", "color: #00CC00");
    switch (true) {
        case (seconds < 10923):
            sceneHit = ("The Foundation of Stone");
            break;
        case (seconds < 11364):
            sceneHit = ("The Taming of Smeagol");
            break;
        case (seconds < 11423):
            sceneHit = ("The Uruk-hai");
            break;
        case (seconds < 11560):
            sceneHit = ("The Three Hunters");
            break;
        case (seconds < 11774):
            sceneHit = ("The Burning of the Westfold");
            break;
        case (seconds < 11922):
            sceneHit = ("The Banishment of Eomer");
            break;
        case (seconds < 11978):
            sceneHit = ("On the Trail of the Uruk-hai");
            break;
        case (seconds < 12156):
            sceneHit = ("Night Camp at Fangorn");
            break;
        case (seconds < 12443):
            sceneHit = ("The Riders of Rohan");
            break;
        case (seconds < 12621):
            sceneHit = ("Traces of Merry and Pippin");
            break;
        case (seconds < 12827):
            sceneHit = ("Treebeard");
            break;
        case (seconds < 13229):
            sceneHit = ("The Passage of the Marshes");
            break;
        case (seconds < 13534):
            sceneHit = ("The White Rider");
            break;
        case (seconds < 13580):
            sceneHit = ("Fangorn Forest");
            break;
        case (seconds < 13897):
            sceneHit = ("The Black Gate is Closed");
            break;
        case (seconds < 14572):
            sceneHit = ("The King of the Golden Hall");
            break;
        case (seconds < 14652):
            sceneHit = ("Simbelmyne on the Burial Mounds");
            break;
        case (seconds < 14825):
            sceneHit = ("The King's Decision");
            break;
        case (seconds < 14898):
            sceneHit = ("A Daughter of Kings");
            break;
        case (seconds < 14957):
            sceneHit = ("Exodus from Edoras");
            break;
        case (seconds < 15053):
            sceneHit = ("The Forests of Ithilien");
            break;
        case (seconds < 15172):
            sceneHit = ("Gollum and Smeagol");
            break;
        case (seconds < 15496):
            sceneHit = ("Of Herbs and Stewed Rabbit");
            break;
        case (seconds < 15568):
            sceneHit = ("Dwarf Women");
            break;
        case (seconds < 15787):
            sceneHit = ("The Evenstar");
            break;
        case (seconds < 16255):
            sceneHit = ("The Wolves of Isengard");
            break;
        case (seconds < 16405):
            sceneHit = ("Helm's Deep");
            break;
        case (seconds < 16566):
            sceneHit = ("Isengard Unleashed");
            break;
        case (seconds < 16668):
            sceneHit = ("The Grace of the Valar");
            break;
        case (seconds < 16854):
            sceneHit = ("Arwen's Fate");
            break;
        case (seconds < 16976):
            sceneHit = ("The Story Foreseen from Lorien");
            break;
        case (seconds < 17127):
            sceneHit = ("The Window on the West");
            break;
        case (seconds < 17469):
            sceneHit = ("The Forbidden Pool");
            break;
        case (seconds < 17797):
            sceneHit = ("Aragorn's Return");
            break;
        case (seconds < 17886):
            sceneHit = ("Entmoot");
            break;
        case (seconds < 18002):
            sceneHit = ("The Glittering Caves");
            break;
        case (seconds < 18097):
            sceneHit = ('"Where is the Horse and the Rider?"');
            break;
        case (seconds < 18320):
            sceneHit = ("The Host of the Eldar");
            break;
        case (seconds < 18786):
            sceneHit = ("The Battle of the Hornburg");
            break;
        case (seconds < 18878):
            sceneHit = ("Old Entish");
            break;
        case (seconds < 19136):
            sceneHit = ("The Breach of the Deeping Wall");
            break;
        case (seconds < 19226):
            sceneHit = ("The Entmoot Decides");
            break;
        case (seconds < 19647):
            sceneHit = ("Retreat to the Hornburg");
            break;
        case (seconds < 19721):
            sceneHit = ("Master Peregrin's Plan");
            break;
        case (seconds < 19772):
            sceneHit = ("Osgiliath");
            break;
        case (seconds < 19892):
            sceneHit = ("The Last March of the Ents");
            break;
        case (seconds < 20042):
            sceneHit = ("The Nazgul Attack");
            break;
        case (seconds < 20339):
            sceneHit = ("Forth Eorlingas");
            break;
        case (seconds < 20526):
            sceneHit = ("The Flooding of Isengard");
            break;
        case (seconds < 20782):
            sceneHit = ("The Tales That Really Mattered...");
            break;
        case (seconds < 20878):
            sceneHit = ('"The Battle for Middle-earth is about to Begin"');
            break;
        case (seconds < 21031):
            sceneHit = ("Gollum's Plan");
            break;
        case (seconds < 21441):
            sceneHit = ("Credits");
            break;
        default:
            console.log("Switch Statement 2 Default Hit");
            break;
    }
    postResults();
}

function searchROTK(seconds) {
    console.log("%csearchROTK function HIT", "color: #00CC00");
    switch (true) {
        case (seconds < 21817):
            sceneHit = ("The Finding of the Ring");
            break;
        case (seconds < 22007):
            sceneHit = ("Journey to the Cross-roads");
            break;
        case (seconds < 22209):
            sceneHit = ("The Road to Isengard");
            break;
        case (seconds < 22379):
            sceneHit = ("Return to Edoras");
            break;
        case (seconds < 22598):
            sceneHit = ("Gollum's Villainy");
            break;
        case (seconds < 23021):
            sceneHit = ("The Palantir");
            break;
        case (seconds < 23196):
            sceneHit = ("Arwen's Vision");
            break;
        case (seconds < 23302):
            sceneHit = ("The Reforging of Narsil");
            break;
        case (seconds < 23600):
            sceneHit = ("Minas Tirith");
            break;
        case (seconds < 23728):
            sceneHit = ('"The Deep Breath Before the Plunge"');
            break;
        case (seconds < 23962):
            sceneHit = ("Minas Morgul");
            break;
        case (seconds < 23993):
            sceneHit = ('"The Board is Set..."');
            break;
        case (seconds < 24150):
            sceneHit = ("Osgiliath Invaded");
            break;
        case (seconds < 24295):
            sceneHit = ("The Lighting of the Beacons");
            break;
        case (seconds < 24790):
            sceneHit = ("Theoden's Decision");
            break;
        case (seconds < 123456789):
            sceneHit = ("The Fall of Osgiliath");
            break;
        case (seconds < 24902):
            sceneHit = ("The Stairs of Cirith Ungol");
            break;
        case (seconds < 25058):
            sceneHit = ("Allegiance to Denethor");
            break;
        case (seconds < 25370):
            sceneHit = ("The Parting of Sam and Frodo");
            break;
        case (seconds < 25693):
            sceneHit = ("The Sacrifice of Faramir");
            break;
        case (seconds < 26193):
            sceneHit = ("Marshalling at Dunharrow");
            break;
        case (seconds < 26218):
            sceneHit = ("Anduril - Flame of the West");
            break;
        case (seconds < 26370):
            sceneHit = ("Aragorn Takes the Paths of the Dead");
            break;
        case (seconds < 26439):
            sceneHit = ('"No More Despair"');
            break;
        case (seconds < 26575):
            sceneHit = ("Dwimorberg - The Haunted Mountain");
            break;
        case (seconds < 26714):
            sceneHit = ("The Muster for Rohan");
            break;
        case (seconds < 26895):
            sceneHit = ("The King of the Dead");
            break;
        case (seconds < 27440):
            sceneHit = ("The Siege of Gondor");
            break;
        case (seconds < 28022):
            sceneHit = ("Shelob's Lair");
            break;
        case (seconds < 28064):
            sceneHit = ("Grond - The Hammer of the Underworld");
            break;
        case (seconds < 28096):
            sceneHit = ("The Tomb of the Stewards");
            break;
        case (seconds < 28174):
            sceneHit = ("Breaking the Gate of Gondor");
            break;
        case (seconds < 28544):
            sceneHit = ("The Choices of Master Samwise");
            break;
        case (seconds < 28608):
            sceneHit = ("Denethor's Madness");
            break;
        case (seconds < 28997):
            sceneHit = ("The Ride of the Rohirrim");
            break;
        case (seconds < 29115):
            sceneHit = ("The Pyre of Denethor");
            break;
        case (seconds < 29400):
            sceneHit = ("The Battle of the Pelennore Fields");
            break;
        case (seconds < 29475):
            sceneHit = ('"A Far Green Country"');
            break;
        case (seconds < 29593):
            sceneHit = ("The Nazgul and His Prey");
            break;
        case (seconds < 29651):
            sceneHit = ("The Black Ships");
            break;
        case (seconds < 29705):
            sceneHit = ("Shieldmaiden of Rohan");
            break;
        case (seconds < 29851):
            sceneHit = ("Victory at Minas Tirith");
            break;
        case (seconds < 29941):
            sceneHit = ("The Passing of Theoden");
            break;
        case (seconds < 30034):
            sceneHit = ("Oaths Fulfilled");
            break;
        case (seconds < 30385):
            sceneHit = ("The Tower of Cirith Ungol");
            break;
        case (seconds < 30483):
            sceneHit = ("The Last Debate");
            break;
        case (seconds < 30654):
            sceneHit = ("The Land of Shadow");
            break;
        case (seconds < 30947):
            sceneHit = ("The Black Gate Opens");
            break;
        case (seconds < 31071):
            sceneHit = ('"I Can\'t Carry It for You... But I Can Carry You"');
            break;
        case (seconds < 31139):
            sceneHit = ("The Last Move");
            break;
        case (seconds < 31236):
            sceneHit = ("Mount Doom");
            break;
        case (seconds < 31272):
            sceneHit = ('"The Eagles are Coming!"');
            break;
        case (seconds < 31620):
            sceneHit = ("The Crack of Doom");
            break;
        case (seconds < 31758):
            sceneHit = ("Sauron Defeated");
            break;
        case (seconds < 31960):
            sceneHit = ("The End of All Things");
            break;
        case (seconds < 32079):
            sceneHit = ("The Fellowship Reunited");
            break;
        case (seconds < 32364):
            sceneHit = ("The Return of the King");
            break;
        case (seconds < 32613):
            sceneHit = ("Homeward Bound");
            break;
        case (seconds < 33067):
            sceneHit = ("The Grey Havens");
            break;
        case (seconds < 33067):
            sceneHit = ("The Grey Havens");
            break;
        case (seconds < 33486):
            sceneHit = ("End Credits");
            break;
        default:
            console.log("Switch Statement 3 Default Hit");
            break;


    }
    postResults();
}