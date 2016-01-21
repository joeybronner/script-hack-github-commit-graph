### How to
Create a new GitHub user (Ex: example-user). (I did this in a Chrome Ingognito browser so I didn't have to log out of my real user.)  
Create a repo for that user (Ex: example-repo).  
Create an empty folder on your computer.  
Add dates.txt to that folder and modify with the dates you want to "draw" to your Public Contributions chart.  
Add dates.sh to that folder and change --author (Ex: --author="Joey Bronner <joeybronner@gmail.com>").  
Open a terminal window and cd to your folder (which now has dates.txt and dates.sh in it).  
Run git init to initialize the Git repo.  
Run ./dates.sh. (You may need to run chmod +x dates.sh first depending on how you created the file.)  
Add the remote git origin. (Ex: git remote add origin git@github.com:example-user/example-repo.git.)  
Run git push --set-upstream origin master.  
Visit your user page to see the chart. (Ex: http://github.com/example-user.)  

### Date format in dates.txt file
Mon Aug 17  
Tue Aug 18  
Wed Aug 19  
Thu Aug 20  
Fri Aug 21 

### How to change the year ?
The commit year is setted in date.sh file, line 6.  

 