window.weapon_rules = {
	Arc: 'Ignore Shield Generators. On Critical add a Disorder',
	Devastating: 'Exploding Hits = 3 damage',
	Gunnery: 'Target mass 1 treated as Obscured.',
	Sustained: 'Re-roll any one result type before Exploding.',
	Voltaic:
		'On Critical add a Disorder. +1 dice vs active Generators',
	Broadside: 'Can be fired in each direction.',
	Fusillade:
		'Re-roll Counter and Heavy Counter results. No effect on Aerial/Submerged without matching Quality.',
	Aerial: 'Cannot Shoot Submerged Units. Target may use Aerial Defences.',
	Homing: 'Models cannot be considered Obscured from Actions with the Homing Quality. Furthermore, Actions made with this Quality may re-roll Blanks and ignore Shroud Generators.',
	Piercing:
		'Target suffers Critical Damage roll if it receives one or more Points of Damage. This is in addition to any Critical Damage rolls caused by the Action. Mass 1 Targets lower their Citadel by -3 for the Action.',
	Submerged:
		'Cannot usually be used against Aerial Units or Ground Units. Target may use Submerged Defences against Actions made from this Quality. Ignore Shield Generators.',
	Torpedo:
		'Can only be used against Targets that are 5" or more away. Target does not gain benefit from being Obscured against Torpedoes.',
	'Extreme Range':
		'Long Range Band 20" - 40". Not required to match when Supporting a Lead weapon.',
	Blast: 'Use the Blast Template. The centre point of the template must be placed over any part of the Initial Target. Hits are applied to all Models under the template.',
	Ramming: 'Adds dice when ramming.'
};

window.general_rules = {
	'Ablative Armour': {
		type: 'Defense',
		description:
			'Exploding Hit results equal to Mass do not explode. Attacks with Piercing, Rail, Ramming or Submerged Qualities ignores this rule.',
	},
	'Advanced Sturmcoils': {
		type: 'Shooting',
		description: 'Sturmklaue and Heavy Sturmklaue gain Sustained',
	},
	'Agile': {
		type: 'Movement',
		description:
			'Unless suffering from a Navigation Lock Critical Damage Marker, Models in this Unit with this rule may make turns during Drift movement in the same way as it usually would during normal Movement',
	},
	'Anti-Air Specialist': {
		type: 'Shooting',
		description:
			'Can choose not to count Aerial Units as being a Range Band further away. Attacks with the Aerial Quality against Aerial Units gain Homing.',
	},
	'Auto-Firing Solutions': {
		type: 'Shooting',
		description:
			'Attacks by Volt Gun Batteries and Heavy Volt Gun Batteries on this Model may re-roll blank results',
	},
	'Attached Unit': {
		type: 'List',
		description:
			'When Building a Force, this Unit may become a Joining Unit. Select a Partner Unit that has the Traits indicated. The Partner Unit cannot have any other Attached Units.',
	},
	'Blitzen SRS Capacity': {
		type: 'SRS',
		description:
			'Blitzen SRS Tokens contribute 5 Dice to Attack Runs. Can be combined with other SRS Tokens. A Blitzen Bomber is removed for every two successes in Interception. Can only be Intercepted after normal SRS Tokens have all been Intercepted. If majority of stack is Blitzen, gain Sustained, Bomb and Voltaic. If more Blitzen than Mass of Target, gain Devastating. No SRS Recon or SRS Mine Clearance. No Attack Runs on Aerial Units',
	},
	'Chowkidar Crew': {
		type: 'Defense/Ramming',
		description:
			'Ignore the effects of Emergency Disorder. No Disorder when Ramming. +2 Repair dice.',
	},
	'Combat Air Patrol': {
		type: 'SRS',
		description:
			'Launch SRS Tokens in the First Round (to a max of Crippled Capacity) with infinite range.',
	},
	'Command Codes': {
		type: 'Misc',
		description:
			`Once per Round reroll all your dice from a friendly pool generated within 15". Do this before any other dice manipulation.`,
	},
	'Corvette Duty': {
		type: 'Defense',
		description: 'This Model may add +1 Defense Dice on any friendly Models within 5". This bonus is in addition to Attached.'
	},
	'Deep Dive': {
		type: 'Movement',
		description: `In the Special Operations phase of the round, while Battle Ready and in Open Water this Unit may declare it is going to Deep Dive. For the remainder of that Round, the Unit doubles its Drift Movement but cannot make any other Movement. The Unit also cannot launch SRS or make any Action that does not have the Submerged Quality. Furthermore, while it carries out a Deep Dive Special Operation, this Unit cannot be the Initial Target of any Action that does not have the Submerged Quality. A Unit cannot be part of an Attached Unit if it carries out a Deep Dive Special Operation, unless both Units have this rule. A Unit cannot carry out a Deep Dive Special Operation if it has already done so the previous Round.`
	},
	'Deceptive Deployment': {
		type: 'Deployment',
		description:
			'After both sides are deployed, you may redeploy this Unit up to 5". If has Shroud Generator, gain Vanguard.',
	},
	'Devil\'s Own Luck': {
		type: 'Valour',
		description: `Once per Round, you may Cancel a Valour Effect. Discard a Victory & Valour card from your hand of any value.`
	},
	Disciplined: {
		type: 'Defense',
		description:
			'Uneffected by Emergency Disorder Condition, No Disorder from Ramming',
	},
	'Elite Crew': {
		type: 'Assault',
		description: 'Re-roll blanks during Assaults',
	},
	'Flak Barrage': {
		type: 'SRS',
		description:
			'At the start of the End Phase, before SRS Resolution, Roll a number of Action Dice indicated by the rule. Remove one SRS Token that is in contact with this Unit or Friendly Units within 15" for each Exploding Hit.',
	},
	'Focused Fire (Gunnery)': {
		type: 'Shooting',
		description:
			'One attack with Gunnery per Activation gets +2 dice and may re-roll Blanks.',
	},
	'Focused Gunnery': {
		type: 'Shooting',
		description:
			'One attack with Gunnery per Activation gets +2 dice and may re-roll Blanks.',
	},
	'Fortunes of War': {
		type: 'Defense',
		description:
			'You may Cancel Valour Effects in an Encounter where this Unit has at least one Battle Ready Model in the Play Area.',
	},
	'Full Steam Ahead': {
		type: 'Movement',
		description:
			'May double Drift. If it does so, can\'t turn.',
	},
	'Fury of Nimue': {
		type: 'Ramming',
		description:
			'Can Ram Surface Units. +1 Victory Point for each Surface Unit destroyed by Assault or Ramming. Re-roll Blanks in Attacks and Assault against Mass 3+.',
	},
	'Hammer Sweep': {
		type: 'Movement/Ramming',
		description:
			'Increase Speed by 1" and gain +2 dice when Ramming if moving straight',
	},
	'Heavy Escort': {
		type: 'Defense',
		description:
			'+2 to the Defence Action Dice Pool on all friendly Models within 5". This bonus is in addition to any other bonuses such as being part of an Attached Unit (+1 ADV/SDV).',
	},
	'Heavy Firepower': {
		type: 'Shooting',
		description:
			"Once per Activation, before declaring target, Each Model in this Unit with this rule may make the following Valour Effect. When making an Attack, up to three of that Model's weapons may contribute their Lead value to the Action Dice Pool, rather than the normal single Lead weapon value. Other Models may support this Attack but cannot benefit from this rule.",
	},
	'Heavy Bombardment': {
		type: 'Shooting',
		description:
			'Once per Activation, before declaring an Initial Target, perform Valour Effect: On Attack, Models in the Unit may support with the Lead value of a Bombard to the Action Dice Pool.',
	},
	'Huginn and Muninn': {
		type: 'Shooting',
		description:
			'The Citadel of Targets that are in LoS of a Valkyrie receives a -2 against Attacks from this Model.',
	},
	Inspirational: {
		type: 'Shooting/Assault',
		description:
			'Friendly within 10" (not self) may reduce a single Disorder Level at the start of their Activation and may re-roll a single Action dice each step of their Activation.',
	},
	Inductorium: {
		type: 'Shooting/Assault',
		description:
			'Upon Ranged Attack or Assault with Voltaic/Arc, after all dice are rolled/exploded: If Exploding Hits >= # of target models, roll additional dice = # of target models.',
	},
	'Ivaldi Shroud Generator': {
		type: 'Defense/Movement',
		description: `Obscured to Shooting Attacks. As a Special Operations Action, this Model may be removed from Play and replaced at a new point completely within 5" of its original position with the same facing.`

	},
	'Landing Vessel': {
		type: 'Misc',
		description:
			'Models in this Unit may make a Special Operations Action known as Landing. See rulebook.',
	},
	'Large Target': {
		type: 'Weakness',
		description:
			'Can be declared to be in more than one Fire Arc when shot.',
	},
	'Luftlancer Assault': {
		type: 'Assault',
		description:
			'Assaults within 6". Assault gains the Voltaic. This rule does not apply to Supporting Assaults.',
	},
	'Maritime Patrol': {
		type: 'Shooting',
		description:
			'Ignore the Submerged Unit Position Trait when making Attacks on any Initial Targets within 10", or against Initial Targets with at least one friendly SRS Token in base contact.',
	},
	'Mine Layer': {
		type: 'Misc',
		description:
			'Before Submerged Unit Deployment, for each Model in a Unit with this rule, the controlling Player may place a Minefield Marker anywhere at least 10" from any Deployment Zone.',
	},
	'Mine Sweeper': {
		type: 'Misc',
		description:
			'In the Special Operations step of its Operations Phase, a Unit with this rule may remove a Minefield Marker within 5" of a Model in this Unit.',
	},
	'Pack Hunter': {
		type: 'Shooting/Assault',
		description:
			'A single Attack or Assault by this Unit each Activation receive +1 action dice for each Model in the Unit. All models must contribute.',
	},
	'Phosphor Shells': {
		type: 'Shooting',
		description:
			'Gustav Twin Bombards or Bertha Heavy Bombard has the Hazardous Quality.',
	},
	'Powerslide': {
		type: 'Movement',
		description:
			'may make Drift Movement in a direction up to 90 degrees to Port or Starboard. Maintain heading.',
	},
	'Pycrete Construction': {
		type: 'Misc/Weakness',
		description:
			'Drift = 1". No Disorder from Collisions. Gunnery targeting this Unit may re-roll Blanks. 4+ Disorder are ignored rather than causing damage. Can extend outside Deployment Zone if touching back edge.',
	},
	'Shallow Draught': {
		type: 'Movement',
		description: 'This Unit treats Treacherous Water as Open Water'
	},
	'Shockwave Generator': {
		type: 'Shooting',
		description: 'Used in Shooting Phase to fire a single Shockwave Pulse by the Unit at a Target model using the Point-Blank Shockwave Pulse weapon profile. Each additional Generator of this type in the unit adds +4 Dice. Template may be placed over an Initial Target in Line of Sight anywhere within 15" of a Model in this unit, narrow end pointing to this unit. If there are three or more generators contributing to the Attack Pool, use larger Torrent.'
	},
	'Silent Stalker': {
		type: 'Deployment/Shooting',
		description: `Deploy at the start of an Encounter as a Silent Stalker. Units that do so are deployed at the same time as Vanguard moves and may be deployed anywhere at least 20" from the enemy deployment zone. Deploying with Silent Stalker gives Torpedo attacks Homing this round.`
	},
	'Sonic Amplifier': {
        type: 'Shooting',
		description: 'Shockwave Pulses by this model gain +3 to their Attack Dice Pool, the Devastating Quality. And always use the larger Torrent template.'
	},
	Spotter: {
		type: 'Shooting',
		description:
			'If there is one or more SRS Tokens friendly to this Unit in base contact with the Initial Target: Re-roll blank results with any weapons with Extreme Range or ignore Obscured',
	},
	'SRS Capacity': { type: 'SRS', description: '' },
	'SRS Mine Clearance': {
		type: 'SRS',
		description:
			'During its Operations Step, while placing SRS Tokens, may place tokens touching Minefield Markers within 20". At the end of the Special Operations Step discard an SRS Token and roll an Action Die. On an Exploding Hit, the Minefield is discarded. Repeat as desired. If Minefield discarded, remaining SRS Tokens in stack may be placed on another Minefield Marker within 5" and continue clearing. If no remaining Minefield within 5", SRS Tokens remain in place.',
	},
	'SRS Recon': {
		type: 'SRS',
		description:
			'During Operations Step, spend SRS tokens to draw and discard V&V.',
	},
	'Storm Generator': {
		type: 'Generator',
		description:
			'In the Shooting Phase, make a Shooting Attack using the Lightning Strike weapon profile. 360-degree LoS, Range 20". Ignores Shield/Shroud Generators. Incoming fire re-rolls Heavy Hits. +2 Assault when Battle-Ready.',
	},
	'Strategic Withdrawal': {
		type: 'Misc',
		description:
			`At the start of the Maintenance Step of the End Phase, unless one or more Models in the Unit has Navigation Lock Critical Damage, this Unit may be placed back into Reserves. If so, Crippled Models in the Unit are immediately destroyed.`,
	},
	'Vali Midget Subs': {
		type: 'SRS',
		description:
			'Place Vali Midget Sub Tokens up to 20" from this Model like SRS. Like SRS, but with 5 Action Dice, Homing, Piercing and Submerged. Cannot be intercepted. Cannot attack Aerial.',
	},
	Vanguard: {
		type: 'Deployment',
		description:
			'Starting with Player B, after both sides are deployed, each player may choose one of their Units with Vanguard and Move up to 5". Alternate between Players',
	},
	'Veteran Voltmeister': {
		type: 'Assault',
		description:
			'If has Voltaic Decksweepers, when Assaulting, +1 dice. Assault gains the Voltaic Quality. No effect when Supporting.',
	},
	'Voltaic Decksweepers': {
		type: 'Assault',
		description:
			'Add dice = to target Mass when Assaulting and not Crippled.',
	},
	'Vulnerable Stern': {
		type: 'Weakness',
		description:
			'Enemy gets Devastating when shooting from the rear. Inflict a Navigation Lock if damage is dealt. Attacks with the Blast, Bomb or Magnetic Qualities ignore this rule.',
	},
	'Wolves of the Sea': {
		type: 'Shooting/Assault/Ramming',
		description:
			"Always use Battle-Ready value of weapons. When making an Assault, gain dice equal to this Model's mass. If all Assaulting models have this rule, re-roll blank results and gain Devastating. No Damage or Disorder when ramming.",
	},
	'Blitzschlag': {
		type: 'Assault',
		description:
			'Once per Activation, discard a Valour card >= 40. Each Model that has caused at least one point of damage in a Ramming Action this Activation, may make a second Ramming Action within 3" of the first. No further movement if you do.',
	},
	'Colossus': {
		type: 'Movement/Ramming',
		description:
			'Turn on the spot to face any direction at the end of its Movement. May Ram Surface Units and Skimming Units. Ram with <3" movement. Does not suffer from Damage or Disorder while ramming.',
	},
	'Submarauder': {
		type: 'Movement',
		description: `May instead be held in Reserve as a Submarauder. On each Round, Submarauders are Activated before all other Units in the Force. 
		During the first Round, a 50mm Submarauder Marker is placed anywhere outside of either Player\'s deployment and at least 2” from Terrain. 
		From the second Round onwards when a Submarauder Activates, it is immediately deployed. When a Submarauder is deployed, it must be placed 
		within 10" of any Submarauder Marker or Wreck Marker in the Play Area. You must remove one of your Submarauder Markers each time this happens. 
		No Submarauder Model can be deployed touching another Model. When a Submarauder is deployed it uses the Crippled profile of their weapons for 
		that Round. Unless one or more Models in the Unit has Navigation Lock, at the end of round this Unit may be removed from Play and become a Submarauder 
		again. Leave a 50mm Submarauder Marker in the position of any one Model in this Unit.`
	},
	'Zornhau': {
		type: 'Shooting/Ramming',
		description: 'Re-roll Blank Results in Ranged Attacks and Ramming against Surface/Ground Units >= 2 mass.'
	},
	'Amphibious': {
		type: 'Movement',
		description: 'This Unit is a Surface Unit after deployment. The Unit can move across Land and Obstacle terrain at normal Speed without suffering damage or collision. It has a Drift of zero when on Land. While this Unit is on Land or Obstacle Terrain, that Terrain is ignored for LOS purposes to and from this Unit'
	},
	'Freya Array': {
		type: 'Defense',
		description: 'While Generator is active, Enemy Units cannot be deployed within 10" of this Model. Coherency 5".'
	},
	'Monster of Nassau': {
		type: 'Shooting',
		description: 'Bombards gain +5 to its Action Dice Pool and may re-roll Blank results. This Unit awards +1 Victory Point to your opponent if it destroyed by a Unit with the Union Trait.'
	},
	'Coastal Bombardment': {
		type: 'Shooting',
		description: 'Models in this Unit may re-roll blanks when shooting at Ground Units with weapons that have the Gunnery Quality'
	},
	'Forward Deployment':  {
		type: 'Deployment',
		description: 'Can\'t be held in reserve. They must be deployed anywhere outside of the Encounter\'s deployment zones and least 12" from the enemy deployment zone.'
	},
	'Focused Bombardment': {
		type: 'Shooting',
		description: 'A single Attack in this Model\'s Activation using a Bombard gain +5 to its Action Dice Pool. If the Attack is with the Big Bertha, it may also re-roll Blank results.'
	},
	'Haddingjar Projector': {
		type: 'Defense',
		description: 'Friendly Surface/Skimming Models >= 2 Mass, counts as being equipped with the same Generators as this Model while within 7" of this Model.'
	},
	'Tempermental Design': {
		type: 'Weakness',
		description: 'This Unit cannot make Jury-Rigged Repairs. When making Repair Rolls, two successes are required to remove each Critical Damage Marker. Repair Rolls using the Advanced Repair Facilities rule ignores this rule.'
	},
	'Terror From Below': {
		type: 'Ramming',
		description: `This Unit may Ram Surface Units even if it moved less than 3" in the Movement Phase. +3 when Ramming Surface Units.`
	},
	'Veteran Voltmeisters': {
		type: 'Assault',
		description: '+1 dice when Assaulting. Assault gains Voltaic. No effect when Supporting.'
	},
	'Unstoppable': {
		type: 'Ramming',
		description: `After Ramming, remove from the Play area before disengaging and Place on the other side of the Impacted Model, retaining its facing as though it had just passed through the Impacted Model and emerged on the other side.`
	}
};
