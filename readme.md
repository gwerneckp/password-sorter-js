# Sorter.js
**Disclaimer: This tool was build for ethical hacking only. I will not be responsible for any direct or indirect damage caused due to the usage of this tool.**

Bob's password is "**@liverpool_1981**", we provide the sorter script with the following wordlist based on knowledge of our victim:

 - password 
 - bob 
 - secret 
 - liverpool 
 - 1981

  `$node sorter.js -A wordlist.txt`

We get as a result a 3000+ word list as follows:

 - *more 1338 results* 
 - @liverpool_secret 
 - @liverpool_liverpool 
 - **@liverpool_1981**
 - _liverpool@password
 - _liverpool@bob
 - *more 1790 results*

As you can see, Bob's password was found.

## Parameters:

 - **-A:** Enables all sorting parameters.
 - **-c:** Combines every word with each other. **(this is the default mode)**
 - **-u:** Adds underscore before and after every word.
 - **-a:** Adds at (@) symbol before and after every word.
 - **-l:** Leet mode, replaces **E's** with **3's**, **I's** with **1's** and **O's** with **0's** .
 - **-t:** Combines a third word to every combination.

 


