# README

Welcome to the Table Top Tool (Working Title)

Below is a collected list of this future app's features, intentions and progress. 

Table Top Tool (T3) is an app intended to supplement a table top RPG game by removing the pen and paper
and replacing it with a tablet or mobile phone. For the player, character creation and managment become 
a breeze and for the Game Master, managing NPCs, maps and character's XP and inventory are a sinch. 

T3 will have two indended users--The Player and the DM. Below is a running list of features for each.

The Player:
	Character Creation Tool: Takes user input for Name, Race, Class, Gender and Biography.
							 Random number generator for base stats, accounting for race and class.
	Character Managment Tool: Once a character is created, his inventory, wallet and XP can be updated
							    by the DM managing the game the character belongs to. 
							  Characters will automatically level up when XP has reach a threshold, auto-
							    increasing skills and stats as appropriate. 
							  A character's combat skills will be annotated and a dice roll generated appropriately.
The DM:
	NPC Creation Tool: NPCs can be created similarily to characters, with certain features sped up for the DM's convenience.
					   Random race, gender, class and names will be assigned, as well as base stats and skills based on the 
					     level the DM wants for the NPC. 
	Game Management Tool:  DMs will be able to create a new game and invite certain characters to it. 
						   A DM can store maps, text files and NPCs in her game folder.

Additionally, anyone, be it players or the DM, who belong to a game can share a view of the current map and use a dice 
  rolling tool. 

For the developers:
	Staging progress of this project is important to ensure we don't work over each other. 

	*1: Back End (BE)-Establish working navigation between the many .html files associated with the DM and Player features.
		Front End (FE)-Edit above mentioned files, adding style sheets and JS scripts while keeping the functionality of the links.

	*2: BE- Set up User Authentication to require an email address, password and declaration of Player/DM
		FE- Edit forms for authentication while ensuring functionality. 

	*3: BE- Character Creation Tool- Take user input for Name/Race/Class/Gender/Biography.
									 Set base stats using random number generator
									 Use combo of above to set skills
		FE- Character Creation Tool- Forms for user input
									 Graphic for dice rolls
									 Character Sheet graphic 
	*More to come!
