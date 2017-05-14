/*
	ACDB - Animal Crossing Database
	*******************************
	Author: 	James Hill
	Date: 		8th May 2017
*/

(function(){

	var m_DATA = {
		groups: {
			'clothing': {
				'hats': '9',
				'accessories': '20',
				'tops': '19',
				'bottoms': '2',
				'dresses': '18',
				'socks': '24',
				'shoes': '6',
				'umbrellas': '8'
			},
			'furniture': {
				'furniture': '1',
				'wallpaper': '3',
				'flooring': '4',
				'music': '21',
				'gyroids': '10'
			},
			'museum': {
				'bugs': '17',
				'fish': '5',
				'fossils': '14',
				'art': '16'
			},
			'nature': {
				'trees': '11',
				'fruit': '15',
				'flowers': '26',
				'mushrooms': '12',
				'seashells': '7',
				'ore': '22'
			},
			'equipment': {
				'tools': '13',
				'balloons': '25',
				'stationery': '23'
			}
		},
		sets: [
			{
				"id": "1",
				"name": "Alpine",
				"slug": "alpine",
				"group": "furniture-series"
			},{
				"id": "2",
				"name": "Astro",
				"slug": "astro",
				"group": "furniture-series"
			},{
				"id": "3",
				"name": "Balloon",
				"slug": "balloon",
				"group": "furniture-series"
			},{
				"id": "4",
				"name": "Blue",
				"slug": "blue",
				"group": "furniture-series"
			},{
				"id": "5",
				"name": "Cabana",
				"slug": "cabana",
				"group": "furniture-series"
			},{
				"id": "6",
				"name": "Cabin",
				"slug": "cabin",
				"group": "furniture-series"
			},{
				"id": "7",
				"name": "Card",
				"slug": "card",
				"group": "furniture-series"
			},{
				"id": "8",
				"name": "Classic",
				"slug": "classic",
				"group": "furniture-series"
			},{
				"id": "9",
				"name": "Egg",
				"slug": "egg",
				"group": "furniture-series"
			},{
				"id": "10",
				"name": "Exotic",
				"slug": "exotic",
				"group": "furniture-series"
			},{
				"id": "11",
				"name": "Fish",
				"slug": "fish",
				"group": "furniture-series"
			},{
				"id": "12",
				"name": "Golden",
				"slug": "golden",
				"group": "furniture-series"
			},{
				"id": "13",
				"name": "Gorgeous",
				"slug": "gorgeous",
				"group": "furniture-series"
			},{
				"id": "14",
				"name": "Gracie",
				"slug": "gracie",
				"group": "furniture-series"
			},{
				"id": "15",
				"name": "Green",
				"slug": "green",
				"group": "furniture-series"
			},{
				"id": "16",
				"name": "Harvest",
				"slug": "harvest",
				"group": "furniture-series"
			},{
				"id": "17",
				"name": "Ice",
				"slug": "ice",
				"group": "furniture-series"
			},{
				"id": "18",
				"name": "Insect",
				"slug": "insect",
				"group": "furniture-series"
			},{
				"id": "19",
				"name": "Jingle",
				"slug": "jingle",
				"group": "furniture-series"
			},{
				"id": "20",
				"name": "Kiddie",
				"slug": "kiddie",
				"group": "furniture-series"
			},{
				"id": "21",
				"name": "Lovely",
				"slug": "lovely",
				"group": "furniture-series"
			},{
				"id": "22",
				"name": "Mermaid",
				"slug": "mermaid",
				"group": "furniture-series"
			},{
				"id": "23",
				"name": "Minimalist",
				"slug": "minimalist",
				"group": "furniture-series"
			},{
				"id": "24",
				"name": "Modern",
				"slug": "modern",
				"group": "furniture-series"
			},{
				"id": "25",
				"name": "Modern Wood",
				"slug": "modern-wood",
				"group": "furniture-series"
			},{
				"id": "26",
				"name": "Mush",
				"slug": "mush",
				"group": "furniture-series"
			},{
				"id": "27",
				"name": "Pavé",
				"slug": "pave",
				"group": "furniture-series"
			},{
				"id": "28",
				"name": "Polka-dot",
				"slug": "polka-dot",
				"group": "furniture-series"
			},{
				"id": "29",
				"name": "Princess",
				"slug": "princess",
				"group": "furniture-series"
			},{
				"id": "30",
				"name": "Ranch",
				"slug": "ranch",
				"group": "furniture-series"
			},{
				"id": "31",
				"name": "Regal",
				"slug": "regal",
				"group": "furniture-series"
			},{
				"id": "32",
				"name": "Robo",
				"slug": "robo",
				"group": "furniture-series"
			},{
				"id": "33",
				"name": "Rococo",
				"slug": "rococo",
				"group": "furniture-series"
			},{
				"id": "34",
				"name": "Sleek",
				"slug": "sleek",
				"group": "furniture-series"
			},{
				"id": "35",
				"name": "Sloppy",
				"slug": "sloppy",
				"group": "furniture-series"
			},{
				"id": "36",
				"name": "Snowman",
				"slug": "snowman",
				"group": "furniture-series"
			},{
				"id": "37",
				"name": "Spooky",
				"slug": "spooky",
				"group": "furniture-series"
			},{
				"id": "38",
				"name": "Stripe",
				"slug": "stripe",
				"group": "furniture-series"
			},{
				"id": "39",
				"name": "Sweets",
				"slug": "sweets",
				"group": "furniture-series"
			},{
				"id": "40",
				"name": "Boxing",
				"slug": "boxing",
				"group": "furniture-theme"
			},{
				"id": "41",
				"name": "Classroom",
				"slug": "classroom",
				"group": "furniture-theme"
			},{
				"id": "42",
				"name": "Construction",
				"slug": "construction",
				"group": "furniture-theme"
			},{
				"id": "43",
				"name": "Mad Scientist",
				"slug": "mad-scientist",
				"group": "furniture-theme"
			},{
				"id": "44",
				"name": "Mario",
				"slug": "mario",
				"group": "furniture-theme"
			},{
				"id": "45",
				"name": "Mossy Garden",
				"slug": "mossy-garden",
				"group": "furniture-theme"
			},{
				"id": "46",
				"name": "Nursery",
				"slug": "nursery",
				"group": "furniture-theme"
			},{
				"id": "47",
				"name": "Pirate Ship",
				"slug": "pirate-ship",
				"group": "furniture-theme"
			},{
				"id": "48",
				"name": "Spa",
				"slug": "spa",
				"group": "furniture-theme"
			},{
				"id": "49",
				"name": "Space",
				"slug": "space",
				"group": "furniture-theme"
			},{
				"id": "50",
				"name": "Western",
				"slug": "western",
				"group": "furniture-theme"
			},{
				"id": "51",
				"name": "Apple",
				"slug": "apple",
				"group": "furniture-set"
			},{
				"id": "52",
				"name": "Bear",
				"slug": "bear",
				"group": "furniture-set"
			},{
				"id": "53",
				"name": "Bonsai",
				"slug": "bonsai",
				"group": "furniture-set"
			},{
				"id": "54",
				"name": "Cactus",
				"slug": "cactus",
				"group": "furniture-set"
			},{
				"id": "55",
				"name": "Café",
				"slug": "cafe",
				"group": "furniture-set"
			},{
				"id": "56",
				"name": "Chess",
				"slug": "chess",
				"group": "furniture-set"
			},{
				"id": "57",
				"name": "Citrus",
				"slug": "citrus",
				"group": "furniture-set"
			},{
				"id": "58",
				"name": "Creepy",
				"slug": "creepy",
				"group": "furniture-set"
			},{
				"id": "59",
				"name": "Dharma",
				"slug": "dharma",
				"group": "furniture-set"
			},{
				"id": "60",
				"name": "Dr.'s Office",
				"slug": "drs-office",
				"group": "furniture-set"
			},{
				"id": "61",
				"name": "Drum",
				"slug": "drum",
				"group": "furniture-set"
			},{
				"id": "62",
				"name": "Flower",
				"slug": "flower",
				"group": "furniture-set"
			},{
				"id": "63",
				"name": "Frog",
				"slug": "frog",
				"group": "furniture-set"
			},{
				"id": "64",
				"name": "Guitar",
				"slug": "guitar",
				"group": "furniture-set"
			},{
				"id": "65",
				"name": "Homework",
				"slug": "homework",
				"group": "furniture-set"
			},{
				"id": "66",
				"name": "House Plant",
				"slug": "house-plant",
				"group": "furniture-set"
			},{
				"id": "67",
				"name": "Lucky Cat",
				"slug": "lucky-cat",
				"group": "furniture-set"
			},{
				"id": "68",
				"name": "Museum",
				"slug": "museum",
				"group": "furniture-set"
			},{
				"id": "69",
				"name": "Nintendo",
				"slug": "nintendo",
				"group": "furniture-set"
			},{
				"id": "70",
				"name": "Office",
				"slug": "office",
				"group": "furniture-set"
			},{
				"id": "71",
				"name": "Panda",
				"slug": "panda",
				"group": "furniture-set"
			},{
				"id": "72",
				"name": "Pear",
				"slug": "pear",
				"group": "furniture-set"
			},{
				"id": "73",
				"name": "Pine",
				"slug": "pine",
				"group": "furniture-set"
			},{
				"id": "74",
				"name": "Pine Tree",
				"slug": "pine-tree",
				"group": "furniture-set"
			},{
				"id": "75",
				"name": "String Section",
				"slug": "string-section",
				"group": "furniture-set"
			},{
				"id": "76",
				"name": "Totem Pole",
				"slug": "totem-pole",
				"group": "furniture-set"
			},{
				"id": "77",
				"name": "Vase",
				"slug": "vase",
				"group": "furniture-set"
			},{
				"id": "78",
				"name": "Watermelon",
				"slug": "watermelon",
				"group": "furniture-set"
			},{
				"id": "79",
				"name": "Zen",
				"slug": "zen",
				"group": "furniture-set"
			},{
				"id": "80",
				"name": "Zen Garden",
				"slug": "zen-garden",
				"group": "furniture-set"
			},{
				"id": "81",
				"name": "Alpinist Outfit",
				"slug": "alpinist-outfit",
				"group": "clothing"
			},{
				"id": "82",
				"name": "Astronaut Outfit",
				"slug": "astronaut-outfit",
				"group": "clothing"
			},{
				"id": "83",
				"name": "Bear Outfit",
				"slug": "bear-outfit",
				"group": "clothing"
			},{
				"id": "84",
				"name": "Blue Superhero Outfit",
				"slug": "blue-superhero-outfit",
				"group": "clothing"
			},{
				"id": "85",
				"name": "Bounty Hunter Outfit",
				"slug": "bounty-hunter-outfit",
				"group": "clothing"
			},{
				"id": "86",
				"name": "Cat Outfit",
				"slug": "cat-outfit",
				"group": "clothing"
			},{
				"id": "87",
				"name": "Cavalier Outfit",
				"slug": "cavalier-outfit",
				"group": "clothing"
			},{
				"id": "88",
				"name": "Centurion Outfit",
				"slug": "centurion-outfit",
				"group": "clothing"
			},{
				"id": "89",
				"name": "Chef Outfit",
				"slug": "chef-outfit",
				"group": "clothing"
			},{
				"id": "90",
				"name": "Chief Outfit",
				"slug": "chief-outfit",
				"group": "clothing"
			},{
				"id": "91",
				"name": "Cowboy Outfit",
				"slug": "cowboy-outfit",
				"group": "clothing"
			},{
				"id": "92",
				"name": "Cyclist Outfit",
				"slug": "cyclist-outfit",
				"group": "clothing"
			},{
				"id": "93",
				"name": "Dancer Outfit",
				"slug": "dancer-outfit",
				"group": "clothing"
			},{
				"id": "94",
				"name": "Detective Outfit",
				"slug": "detective-outfit",
				"group": "clothing"
			},{
				"id": "95",
				"name": "Doctor Outfit",
				"slug": "doctor-outfit",
				"group": "clothing"
			},{
				"id": "96",
				"name": "Explorer Outfit",
				"slug": "explorer-outfit",
				"group": "clothing"
			},{
				"id": "97",
				"name": "Firefighter Outfit",
				"slug": "firefighter-outfit",
				"group": "clothing"
			},{
				"id": "98",
				"name": "Frog Outfit",
				"slug": "frog-outfit",
				"group": "clothing"
			},{
				"id": "99",
				"name": "Geisha Outfit",
				"slug": "geisha-outfit",
				"group": "clothing"
			},{
				"id": "100",
				"name": "Genie Outfit",
				"slug": "genie-outfit",
				"group": "clothing"
			},{
				"id": "101",
				"name": "Grape Outfit",
				"slug": "grape-outfit",
				"group": "clothing"
			},{
				"id": "102",
				"name": "Green Superhero Outfit",
				"slug": "green-superhero-outfit",
				"group": "clothing"
			},{
				"id": "103",
				"name": "Hero Outfit",
				"slug": "hero-outfit",
				"group": "clothing"
			},{
				"id": "104",
				"name": "Imperial Outfit",
				"slug": "imperial-outfit",
				"group": "clothing"
			},{
				"id": "105",
				"name": "Jester Outfit",
				"slug": "jester-outfit",
				"group": "clothing"
			},{
				"id": "106",
				"name": "Kappa Outfit",
				"slug": "kappa-outfit",
				"group": "clothing"
			},{
				"id": "107",
				"name": "King Outfit",
				"slug": "king-outfit",
				"group": "clothing"
			},{
				"id": "108",
				"name": "Kiwi Outfit",
				"slug": "kiwi-outfit",
				"group": "clothing"
			},{
				"id": "109",
				"name": "Knight Outfit",
				"slug": "knight-outfit",
				"group": "clothing"
			},{
				"id": "110",
				"name": "Melon Outfit",
				"slug": "melon-outfit",
				"group": "clothing"
			},{
				"id": "111",
				"name": "Milkmaid Outfit",
				"slug": "milkmaid-outfit",
				"group": "clothing"
			},{
				"id": "112",
				"name": "Mummy Outfit",
				"slug": "mummy-outfit",
				"group": "clothing"
			},{
				"id": "113",
				"name": "Ninja Outfit",
				"slug": "ninja-outfit",
				"group": "clothing"
			},{
				"id": "114",
				"name": "Pharaoh Outfit",
				"slug": "pharaoh-outfit",
				"group": "clothing"
			},{
				"id": "115",
				"name": "Pilot Outfit",
				"slug": "pilot-outfit",
				"group": "clothing"
			},{
				"id": "116",
				"name": "Pink Superheroine",
				"slug": "pink-superheroine",
				"group": "clothing"
			},{
				"id": "117",
				"name": "Pirate Outfit",
				"slug": "pirate-outfit",
				"group": "clothing"
			},{
				"id": "118",
				"name": "Police Officer Outfit",
				"slug": "police-officer-outfit",
				"group": "clothing"
			},{
				"id": "119",
				"name": "Pro Wrestler Outfit",
				"slug": "pro-wrestler-outfit",
				"group": "clothing"
			},{
				"id": "120",
				"name": "Rabbit Outfit",
				"slug": "rabbit-outfit",
				"group": "clothing"
			},{
				"id": "121",
				"name": "Racer Outfit",
				"slug": "racer-outfit",
				"group": "clothing"
			},{
				"id": "122",
				"name": "Red Superhero Outfit",
				"slug": "red-superhero-outfit",
				"group": "clothing"
			},{
				"id": "123",
				"name": "Sailor Outfit",
				"slug": "sailor-outfit",
				"group": "clothing"
			},{
				"id": "124",
				"name": "Samurai Outfit",
				"slug": "samurai-outfit",
				"group": "clothing"
			},{
				"id": "125",
				"name": "Scholar Outfit",
				"slug": "scholar-outfit",
				"group": "clothing"
			},{
				"id": "126",
				"name": "Soldier Outfit",
				"slug": "soldier-outfit",
				"group": "clothing"
			},{
				"id": "127",
				"name": "Spa Patron Outfit",
				"slug": "spa-patron-outfit",
				"group": "clothing"
			},{
				"id": "128",
				"name": "Strawberry Outfit",
				"slug": "strawberry-outfit",
				"group": "clothing"
			},{
				"id": "129",
				"name": "Tangerine Outfit",
				"slug": "tangerine-outfit",
				"group": "clothing"
			},{
				"id": "130",
				"name": "Vaquero Outfit",
				"slug": "vaquero-outfit",
				"group": "clothing"
			},{
				"id": "131",
				"name": "Viking Outfit",
				"slug": "viking-outfit",
				"group": "clothing"
			},{
				"id": "132",
				"name": "Watermelon Outfit",
				"slug": "watermelon-outfit",
				"group": "clothing"
			},{
				"id": "133",
				"name": "Wedding Outfit",
				"slug": "wedding-outfit",
				"group": "clothing"
			},{
				"id": "134",
				"name": "Witch Outfit",
				"slug": "witch-outfit",
				"group": "clothing"
			},{
				"id": "135",
				"name": "Worker Outfit",
				"slug": "worker-outfit",
				"group": "clothing"
			},{
				"id": "136",
				"name": "Welcome amiibo Update",
				"slug": "welcome",
				"group": "other"
			},{
				"id": ""
			}
		],
		items: null
	};

	var m_LoadedItems = false,
		m_ItemDataPath = '../data/items.json',
		m_ImageDir = 'data/images/',
		m_TEMPLATE_REGEX = /{{([^}}]+)?}}/g,
		m_TEMPLATE_TAGS = {
		    opening: '{{',
		    closing: '}}'
		},
		m_TEMPLATE_VALUES = {
			tvDropdownItemText: 'tvDropdownItemText',
			tvListItemText: 'tvListItemText',
			tvItemName: 'tvItemName',
			tvGroupName: 'tvGroupName',
			tvCategoryId: 'tvCategoryId',
			tvItemCategory : 'tvItemCategory',
			tvItemImgSrc : 'tvItemImgSrc',
			tvItemBuyPrice : 'tvItemBuyPrice',
			tvItemSellPrice : 'tvItemSellPrice',
			tvItemObtainedFrom : 'tvItemObtainedFrom',
			tvItemAppears : 'tvItemAppears',
			tvItemInteriorTheme : 'tvItemInteriorTheme',
			tvItemFashionTheme : 'tvItemFashionTheme'
		},
		m_TEMPLATE_HTML = {
			dropdownItem: '<option class="acdb__input-item acdb__input-item--dropdown">{{tvDropdownItemText}}</option>',
			groupItem: '<li class="acdb__input-item acdb__input-item--list" data-group-item data-group-item-id="{{tvGroupId}}">{{tvListItemText}}</li>',
			categoryItem: '<li class="acdb__input-item acdb__input-item--list" data-category-item>{{tvListItemText}}</li>',
			resultItem: '<li class="acdb__results-item">' +
							'<h3 class="acdb__results-item-title">{{tvItemName}}</h3>' +
							'<div class="acdb__results-item-panel">' +
								'<div class="acdb__results-item-col acdb__results-item-col--small">' +
									'<div class="acdb__results-item-datum">' +
										'<div class="acdb__results-item-datum-label">Category:</div>' +
										'<div class="acdb__results-item-datum-data">{{tvItemCategory}}</div>' +
									'</div>' +
									'<img class="acdb__results-item-image" src="{{tvItemImgSrc}}">' +
									'<div class="acdb__results-item-datum">' +
										'<div class="acdb__results-item-datum-label">Buy price:</div>' +
										'<div class="acdb__results-item-datum-data">{{tvItemBuyPrice}}</div>' +
									'</div>' +
									'<div class="acdb__results-item-datum">' +
										'<div class="acdb__results-item-datum-label">Sell price:</div>' +
										'<div class="acdb__results-item-datum-data">{{tvItemSellPrice}}</div>' +
									'</div>' +
								'</div>' +
								'<div class="acdb__results-item-col acdb__results-item-col--large">' +
									'<div class="acdb__results-item-datum">' +
										'<div class="acdb__results-item-datum-label">Obtained from:</div>' +
										'<div class="acdb__results-item-datum-data">{{tvItemObtainedFrom}}</div>' +
									'</div>' +
									'<div class="acdb__results-item-datum">' +
										'<div class="acdb__results-item-datum-label">Appears:</div>' +
										'<div class="acdb__results-item-datum-data">{{tvItemAppears}}</div>' +
									'</div>' +
									'<div class="acdb__results-item-datum">' +
										'<div class="acdb__results-item-datum-label">Interior theme:</div>' +
										'<div class="acdb__results-item-datum-data">{{tvItemInteriorTheme}}</div>' +
									'</div>' +
									'<div class="acdb__results-item-datum">' +
										'<div class="acdb__results-item-datum-label">Fashion theme:</div>' +
										'<div class="acdb__results-item-datum-data">{{tvItemFashionTheme}}</div>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</li>'
		},
		m_SELECTORS = {
			searchBox: '#acdb-input-search',
			clearSearch: '#acdb-search-clear',
			filterLocation: '#acdb-input-filter-location',
			clearFilterLocation: '#acdb-filter-location-clear',
			filterInteriorTheme: '#acdb-input-filter-interiortheme',
			clearFilterInteriorTheme: '#acdb-filter-interiortheme-clear',
			filterFashionTheme: '#acdb-input-filter-fashiontheme',
			clearFilterFashionTheme: '#acdb-filter-fashiontheme-clear',
			listGroup: '#acdb-list-group',
			listCategory: '#acdb-list-category',
			buttonReset: '#acdb-button-reset',
			lightboxOpen: '#acdb-help-button',
			lightboxClose: '#acdb-lightbox-close',
			dropdownSort: '#acdb-sort-results',
			groupItem: '[data-group-item]',
			categoryItem: '[data-category-item]',
			resultsList: '#acdb-list-results',
			loadingOverlay: '#acdb-results-loading',
			lightbox: '#help-info'
		},
		m_MODIFIER_CLASSES = {
			selected: 'is--selected',
			active: 'is--active'
		},
		m_SearchDelay = 250,
		m_MatchingItems = {
			nameExact: [],
			namePartial: []
		};


	/* Utils
	********/

	// Debounce from Underscore.js - https://davidwalsh.name/javascript-debounce-function
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};


	function populateTemplate( templateString, replacementValues ) {

	    // Get a list of all tags in the template string
	    var tags = templateString.match( m_TEMPLATE_REGEX );

	    if ( tags !== null ) {

	        // For each tag in the templateString
	        var tagsLen = tags.length;

	        for ( var t = 0; t < tagsLen; t++ ) {

	            var tag = tags[ t ],
	                rvKey = tag.replace( m_TEMPLATE_TAGS.opening, '' ).replace( m_TEMPLATE_TAGS.closing, '' );

	            // Only try to replace the tag if a replacement value corresponding to the tag was supplied.
	            // This allows populateTemplate to be called multiple times on the same template without mangling it.
	            if ( replacementValues.hasOwnProperty( rvKey ) ) {

	                templateString = templateString.replace( tag, replacementValues[ rvKey ] );
	            }
	        }
	    }

	    // Return the processed string
	    return templateString;
	}


	/* Event handlers
	*****************/
	function handleSearchKeyup(){

		search(
			$( m_SELECTORS.searchBox ).val(),
			$( m_SELECTORS.filterLocation ).val(),
			$( m_SELECTORS.filterInteriorTheme ).val(),
			$( m_SELECTORS.filterFashionTheme ).val(),
			$( m_SELECTORS.groupItem ).filter( '.' + m_MODIFIER_CLASSES.selected ).text(),
			$( m_SELECTORS.categoryItem ).filter( '.' + m_MODIFIER_CLASSES.selected ).text()
		);
	}


	function handleFilterLocationChange( e ){

		console.log('handleFilterLocationChange');
	}


	function handleFilterInteriorThemeChange( e ){

		console.log('handleFilterInteriorThemeChange');
	}


	function handleFilterFashionThemeChange( e ){

		console.log('handleFilterFashionThemeChange');
	}


	function handleListItemGroupClick( $this, e ){

		console.log('handleListItemGroupClick');

		$( m_SELECTORS.groupItem ).removeClass( m_MODIFIER_CLASSES.selected );
		$this.addClass( m_MODIFIER_CLASSES.selected );

		handleSearchKeyup();
	}


	function handleListItemCategoryClick( $this, e ){

		console.log('handleListItemCategoryClick');

		$( m_SELECTORS.categoryItem ).removeClass( m_MODIFIER_CLASSES.selected );
		$this.addClass( m_MODIFIER_CLASSES.selected );

		handleSearchKeyup();
	}


	function handleButtonResetClick( e ){

		console.log('handleButtonResetClick');

		init();
	}


	function handleLightboxOpenClick( e ){

		console.log('handleLightboxOpenClick');

		$( m_SELECTORS.lightbox ).addClass( m_MODIFIER_CLASSES.active );
	}


	function handleLightboxCloseClick( e ){

		console.log('handleLightboxCloseClick');

		$( m_SELECTORS.lightbox ).removeClass( m_MODIFIER_CLASSES.active );
	}


	function handleDropdownSortChange( e ){

		handleSearchKeyup();
	}


	function bindListeners(){

		// Search box
		$( m_SELECTORS.searchBox ).on('keyup', debounce(function(e){

			handleSearchKeyup();

		}, m_SearchDelay));

		// Clear search box
		$( m_SELECTORS.clearSearch ).on('click', function(e){

			$( m_SELECTORS.searchBox ).val('');
			handleSearchKeyup();
		});

		// filter dropdowns
		$( m_SELECTORS.filterLocation ).on('keyup', debounce(function(e){

			handleSearchKeyup();

		}, m_SearchDelay));

		$( m_SELECTORS.filterInteriorTheme ).on('keyup', debounce(function(e){

			handleSearchKeyup();

		}, m_SearchDelay));

		$( m_SELECTORS.filterFashionTheme ).on('keyup', debounce(function(e){

			handleSearchKeyup();

		}, m_SearchDelay));

		// Clear filter boxes
		$( m_SELECTORS.clearFilterLocation ).on('click', function(e){

			$( m_SELECTORS.filterLocation ).val('');
			handleSearchKeyup();
		});

		$( m_SELECTORS.clearFilterInteriorTheme ).on('click', function(e){

			$( m_SELECTORS.filterInteriorTheme ).val('');
			handleSearchKeyup();
		});

		$( m_SELECTORS.clearFilterFashionTheme ).on('click', function(e){

			$( m_SELECTORS.filterFashionTheme ).val('');
			handleSearchKeyup();
		});

		// list items - group
		$( m_SELECTORS.groupItem ).on('click', function(e){

			handleListItemGroupClick( $(this), e );
		});

		// list category - category
		$( m_SELECTORS.categoryItem ).on('click', function(e){

			handleListItemCategoryClick( $(this), e );
		});

		// reset button
		$( m_SELECTORS.buttonReset ).on('click', function(e){

			handleButtonResetClick( e );
		});

		// sort dropdown
		$( m_SELECTORS.dropdownSort ).on('change', function(e){

			handleDropdownSortChange( e );
		});

		// lightbox open button
		$( m_SELECTORS.lightboxOpen ).on('click', function(e){

			handleLightboxOpenClick( e );
		});

		// lightbox close button
		$( m_SELECTORS.lightboxClose ).on('click', function(e){

			handleLightboxCloseClick( e );
		});
	}


	function loadJsonData(){

		$.ajax({
			url: m_ItemDataPath,
			success: function( data ){
				
				m_DATA.items = data;
				m_LoadedItems = true;

				onDataLoaded();
			},
			error: function( jqXHR, stat, err){

				console.log( "ACDB.init : error loading item data. Details:" );
				console.log(stat);
				console.log(err);
			}
		});
	}


	function populateGroups(){

		var groupsHtml = '';

		// Add default group
		groupsHtml += populateTemplate( m_TEMPLATE_HTML.groupItem, {
			tvListItemText: 'all',
			tvGroupId: '-1'
		});

		// For each group
		for( var groupName in m_DATA.groups ){

			var group = m_DATA.groups[ groupName ];

			groupsHtml += populateTemplate( m_TEMPLATE_HTML.groupItem, {
				tvListItemText: groupName,
				tvGroupId: groupName
			});
		}

		$( m_SELECTORS.listGroup ).html( groupsHtml );

		// Select first item by default
		$( m_SELECTORS.groupItem ).eq(0).addClass( m_MODIFIER_CLASSES.selected );
	}


	function populateCategories(){

		// For each category in the selected group
		var selectedGroupName = $( m_SELECTORS.groupItem ).filter( '.' + m_MODIFIER_CLASSES.selected ).eq(0).attr( 'data-group-item-id' );

		if( !m_DATA.groups.hasOwnProperty( selectedGroupName ) && selectedGroupName !== '-1' ){

			console.log('ERROR: selectedGroupName "' + selectedGroupName + '" not found in groups data');
			return;
		}

		var categoriesHtml = '';

		// Add default category, selected
		categoriesHtml += populateTemplate( m_TEMPLATE_HTML.categoryItem, {
			tvListItemText: 'all',
			tvGroupId: '-1'
		});

		if( selectedGroupName === '-1' ){

			for( var groupKey in m_DATA.groups ){
				if( m_DATA.groups.hasOwnProperty( groupKey ) ){

					var group = m_DATA.groups[ groupKey ];

					for( var categoryKey in group ){
						if( group.hasOwnProperty( categoryKey ) ){

							categoriesHtml += populateTemplate( m_TEMPLATE_HTML.categoryItem, {
								tvListItemText: categoryKey,
								tvCategoryId: categoryId
							});
						}
					}
				}
			}

		}else{

			var selectedGroup = m_DATA.groups[ selectedGroupName ];

			for( var categoryKey in selectedGroup ){
				if( selectedGroup.hasOwnProperty( categoryKey ) ){

					var categoryId = selectedGroup[ categoryKey ];

					categoriesHtml += populateTemplate( m_TEMPLATE_HTML.categoryItem, {
						tvListItemText: categoryKey,
						tvCategoryId: categoryId
					});
				}
			}
		}

		$( m_SELECTORS.listCategory ).html( categoriesHtml );

		// Select first item by default
		$( m_SELECTORS.categoryItem ).eq(0).addClass( m_MODIFIER_CLASSES.selected );
	}


	function populateUI(){

		populateGroups();
		populateCategories();
	}


	function getCategoryById( id ){

		if( id === '-1' ){

			return 'all';
		}

		for( var groupKey in m_DATA.groups ){
			if( m_DATA.groups.hasOwnProperty( groupKey ) ){

				var group = m_DATA.groups[ groupKey ];

				for( var categoryKey in group ){
					if( group.hasOwnProperty( categoryKey ) ){
						
						var categoryId = group[ categoryKey ];

						if( categoryId === id ){

							return categoryKey;
						}
					}
				}
			}
		}

		return '';
	}


	function escapeRegExp(str) {
	  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	}


	function populateSearchResults(){

		var resultsHtml = '';

		for( var ne = 0; ne < m_MatchingItems.nameExact.length; ne++ ){

			var matchingItem = m_MatchingItems.nameExact[ ne ];

			resultsHtml += populateTemplate( m_TEMPLATE_HTML.resultItem, {
				tvItemName: matchingItem[ 'name' ],
				tvItemCategory: getCategoryById( matchingItem[ 'category_id' ] ),
				tvItemImgSrc: m_ImageDir + matchingItem[ 'image' ].replace('items/', ''),
				tvItemBuyPrice: matchingItem[ 'purchase_value' ],
				tvItemSellPrice: matchingItem[ 'sell_value' ],
				tvItemObtainedFrom: matchingItem[ 'obtained_from' ],
				tvItemAppears: matchingItem[ 'catch_appearance' ],
				tvItemFashionTheme: matchingItem[ 'clothing_style' ],
				tvItemInteriorTheme: matchingItem[ 'hha_theme' ]
			});
		}

		for( var np = 0; np < m_MatchingItems.namePartial.length; np++ ){

			var matchingItem = m_MatchingItems.namePartial[ np ];

			resultsHtml += populateTemplate( m_TEMPLATE_HTML.resultItem, {
				tvItemName: matchingItem[ 'name' ],
				tvItemCategory: getCategoryById( matchingItem[ 'category_id' ] ),
				tvItemImgSrc: m_ImageDir + matchingItem[ 'image' ].replace('items/', ''),
				tvItemBuyPrice: matchingItem[ 'purchase_value' ],
				tvItemSellPrice: matchingItem[ 'sell_value' ],
				tvItemObtainedFrom: matchingItem[ 'obtained_from' ],
				tvItemAppears: matchingItem[ 'catch_appearance' ],
				tvItemFashionTheme: matchingItem[ 'clothing_style' ],
				tvItemInteriorTheme: matchingItem[ 'hha_theme' ]
			});
		}

		$( m_SELECTORS.resultsList ).html( resultsHtml );
	}


	function normaliseSearchString( str ){

		str = str.replace(/-/g, ' ');
		str = str.replace(/'/g, ' ');
		str = str.replace(/_/g, ' ');

		return str;
	}

	function performSearch( term, location, interiorTheme, fashionTheme, group, category ){

		m_MatchingItems.nameExact = [];
		m_MatchingItems.namePartial = [];

		if( term.length === 0 ){

			for( var i = 0; i < m_DATA.items.length; i++ ){
				
				var item = m_DATA.items[ i ];

				if( !item.hasOwnProperty( 'name' ) ){

					continue;
				}

				m_MatchingItems.nameExact.push( item );
			}

		}else{

			term = term.toLowerCase();

			var termRegex = new RegExp( escapeRegExp(term), 'g' );

			// Search all items matching search term
			for( var itemKey in m_DATA.items ){
				if( m_DATA.items.hasOwnProperty( itemKey ) ){

					var item = m_DATA.items[ itemKey ];

					if( !item.hasOwnProperty( 'name' ) ){

						continue;
					}

					var itemName = item[ 'name' ].toLowerCase();
					var normItemName = normaliseSearchString( itemName );

					// If the item name is an exact match for the search term, add to exact matches
					if( term === itemName || term === normItemName ){

						m_MatchingItems.nameExact.push( item );

					// Else if the item name is a partial match for the search term, add to partial matches
					}else{

						// If item name contains search term
						if( itemName.match( termRegex ) !== null ){

							m_MatchingItems.namePartial.push( item );
						}
					}

					// IDEA - could add additional steps:
					// - 'complete word matches' - split term and item name into words, if any match exactly, add to array
				}
			}

			// Filter by location
			if( location.length > 0 ){

				var locationRegex = new RegExp( escapeRegExp(location), 'g' );
				var nameExactTemp = [];
				var namePartialTemp = [];

				for( var mi = 0; mi < m_MatchingItems.nameExact.length; mi++ ){

					var matchingItem = m_MatchingItems.nameExact[ mi ];
					var matchingItemLocation = matchingItem[ 'obtained_from' ].toLowerCase();

					if( matchingItemLocation.match( locationRegex ) !== null ){

						nameExactTemp.push( matchingItem );
					}
				}

				m_MatchingItems.nameExact = nameExactTemp;

				for( var mi = 0; mi < m_MatchingItems.namePartial.length; mi++ ){

					var matchingItem = m_MatchingItems.namePartial[ mi ];
					var matchingItemLocation = matchingItem[ 'obtained_from' ].toLowerCase();

					if( matchingItemLocation.match( locationRegex ) !== null ){

						namePartialTemp.push( matchingItem );
					}
				}

				m_MatchingItems.namePartial = namePartialTemp;
			}


			// Filter by interior theme
			if( interiorTheme.length > 0 ){

				var interiorThemeRegex = new RegExp( escapeRegExp(interiorTheme), 'g' );
				var nameExactTemp = [];
				var namePartialTemp = [];

				for( var mi = 0; mi < m_MatchingItems.nameExact.length; mi++ ){

					var matchingItem = m_MatchingItems.nameExact[ mi ];
					var matchingItemInteriorTheme = matchingItem[ 'hha_theme' ].toLowerCase();

					if( matchingItemInteriorTheme.match( interiorThemeRegex ) !== null ){

						nameExactTemp.push( matchingItem );
					}
				}

				m_MatchingItems.nameExact = nameExactTemp;

				for( var mi = 0; mi < m_MatchingItems.namePartial.length; mi++ ){

					var matchingItem = m_MatchingItems.namePartial[ mi ];
					var matchingItemInteriorTheme = matchingItem[ 'hha_theme' ].toLowerCase();

					if( matchingItemInteriorTheme.match( interiorThemeRegex ) !== null ){

						namePartialTemp.push( matchingItem );
					}
				}

				m_MatchingItems.namePartial = namePartialTemp;
			}


			// Filter by fashion theme
			if( fashionTheme.length > 0 ){

				var fashionThemeRegex = new RegExp( escapeRegExp(fashionTheme), 'g' );
				var nameExactTemp = [];
				var namePartialTemp = [];

				for( var mi = 0; mi < m_MatchingItems.nameExact.length; mi++ ){

					var matchingItem = m_MatchingItems.nameExact[ mi ];
					var matchingItemFashionTheme = matchingItem[ 'clothing_style' ].toLowerCase();

					if( matchingItemFashionTheme.match( fashionThemeRegex ) !== null ){

						nameExactTemp.push( matchingItem );
					}
				}

				m_MatchingItems.nameExact = nameExactTemp;

				for( var mi = 0; mi < m_MatchingItems.namePartial.length; mi++ ){

					var matchingItem = m_MatchingItems.namePartial[ mi ];
					var matchingItemFashionTheme = matchingItem[ 'clothing_style' ].toLowerCase();

					if( matchingItemFashionTheme.match( fashionThemeRegex ) !== null ){

						namePartialTemp.push( matchingItem );
					}
				}

				m_MatchingItems.namePartial = namePartialTemp;
			}
		}

		// Filter by category
		if( category.length > 0 ){

			var nameExactTemp = [];
			var namePartialTemp = [];

			// If category is "all", filter by group. Otherwise, group is implicit in the category being selectable.
			if( category === "all" ){

				// If item category matches any category in the selected group
				if( group.length > 0 && group !== "all" ){

					var selectedGroup = m_DATA.groups[ group ];

					for( var mi = 0; mi < m_MatchingItems.nameExact.length; mi++ ){

						var matchingItem = m_MatchingItems.nameExact[ mi ];
						var matchingItemCategory = getCategoryById( matchingItem[ 'category_id' ].toLowerCase() );
						
						for( var category in selectedGroup ){
							if( selectedGroup.hasOwnProperty( category ) ){

								if( matchingItemCategory === category ){

									nameExactTemp.push( matchingItem );
								}
							}
						}
					}

					m_MatchingItems.nameExact = nameExactTemp;

					for( var mi = 0; mi < m_MatchingItems.namePartial.length; mi++ ){

						var matchingItem = m_MatchingItems.namePartial[ mi ];
						var matchingItemCategory = getCategoryById( matchingItem[ 'category_id' ].toLowerCase() );

						for( var category in selectedGroup ){
							if( selectedGroup.hasOwnProperty( category ) ){

								if( matchingItemCategory === category ){

									namePartialTemp.push( matchingItem );
								}
							}
						}
					}

					m_MatchingItems.namePartial = namePartialTemp;
				}

			}else{

				for( var mi = 0; mi < m_MatchingItems.nameExact.length; mi++ ){

					var matchingItem = m_MatchingItems.nameExact[ mi ];
					var matchingItemCategory = getCategoryById( matchingItem[ 'category_id' ].toLowerCase() );

					if( matchingItemCategory === category ){

						nameExactTemp.push( matchingItem );
					}
				}

				m_MatchingItems.nameExact = nameExactTemp;

				for( var mi = 0; mi < m_MatchingItems.namePartial.length; mi++ ){

					var matchingItem = m_MatchingItems.namePartial[ mi ];
					var matchingItemCategory = getCategoryById( matchingItem[ 'category_id' ].toLowerCase() );

					if( matchingItemCategory === category ){

						namePartialTemp.push( matchingItem );
					}
				}

				m_MatchingItems.namePartial = namePartialTemp;
			}
		}

		// Sort (if sorting other than relevance is enabled)
		var sortBy = $( m_SELECTORS.dropdownSort ).val().toLowerCase();

		if( sortBy === "a - z (name)" ){

			var allMatchingItems = m_MatchingItems.nameExact.concat( m_MatchingItems.namePartial );

			allMatchingItems.sort(function(a, b){
			    if(a[ 'name' ] < b[ 'name' ]) return -1;
			    if(a[ 'name' ] > b[ 'name' ]) return 1;
			    return 0;
			});

			m_MatchingItems.nameExact = allMatchingItems;
			m_MatchingItems.namePartial = [];
		
		}

		// Populate item template for each result and display it in the list
		populateSearchResults();
	}


	function search( term, location, interiorTheme, fashionTheme, group, category ){

		$( m_SELECTORS.loadingOverlay ).addClass( m_MODIFIER_CLASSES.active );

		setTimeout(function(){

			performSearch( term, location, interiorTheme, fashionTheme, group, category );

			$( m_SELECTORS.loadingOverlay ).removeClass( m_MODIFIER_CLASSES.active );

		}, 1);
	}


	function init(){

		// Read JSON data files into memory
		loadJsonData();
	}


	function onDataLoaded(){

		// Precalculate data relationships: - OPTIMISATION
			// Build or retrieve complete lists of:
				// Filters:
					// Locations
					// Interior themes
					// Fashion themes
				// Groups
				// Categories
				// Sets
			// Build data relationships:
				// Categories with results in each group
				// Locations with results in each group
				// Interior themes with results in each group
				// Fashion themes with results in each group

		populateUI();

		// Clear search input
		$( m_SELECTORS.searchBox ).val('');

		// Bind event listeners
		bindListeners();

		// // Perform default search - all items, all categories
		// handleSearchKeyup('');
	}


	$(document).ready(function(e){

		console.log('acdb init');

		init();
	});


	// On search field keyup:
		// If search term is >= minimum length (say 3 chars)
			// Perform a search

	// On filter dropdown item select:
		// Perform a search

	// On group item select:
		// If the selected group is "sets"
			// Populate all sets into the categories UI as category items
		// Else
			// Populate all categories present in the group (see data relationships) into the categories UI
		// Perform a search

	// On category item select:
		// Perform a search

	// Perform a search:
		// Get the search term (if any), selected group and category, and any selected filters
		// Search the item database for matching items:
			// 
		// Repopulate filter dropdown items to only those that apply to the selected group and category (debounce)

	// Sort items:
		// Options for sorting:
			// Relevance (default)
			// Alphabetical
			// Location
			// Any others? Ask ste

	// Search logic:

	// User enters search term (optional) and selects group, category and filters (all optional) and a search is performed
	// If search term is present, item names are matched against it using the following logic, in priority order:
		// - Item name contains all of search term
		// - Item name contains part of search term
		// - Item category contains all or part of search term
		// - etc. for location, price, theme etc?

	// Filters
		// If more than one filter is active, results are filtered to items that match both filters (boolean AND)

	// Selected class adding etc. for list buttons

	// Lightbox open/close functionality


}());
