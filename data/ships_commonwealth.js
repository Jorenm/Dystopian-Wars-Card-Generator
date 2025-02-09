window.commonwealth_ships = {
	borodino: {
		name: 'Borodino Battleship',
		type: 'Battleship',
		points: 248,
		traits: 'Commonwealth, Russian, Surface Ship, Battleship, Borodino-class, Flagship',
		mass: '3/3',
		speed: '5/3',
		turnLimit: '3/2',
		armour: '8/8',
		citadel: '16/14',
		adv: '6/4',
		sdv: '5/3',
		fray: '14/13',
		hull: '8/5',
		rules: [
            'Ablative Armour',
            'Cryo Generator',
			'Cryo-Capacitors',
            'Hammer Sweep',
            'Heavy Firepower',
            'Quantity is a Quality',
		],
		weapons: [
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'F/P/S',
				option: 'F/P/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'F/P/S',
				option: 'F/P/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P',
				option: 'F/P Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'F/P',
				option: 'F/P Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'F/P',
				option: 'F/P Batteries',
				optionCost: 5,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'F/S',
				option: 'F/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'F/S',
				option: 'F/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'F/S',
				option: 'F/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Heavy Broadside',
				arc: 'P&S'
			},
			{
				name: 'Heavy Torpedo Salvo',
				arc: 'F'
			},
			{
				name: 'Cryogenic Blast',
				arc: '360'
			}
		],
		generators: [
			{
				name: 'Generator',
				choices: [
					'Atomic Generator',
					'Fury Generator',
					'Magnetic Generator',
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'F/P Batteries',
				optionCost: -5,
			},
		],
	},
	moskva: {
		name: 'Moskva Heavy Battleship',
		type: 'Heavy Battleship',
		points: 311,
		traits: 'Commonwealth, Russian, Surface Ship, Heavy Battleship, Moskva-class, Flagship',
		mass: '3/3',
		speed: '5/3',
		turnLimit: '3/2',
		armour: '8/8',
		citadel: '16/14',
		adv: '6/4',
		sdv: '5/3',
		fray: '14/13',
		hull: '10/6',
		rules: [
            'Ablative Armour',
            'Elite Crew',
            'Focused Fire (Gunnery)',
            'Hammer Sweep',
            'Heavy Firepower',
            'Shockwave Generator',
			'Sonic Amplifier'
		],
		weapons: [
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'F/P/S',
				option: 'F/P/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'F/P/S',
				option: 'F/P/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P',
				option: 'F/P Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'F/P',
				option: 'F/P Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'F/P',
				option: 'F/P Batteries',
				optionCost: 5,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'F/S',
				option: 'F/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'F/S',
				option: 'F/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'F/S',
				option: 'F/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Heavy Broadside',
				arc: 'P&S'
			},
			{
				name: 'Heavy Torpedo Salvo',
				arc: 'F'
			},
			{
				name: 'Heavy Torpedo Salvo',
				arc: 'F'
			},
			{
				name: 'Gun Battery',
				arc: 'F/P & F/S',
				option: 'F/P & F/S Weapon',
			},			
			{
				name: 'Seismic Mortar',
				arc: 'F/P & F/S',
				option: 'F/P & F/S Weapon',
				optionCost: 4,
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/P & F/S',
				option: 'F/P & F/S Weapon',
				optionCost: 4,
			},
			{
				name: 'Railgun',
				arc: 'F/P & F/S',
				option: 'F/P & F/S Weapon',
				optionCost: 10,
			},
			{
				name: 'Shockwave Pulse',
				arc: '360'
			}
		],
		generators: [
			{
				name: 'Generator',
				choices: [
					'Atomic Generator',
					'Fury Generator',
					'Magnetic Generator',
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'F/P Batteries',
				optionCost: -5,
			},
		],
	},
	prezidium: {
		name: 'Prezidium Command Ship',
		type: 'Command Ship',
		points: 298,
		traits: 'Commonwealth, Russian, Surface Ship, Command Ship, Prezidium-class, Flagship',
		mass: '3/3',
		speed: '5/3',
		turnLimit: '3/2',
		armour: '8/8',
		citadel: '16/14',
		adv: '6/4',
		sdv: '5/3',
		fray: '14/13',
		hull: '10/6',
		rules: [
            'Ablative Armour',
			'Command Codes',
            'Elite Crew',
            'Hammer Sweep',
            'Heavy Firepower',
			'Hydrophone Relay',
            'Inspirational',
			'Logistical Support',
			'Supply Depot'
		],
		generators: [
			'Shield Generator',
		],
		weapons: [
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P',
				option: 'F/P Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'F/P',
				option: 'F/P Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'F/P',
				option: 'F/P Batteries',
				optionCost: 5,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'F/S',
				option: 'F/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'F/S',
				option: 'F/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'F/S',
				option: 'F/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Heavy Broadside',
				arc: 'P&S'
			},
			{
				name: 'Heavy Torpedo Salvo',
				arc: 'F'
			},
			{
				name: 'Heavy Torpedo Salvo',
				arc: 'F'
			},
			{
				name: 'Gun Battery',
				arc: 'F/P & F/S',
				option: 'F/P & F/S Weapon',
			},			
			{
				name: 'Seismic Mortar',
				arc: 'F/P & F/S',
				option: 'F/P & F/S Weapon',
				optionCost: 4,
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/P & F/S',
				option: 'F/P & F/S Weapon',
				optionCost: 4,
			},
			{
				name: 'Railgun',
				arc: 'F/P & F/S',
				option: 'F/P & F/S Weapon',
				optionCost: 10,
			},
		],
	},
	rikhter: {
		name: 'Rikhter Artillery Dreadnought',
		type: 'Artillery Dreadnought',
		points: 271,
		traits: 'Commonwealth, Russian, Surface Ship, Artillery Dreadnought, Rikhter-class, Flagship',
		mass: '3/3',
		speed: '4/3',
		turnLimit: '3/2',
		armour: '8/8',
		citadel: '16/14',
		adv: '6/4',
		sdv: '5/3',
		fray: '14/13',
		hull: '10/6',
		rules: [
            'Ablative Armour',
            'Hammer Sweep',
            'Kinetic Dampers',
            'Void Engine Magazine',
		],
		generators: [
			'Shield Generator',
			'Magnetic Generator'
		],
		weapons: [
			{
				name: 'Apokalyps Cannon',
				arc: 'F',
			},
			{
				name: 'Heavy Broadside',
				arc: 'P&S'
			},
			{
				name: 'Heavy Torpedo Salvo',
				arc: 'F'
			},
			{
				name: 'Heavy Torpedo Salvo',
				arc: 'F'
			},
			{
				name: 'Gun Battery',
				arc: 'F/P & F/S',
				option: 'F/P & F/S Weapon',
			},			
			{
				name: 'Seismic Mortar',
				arc: 'F/P & F/S',
				option: 'F/P & F/S Weapon',
				optionCost: 4,
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/P & F/S',
				option: 'F/P & F/S Weapon',
				optionCost: 4,
			},
			{
				name: 'Railgun',
				arc: 'F/P & F/S',
				option: 'F/P & F/S Weapon',
				optionCost: 10,
			},

		],
	},
	khatanga: {
		name: 'Khatanga Cryo Assault Cruiser',
		type: 'Cryo Assault Cruiser',
		points: '130',
		traits: 'Commonwealth, Cryo Assault Cruiser, Surface Unit, Khatanga-Class, Russian',
		mass: '2/2',
		speed: '8/5',
		turnLimit: '5/4',
		armour: '6/6',
		citadel: '13/10',
		adv: '5/3',
		sdv: '3/2',
		fray: '10/9',
		hull: '5/4',
		rules: [
			'Ablative Armour',
            'Cryo Generator',
            'Hammer Sweep',
		],
		weapons: [
			{
				name: 'Cryogenic Blast',
				arc: '360'
			}, 
			{
				name: 'Broadside',
				arc: 'P&S',
			},
			{
				name: 'Semyenov Assault Bore',
				arc: 'F',
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Seismic Mortar',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 5,
			},
			{
				name: 'Railgun',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 5,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'F/P/S',
				option: 'F/P/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'F/P/S',
				option: 'F/P/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'A/P/S',
				option: 'A/P/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'A/P/S',
				option: 'A/P/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'A/P/S',
				option: 'A/P/S Batteries',
				optionCost: 5,
			},
		],
		generators: [
			{
				name: 'Generator',
				choices: [
					'Atomic Generator',
					'Fury Generator',
					'Magnetic Generator',
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'A/P/S Batteries',
				optionCost: -5,
			},
		],
	},
	krykun: {
		name: 'Krykun Shockwave Frigate',
		type: 'Shockwave Frigate',
		points: '40',
		traits: 'Commonwealth, Shockwave Frigate, Surface Unit, Krykun-Class, Russian',
		mass: '1',
		speed: '10',
		turnLimit: '6',
		armour: '5',
		citadel: '12',
		adv: '3',
		sdv: '3',
		fray: '5',
		hull: '3',
		rules: [
			'Ablative Armour',
			{
				name: 'Attached Unit',
				value: 'Russian, Flagship',
			},
		    'Corvette Duty',
			'Shallow Draught',
			'Shockwave Generator',
		],
		weapons: [
			{
				name: 'Light Broadside',
				arc: 'P&S',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Seismic Mortar',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 5,
			},
			{
				name: 'Railgun',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 5,
			},
			{
				name: 'Shockwave Pulse',
				arc: '360'
			}
		],
	},
	norilsk: {
		name: 'Norilsk Heavy Cruiser',
		type: 'Heavy Cruiser',
		points: '121',
		traits: 'Commonwealth, Heavy Cruiser, Surface Unit, Norilsk-Class, Russian',
		mass: '2/2',
		speed: '7/5',
		turnLimit: '5/4',
		armour: '6/6',
		citadel: '13/10',
		adv: '5/3',
		sdv: '4/2',
		fray: '9/8',
		hull: '5/4',
		rules: [
			'Ablative Armour',
			'Focused Fire (Gunnery)',
            'Hammer Sweep',
			'Quantity is a Quality',
		],
		weapons: [
			{
				name: 'Heavy Broadside',
				arc: 'P&S',
			},
			{
				name: 'Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Seismic Mortar',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
			},
			{
				name: 'Zhalo Rocket Battery',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 5,
			},
			{
				name: 'Railgun',
				arc: 'F/P/S',
				option: 'F/P/S Weapon',
				optionCost: 5,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'F/P/S',
				option: 'F/P/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'F/P/S',
				option: 'F/P/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'A/P/S',
				option: 'A/P/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'A/P/S',
				option: 'A/P/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'A/P/S',
				option: 'A/P/S Batteries',
				optionCost: 5,
			},
		],
		generators: [
			{
				name: 'Generator',
				choices: [
					'Atomic Generator',
					'Fury Generator',
					'Magnetic Generator',
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'A/P/S Batteries',
				optionCost: -5,
			},
		],
	},
	oleg: {
		name: 'Oleg Monitor',
		type: 'Monitor',
		points: '65',
		traits: 'Commonwealth, Monitor, Surface Unit, Oleg-Class, Russian',
		mass: '2/2',
		speed: '7/5',
		turnLimit: '4/3',
		armour: '6/6',
		citadel: '12/10',
		adv: '5/3',
		sdv: '4/2',
		fray: '9/8',
		hull: '4/4',
		rules: [
			'Ablative Armour',
            'Hammer Sweep',
			'Maritime Patrol',
			'Quantity is a Quality',
			'Shallow Draught',
		],
		weapons: [
			{
				name: 'Broadside',
				arc: 'P&S',
			},
			{
				name: 'Heavy Gun Battery',
				arc: 'F/P/S',
				option: 'F/P/S Batteries'
			},
			{
				name: 'Tri-Railgun',
				arc: 'F/P/S',
				option: 'F/P/S Batteries',
				optionCost: 5,
			},
			{
				name: 'Yastreb Missile Battery',
				arc: 'F/P/S',
				option: 'F/P/S Batteries',
				optionCost: 5,
			},
		],
		generators: [
			{
				name: 'Generator',
				choices: [
					'Atomic Generator',
					'Fury Generator',
					'Magnetic Generator',
					'Repulsion Field Generator',
					'Shield Generator',
					'Shroud Generator',
				],
				option: 'A/P/S Batteries',
				optionCost: -5,
			},
		],
	},	
};
