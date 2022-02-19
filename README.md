# Wordle Helper

## Summary
I created a trie using 12,972 words and with the help of some filters, today's word can be discovered!

If you get the following: 
🟩⬛🟩⬛⬛ 

then, the query filter will be:
s.i.. [where s and i iare in the correct position]
and the invalid charcters will be all the gray charcters 

If you get the following: 
⬛🟨⬛⬛🟨 

then, the valid characters filter will be:
..a.s [where a and s are valid charcter but in the wrong position]
and the invalid charcters will be all the gray charcters

If you get the followng:
⬛⬛⬛⬛⬛

then, the invalid charcters filter will be all those letters


## Example
### Saturday, February 19, 2022:

--- TRIE READY ---  
There are a total of 12972 words in the Trie!  

--- STARTERS ---  
Many people found success starting with the following words:  
RATES  
TEARS  
TARES  
STARE  
STEAR  
STRAY  

Query: ..i..  
Valid Characters (Yellow): ....s  
Invalid Characters (Gray): tearcmghofund  

--- FILTERS ---  
..i..  
....s  
tearcmghofund  

--- RESULTS ---  
[  
  'spiky', 'spiks',  
  'spill', 'spivs',  
  'swill', 'swiss',  
  'swizz', 'slily',  
  'slips', 'skill',  
  'skips', 'skivy',  
  'bliss'  
]  

--- MENU ---  
 q - Update Query  
 y - Update Valid Set  
 g - Update Invalid Set  
:q - Exit Loop  

Option: q  
Query: s.i..  

--- FILTERS ---  
s.i..  
....s  
tearcmghofund  

--- RESULTS ---  
[  
  'spiky', 'spiks',  
  'spill', 'spivs',  
  'swill', 'swiss',  
  'swizz', 'slily',  
  'slips', 'skill',  
  'skips', 'skivy'  
]  

--- MENU ---  
 q - Update Query  
 y - Update Valid Set  
 g - Update Invalid Set  
:q - Exit Loop  

Option: g  
Invalid Characters (Grays): tearcmghofundpky  

--- FILTERS ---  
s.i..  
....s  
tearcmghofundpky  

--- RESULTS ---  
[ 'swill', 'swiss', 'swizz' ]  

--- MENU ---  
 q - Update Query  
 y - Update Valid Set  
 g - Update Invalid Set  
:q - Exit Loop  

Option: :q  

---TRIE DESTROYED---
