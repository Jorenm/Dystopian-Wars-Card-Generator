window.weapon_rules = {
	Arc: 'Ignore Shield Generators. On Critical add a Disorder',
	Devastating: 'Exploding Hits = 3 damage',
	Gunnery: 'Target mass 1 treated as Obscured.',
	Sustained: 'Re-roll any one result type before Exploding.',
	Voltaic:
		'On dealing 1+ Critical, additional Disorder. +1 dice vs active Generators',
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
	'Combat Air Patrol': {
		type: 'SRS',
		description:
			'Launch SRS Tokens in the First Round (to a max of Crippled Capacity) with infinite range.',
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
	'Pycrete Construction': {
		type: 'Misc/Weakness',
		description:
			'Drift = 1". No Disorder from Collisions. Gunnery targeting this Unit may re-roll Blanks. 4+ Disorder are ignored rather than causing damage. Can extend outside Deployment Zone if touching back edge.',
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
};
