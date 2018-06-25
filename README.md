'Step Wise Step Tutorial


[![Step Wise Step Tutorials](https://img.youtube.com/vi/jqrkhxoP4bU/0.jpg)](https://www.youtube.com/watch?v=jqrkhxoP4bU)
<br/><br/>
What is Heroku?
Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud

How to deploy your Node Js services on Heroku (Free)?

1.	Create a free Heroku account. https://signup.heroku.com/. As I already have account so I will directly show you login.

2.	Login your account.


3.	Download Heroku CLI.
a.	Download installer : https://devcenter.heroku.com/articles/heroku-cli#download-and-install
b.	CLI Option : npm install Heroku

4.	Download a sample application 
a.	Download : https://github.com/martandsingh/NodeJsWithMongoDB.git
b.	Git clone https://github.com/martandsingh/NodeJsWithMongoDB.git

5.	Open Command Prompt & go to the working directory.
6.	Here I am showing you a shortcut:
a.	Navigate to your working directory 
b.	Select address bar & type [cmd] and hit enter
c.	You will see command prompt is open with you working directory selected.
7.	Now Run following command:
a.	Heroku login – to login with your Heroku account
b.	Enter Heroku username & password
c.	Heroku create [project-name] - if you will not enter a project name then Heroku will generate a random project name.
d.	Git init – initialize git for current project
e.	Git add . – this will add all the file/changed files in a queue to be committed.
f.	heroku git:remote -a [project name]
g.	git commit -m “some message to identify your commit”
h.	git push Heroku master
8.	This will generate a project on Heroku dashboard.
9.	Go to package.json & add following command In scripts section :
a.	“start” : “node [your main file.js]” 
i.	Eg : “start” : “node app.js”
10.	Go to Heroku dashboard and click on “Open app” option .
11.	This will open a new window with app url & now you can enter you endpoints and its all done.







