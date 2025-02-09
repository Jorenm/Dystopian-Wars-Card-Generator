window.sultanate_ships = {
    skybarques: {
		name: 'Alsaqr Skybarques',
		type: 'Skybarque',
		points: '38',
		traits: 'Sultanate, Turkish, Aerial Unit, Skybarque, Alsaqr-Class',
		mass: '1',
		speed: '12',
		turnLimit: '8',
		armour: '4',
		citadel: '9',
		adv: '4',
		sdv: '0',
		fray: '3',
		hull: '2',
		rules: [
			'Agile',
			{
				name: 'Attached Unit',
				value: 'Turkish, Flagship',
			},
		    'Corvette Duty',
			'Giant Slayer',
			'Linear Dash',
            'Powerslide'
		],
		weapons: [
			{
				name: 'Aerial Barbette Launcher',
				arc: 'F',
			},
			{
				name: 'Aetheric Lance',
				arc: 'F',
			},
		],
	},
    skycutter: {
		name: 'Hirka Skycutter',
		type: 'Skycutter',
		points: '50',
		traits: 'Sultanate, Turkish, Aerial Unit, Skycutter, Hirka-Class',
		mass: '1',
		speed: '10',
		turnLimit: '6',
		armour: '5',
		citadel: '11',
		adv: '4',
		sdv: '0',
		fray: '7',
		hull: '4',
		rules: [
			'Agile',
		    'Gun Runner',
			'Hydrophone Relay',
			'Janissary Assault Deck',
            'Crimson Privateers',
            'Powerslide'
		],
		weapons: [
			{
				name: 'Aerial Torpedo Salvo',
				arc: 'F',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 3,	
			},
			{
				name: 'Aetheric Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 5,
			},
            {
                name: 'Light Broadside',
                arc: 'P&S',
            },
		],
	},
	skylancer: {
		name: 'Awsbiri Skylancer',
		type: 'Skylancer',
		points: '105',
		traits: 'Sultanate, Turkish, Aerial Unit, Skylancer, Awsbiri-Class',
		mass: '2/2',
		speed: '9/8',
		turnLimit: '6/5',
		armour: '6/5',
		citadel: '11/10',
		adv: '5/3',
		sdv: '0/0',
		fray: '9/8',
		hull: '4/2',
		rules: [
			'Agile',
		    'Maritime Patrol',
			'Orichalcite Construction',
			'Linear Dash',
            'Powerslide',
			'Vanguard',
			'Optional SRS'
		],
		weapons: [
			{
				name: 'Aerial Torpedo Salvo',
				arc: 'F',
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Aetheric Lance',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 5,	
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P',
				option: 'F/P Weapon',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P',
				option: 'F/P Weapon',
			},
			{
				name: 'Aetheric Lance',
				arc: 'F/P',
				option: 'F/P Weapon',
				optionCost: 5,	
			},
			{
				name: 'Rocket Battery',
				arc: 'F/S',
				option: 'F/S Weapon',
			},
			{
				name: 'Gun Battery',
				arc: 'F/S',
				option: 'F/S Weapon',
			},
			{
				name: 'Aetheric Lance',
				arc: 'F/S',
				option: 'F/S Weapon',
				optionCost: 5,	
			},
			{
				name: 'Broadside',
				arc: 'P&S',
			},
		],
	},
	skyrunner: {
		name: 'Muharib Skyrunner',
		type: 'Skyrunner',
		points: '85',
		traits: 'Sultanate, Turkish, Aerial Unit, Skyrunner, Muharib-Class',
		mass: '2/2',
		speed: '9/8',
		turnLimit: '6/5',
		armour: '6/5',
		citadel: '11/10',
		adv: '5/3',
		sdv: '0/0',
		fray: '11/4',
		hull: '4/2',
		rules: [
			'Agile',
		    'Cloud Dive',
			'Heavy Lander',
			'Janissary Assault Deck',
            'Crimson Privateers',
			'Landing Vessel',
			'Orichalcite Construction',
			'Linear Dash',
            'Powerslide',
			'Optional SRS'
		],
		weapons: [
			{
				name: 'Rocket Battery',
				arc: 'F/P',
				option: 'F/P Weapon',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P',
				option: 'F/P Weapon',
			},
			{
				name: 'Aetheric Lance',
				arc: 'F/P',
				option: 'F/P Weapon',
				optionCost: 5,	
			},
			{
				name: 'Rocket Battery',
				arc: 'F/S',
				option: 'F/S Weapon',
			},
			{
				name: 'Gun Battery',
				arc: 'F/S',
				option: 'F/S Weapon',
			},
			{
				name: 'Aetheric Lance',
				arc: 'F/S',
				option: 'F/S Weapon',
				optionCost: 5,	
			},
			{
				name: 'Broadside',
				arc: 'P&S',
			},
		],
	},
	skyship: {
		name: 'Nasr Skyship',
		type: 'Skyship',
		points: '100',
		traits: 'Sultanate, Turkish, Aerial Unit, Skyship, Nasr-Class',
		mass: '2/2',
		speed: '10/9',
		turnLimit: '6/5',
		armour: '6/5',
		citadel: '11/10',
		adv: '5/3',
		sdv: '0/0',
		fray: '9/8',
		hull: '4/2',
		rules: [
			'Agile',
			'Orichalcite Construction',
			'Linear Dash',
            'Powerslide',
			'Tracer Fire (Aerial)',
			'Optional SRS'
		],
		weapons: [

			{
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Heavy Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,	
			},
			{
				name: 'D-Cannon Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 4,	
			},
			{
				name: 'Particle Beamer',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 7,	
			},
			{
				name: 'Rocket Battery',
				arc: 'F/P',
				option: 'F/P Weapon',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P',
				option: 'F/P Weapon',
				optionCost: 3,
			},
			{
				name: 'Aetheric Lance',
				arc: 'F/P',
				option: 'F/P Weapon',
				optionCost: 5,
			},
			{
				name: 'Rocket Battery',
				arc: 'F/S',
				option: 'F/S Weapon',
			},
			{
				name: 'Gun Battery',
				arc: 'F/S',
				option: 'F/S Weapon',
				optionCost: 3,
			},
			{
				name: 'Aetheric Lance',
				arc: 'F/S',
				option: 'F/S Weapon',
				optionCost: 5,
			},
			{
				name: 'Broadside',
				arc: 'P&S',
			},
		],
	},
}