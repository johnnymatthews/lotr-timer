const movie_data = [
    // START OF THE FELLOWSHIP
    {
        "end_time": 7,
        "scene": "Prologue: One Ring to Rule Them All...",
        "scene_description": "Cate Blanchett talks about what happened before this story begins. Like, this bit is literally just a prologue"
    }, {
        "end_time": 10,
        "scene": "Concerning Hobbits",
        "scene_description": "Gandalf goes on and on about hobbits and how they're mint and stuff"
    }, {
        "end_time": 15,
        "scene": "The Shire",
        "scene_description": "something happens in the Shire. Pretty sure it's just Frodo being a fanny"
    }, {
        "end_time": 19,
        "scene": "Very Old Friends",
        "scene_description": "Bilbo and Gandalf meet up and smoke a pipe"
    }, {
        "end_time": 25,
        "scene": "A Long Expected Party",
        "scene_description": "Bilbo has that massive rager of a party"
    }, {
        "end_time": 29,
        "scene": "Farewell Dear Bilbo",
        "scene_description": "Bilbo bugger off"
    }, {
        "end_time": 32,
        "scene": "Keep It Secret, Keep It Safe",
        "scene_description": "Gandalf loses his shit over a bloody ring"
    }, {
        "end_time": 34,
        "scene": "The Account of Isildur",
        "scene_description": "Gandalf runs off to somewhere and reads a bunch like a massive nerd"
    }, {
        "end_time": 36,
        "scene": "At the Green Dragon",
        "scene_description": "Frodo gets smashed"
    }, {
        "end_time": 45,
        "scene": "The Shadow of the Past",
        "scene_description": "Gandalf literally throws Frodo's shit in the fire"
    }, {
        "end_time": 46,
        "scene": "The Passing of the Elves",
        "scene_description": "the group sees all those elves in the woods"
    }, {
        "end_time": 51,
        "scene": "Saruman the White",
        "scene_description": "Christopher Lee gets to be a badass wizard"
    }, {
        "end_time": 55,
        "scene": "A Short Cut to Mushrooms",
        "scene_description": "The lads go scouting for psychedelics"
    }, {
        "end_time": 57,
        "scene": "Bucklebury Ferry",
        "scene_description": "Some horses and stuff chase down the kids"
    }, {
        "end_time": 63,
        "scene": "At the Sign of The Prancing Pony",
        "scene_description": "the lads end up at a pub and Pippin gets fucked"
    }, {
        "end_time": 67,
        "scene": "The Nazgul",
        "scene_description": "the hardcore cosplayers ruin the fuck out of a bed"
    }, {
        "end_time": 68,
        "scene": "The Midgewater Marshes",
        "scene_description": "same complains about nature. Plus there's loads of flies and crap"
    }, {
        "end_time": 70,
        "scene": "The Spoiling of Isengard",
        "scene_description": "Christopher Lee is still going crazy, ripping down trees and stuff"
    }, {
        "end_time": 75,
        "scene": "A Knife in the Dark",
        "scene_description": "Frodo gets shanked on Weathertop"
    }, {
        "end_time": 77,
        "scene": "The Caverns of Isengard",
        "scene_description": "something happens, can't really remember this one. Probably happens in Isengard."
    }, {
        "end_time": 84,
        "scene": "Flight to the Ford",
        "scene_description": "that elf woman shows up and saves the fucking day"
    }, {
        "end_time": 86,
        "scene": "Rivendell",
        "scene_description": "everyone has a party at Agent Smith's house"
    }, {
        "end_time": 89,
        "scene": "Many Meetings",
        "scene_description": "Frodo and Bilbo get back together and talk about being little and stuff"
    }, {
        "end_time": 93,
        "scene": "The Fate of the Ring",
        "scene_description": "Agent Smith puts a massive downer on Gandalf and pretty much says that they're all fucked"
    }, {
        "end_time": 95,
        "scene": "The Sword that was Broken",
        "scene_description": "Sean Bean doesn't die but he does drop a big sword, what a tit"
    }, {
        "end_time": 97,
        "scene": "The Evenstar",
        "scene_description": "lady elf and Aragon have some boring ass love scene. Nobody really watches this bit."
    }, {
        "end_time": 105,
        "scene": "The Council of Elrond",
        "scene_description": "there's a secret council that isn't secret"
    }, {
        "end_time": 106,
        "scene": "Gilraen's Memorial",
        "scene_description": "there something to do with a grave or something? I dunno, I'm usually asleep by this point"
    }, {
        "end_time": 108,
        "scene": "Bilbo's Gifts",
        "scene_description": "Bilbo gives Frodo some nice Primarni, and then promptly loses his shit"
    }, {
        "end_time": 110,
        "scene": "The Departure of The Fellowship",
        "scene_description": "the Lads go back on tour, with extra lads"
    }, {
        "end_time": 113,
        "scene": "The Ring Goes South",
        "scene_description": "south goes the ring"
    }, {
        "end_time": 117,
        "scene": "The Pass of Caradhras",
        "scene_description": "they all go up a mountain but things get a bit chilly"
    }, {
        "end_time": 124,
        "scene": "Moria",
        "scene_description": "Gimli gets bare excited but then they find out everyone's pretty much dead"
    }, {
        "end_time": 130,
        "scene": "A Journey in the Dark",
        "scene_description": "the lads wander around in the dark for a bit"
    }, {
        "end_time": 140,
        "scene": "Balin's Tomb",
        "scene_description": "Gimli completely loses his shit when he find out his Dad or brother or cousin or whatever is dead"
    }, {
        "end_time": 149,
        "scene": "The Bridge of Khazad Dum",
        "scene_description": "we get to hear Howard Shore's incredible talent"
    }, {
        "end_time": 153,
        "scene": "Lothlorien",
        "scene_description": "everyone's like 'Fuck Gandalf Died'. Oh and there's some trees and stuff"
    }, {
        "end_time": 160,
        "scene": "Caras Galadhon",
        "scene_description": "the lads all meet those blonde elf people that talk really slowly"
    }, {
        "end_time": 166,
        "scene": "The Mirror of Galadriel",
        "scene_description": "Cate Blanchett goes fucking mental at Frodo"
    }, {
        "end_time": 167,
        "scene": "The Fighting Uruk Hai",
        "scene_description": "we learn how the Uruk Hai are made. Spoiler: they come out of the ground like worms"
    }, {
        "end_time": 173,
        "scene": "Farewell to Lorien",
        "scene_description": "the lads carry on carrying on"
    }, {
        "end_time": 177,
        "scene": "The Great River",
        "scene_description": "they sail down a big as river for a bit"
    }, {
        "end_time": 184,
        "scene": "Parth Galen",
        "scene_description": "Uruk Hai attack the lads"
    }, {
        "end_time": 191,
        "scene": "The Breaking of the Fellowship",
        "scene_description": "Frodo makes a run for it with Sam"
    }, {
        "end_time": 194,
        "scene": "The Departure of Boromir",
        "scene_description": "Sean Bean dies"
    }, {
        "end_time": 200,
        "scene": "The Road Goes Ever On...",
        "scene_description": "Frodo and Sam realise they have no fucking clue where they're going"
    },
    {
        "end_time": 208,
        "scene": "The Credits",
        "scene_description": "you get to leave the cinema now. Well done"
    },
    // END OF THE FELLOWSHIP
    // START OF TWO TOWERS
    {
        "end_time": 4,
        "scene": "The Foundations of Stone,",
        "scene_description": "asdasd"
    },
    {
        "end_time": 39,
        "scene": "asdasd",
        "scene_description": "asdasdas"
    }, {
        "end_time": 100,
        "scene": "The Foundations of Stone",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Elven Rope",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Taming of Sméagol",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Uruk - hai",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Three Hunters",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Burnings of the Westfold",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Massacre at the Fords of Isen",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Banishment of Éomer",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "On the Trail of the Uruk - hai",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Night Camp at Fangorn",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Riders of Rohan",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Fate of Merry and Pippin",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Treebeard",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Passage of the Marshes",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The White Rider",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Songs of the Entwives",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Heir of Númenor",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Black Gate is Closed",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Ent Draft",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The King of the Golden Hall",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Funeral of Théodred",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Simbelmynë on the Burial Mounds",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The King's Decision",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Brego",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Ring of Barahir",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "A Daughter of Kings",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Exodus from Edoras",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Forests of Ithilien",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Gollum and Sméagol",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Of Herbs and Stewed Rabbit",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Dwarf Women",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "One of the Dúnedain",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Evenstar",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Wolves of Isengard",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Helm's Deep",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Isengard Unleashed",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Grace of the Valar",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Arwen's Fate",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Story Foreseen from Lórien",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Window on the West",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Sons of the Steward",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Forbidden Pool",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Aragorn's Return",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Entmoot",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Glittering Caves",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Where is the Horse and the Rider?",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Don't Be Hasty Master Meriadoc!",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Host of the Eldar",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Battle of the Hornburg",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Old Entish",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Breach of the Deeping Wall",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Entmoot Decides",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Retreat of the Hornburg",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Master Peregrin's Plan",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Osgiliath",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Last March of the Ents",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Nazgûl Attack",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Forth Eorlingas",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Flooding of Isengard",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Tales That Really Mattered...",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Fangorn Comes to Helm's Deep",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Final Tally",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Flotsam and Jetsam",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Farewell to Faramir",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Battle for Middle-earth is About to Begin",
        "scene_description": "example"
    }, {
        "end_time": 223,
        "scene": "Gollum's Plan",
        "scene_description": "example"
    },
    // END OF THE TWO TOWERS
    // START OF RETURN OF THE KING
    {
        "end_time": 100,
        "scene": "The Finding of the Ring ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Journey to the Cross-roads",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Road to Isengard ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Voice of Saruman ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Return to Edoras ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Gollum's Villainy",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Éowyn's Dream ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Palantír ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Arwen's Vision",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Reforging of Narsil",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Minas Tirith ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Decline of Gondor ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Cross-roads of the Fallen King ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Deep Breath Before the Plunge",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Minas Morgul",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Sam's Warning ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Pippin's Task",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Osgiliath Invaded ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Lighting of the Beacons",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Théoden's Decision ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Fall of Osgiliath ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Wizard's Pupil ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Stairs of Cirith Ungol",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Courage Is the Best Defense",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Peregrin of the Tower Guard ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Allegiance to Denethor",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Parting of Sam and Frodo",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Sacrifice of Faramir ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Marshalling at Dunharrow ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Andúril - Flame of the West",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Aragorn Takes the Paths of the Dead ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "No More Despair",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Dwimorberg - The Haunted Mountain ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Muster of Rohan",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Paths of the Dead ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Siege of Gondor ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Corsairs of Umbar ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Shelob's Lair",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Merry's Simple Courage ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Grond - The Hammer of the Underworld",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Tombs of the Stewards ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Breaking the Gate of Gondor",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Choices of Master Samwise",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Denethor's Madness",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Witch King's Hour ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Ride of the Rohirrim",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Pyre of Denethor ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Battle of the Pelennor Fields ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "A Far Green Country",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Nazgûl and His Prey",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Black Ships",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Shieldmaiden of Rohan",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Victory at Minas Tirith ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Passing of Théoden",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Oaths Fulfilled",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Houses of Healing ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Pippin Looks After Merry ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Tower of Cirith Ungol ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Last Debate ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Aragorn Masters the Palantír ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Captain and the White Lady ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "In the Company of Orcs ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Land of Shadow ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Mouth of Sauron ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Black Gate Opens",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "I Can't Carry It for You... but I Can Carry You.",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Last Move",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Mount Doom ",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Eagles are Coming!",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Crack of Doom",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Sauron Defeated",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The End of All Things",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Fellowship Reunited",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Return of the King",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Homeward Bound",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "The Grey Havens",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Credits",
        "scene_description": "example"
    }, {
        "end_time": 100,
        "scene": "Official Fan Club Credits  ",
        "scene_description": "example"
    },
];