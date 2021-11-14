# postgreNode

 API endopoints 
 1.  URL : http://localhost:3000/
     method : GET
     body : empty
     output : Gets all the users  in the users table
    
 2.  URL : http://localhost:3000/userID
     method: GET
     body" empty
     output : Gets specific user with the userID
   
 3.  URL : http://localhost:3000/
     method : POST
     body : { "name" : <enter name here> , "email":<enter email here> }
     output : Inserts a new user with the name adn email 
     
 
 4.  URL : localhost:3000/userID
     method : PUT
     body : { "name" : <enter name here> , "email":<enter email here> }
     output : Update the user name and email for the userID specified
     
 5.  URL : http://localhost:3000/userID
     method : DELETE
     body : empty
     output : Deltes the user with the specified userID
