Please clone the repo, do not download the zip as github hosts the site and you will need to push your files to the repo in order for any of your code to go live.

to start the build environment run the fowwling commands through the terminal, if you don't have, node, npm or gulp installed, you'll need to get it install 

(MAC: http://blog.teamtreehouse.com/install-node-js-npm-mac) 

(Windows: http://blog.teamtreehouse.com/install-node-js-npm-windows).

npm install



gulp


Once thats all done a broswer should open at the page : localhost: 3000.

you then need to edit the file in dest/js/data.json with your info

add your logo to dest/media/logos

then go into the script file in src/js/script.js (Make sure its file in the src folder not the dest!!!)
add the below code under code that looks like this:
else if (this.hasAttribute("data-yourName")) {
              number = NUMBER ; (next number on from the one above)
        }
        
Save everything check it works then push up to the repo.
