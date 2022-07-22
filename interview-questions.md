# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: To add a foreign key as a developer if i forgot i would use db:migrate to go back and create the foreign key.

  Researched answer:
  If you forgot to assign a foreign key, you can generate a migration in order to update your database. The syntax will be $ rails generate migration to update. Then you would run $ rails db:migrate after generating a migration.



2. Which RESTful routes must always be passed params? Why?

  Your answer: The RESTful routes that shoulld  be passed params is edit,show, update, and destroy.

  Researched answer: 
The RESTful routes that shoulld  be passed params is edit,show, update, and destroy. They must be passed params becaus ethey basically modify something specific  in the table.


3. Name three rails generator commands. What is created by each?

  Your answer:Three rails generator commands are generate model generate controller,generate migration. 

  Researched answer:
Three rails generator commands are generate model,generate controller,generate migration. Rails generate controller can be called the name of the app you are creating.It coordinates the interaction between the user, the views, and the model.Rails generate model adds database records,finds particular data youre looking for,update the data or removes data.Rails generate migrate 
alows you to alter your database in a organized fashion.A migration can be ran if you want to change the column name or datatypes.Rails db:migrate is ran in order to make changes.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          
Index, list all students.


action: "POST"   location: /students       
Create, create new students.


action: "GET"    location: /students/new
New, show new students.


action: "GET"    location: /students/2  
Show, show info about specific students.id 2

action: "GET"    location: /students/2/edit    
Edit, show edit form for one student.id 2

action: "PATCH"  location: /students/2      
Update, update certain students.id 2


action: "DELETE" location: /students/2      
Destroy, delete students.id 2



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a developer, I can create an app, to manage my to do list.

As a developer, I can create a model containing task, priorities,and due date.

As a developer, I can create a database to hold the tasks and organize them by the due date.

As a customer, I can see all the tasks on the to do list in a data base.

As a customer, I can edit all the tasks on the application

As a customer, I can see a button to add tasks with all fields being valid.

As a customer, I can see a button to delete tasks.

As a customer, I can mark a task as completed.

As a customer, I can see a button on the task page to take me back to the home page.

As a customer, I am redirected to the home page when I submit a valid task.