
PrincessNinaSite_final — files created for Choco
-----------------------------------------------

Files included in this folder:
- index.html   -> Password gate + loading (opens first). Password: sushi
- main.html    -> Main page (uses bea.mp3). If password was correct, music auto-plays.
- letter.html  -> Letter page with clickable sunflower (uses hindi.mp3). Click sunflower to reveal the letter.
- gallery.html -> Photo gallery (replace image srcs with your Drive direct URLs)
- bea.mp3      -> (uploaded by user) background music for main page (autoplays after correct password)
- hindi.mp3     -> (uploaded by user) music for letter page (plays on sunflower click)

How to use:
1. Download the entire folder and open `index.html` in a browser. It shows a short loading text then the password screen.
2. Enter password: sushi — this will open `main.html` and attempt to autoplay the main music (allowed because the password entry is a user gesture).
3. On `main.html`, click "Go to Letter" to open `letter.html` and click the sunflower to play the letter music and reveal the message.
4. To add gallery photos, replace <img src="..."> in gallery.html with Drive direct links like:
   https://drive.google.com/uc?export=view&id=FILE_ID

Notes:
- Some browsers are strict about autoplay; playing audio after a direct user action (like entering the password) is generally allowed.
- If autoplay is blocked, tapping the page will start music.
