# Yugioh Card Watch

This is an application that scrapes data from certain cards that the user puts in the dashboard.

**[As of 7/09/2020] Some basic core functions. These will still need be refined more as the development of the project goes on:**

1. Dedicated user dashboard (Client)
    * [ ] Authorized Users
        * [ ] Adding cards to "watch list" 
        * [ ] Deleting cards from "watch list" 
        * [ ] See card's lowest price by day 
        * [ ] See card's lowest price by week 
        * [ ] See card's lowest price by month 
    * [ ] Vistors only see homepage
    * [ ]
2. Database
    * [ ] Setting up MariaDB RDMS
    * [ ] Database to keep track of cards and prices
    * [ ] Keeps track of users
    * [ ] Keeps track of users' choices for watched cards
    * [ ] Time stamp data
3. ServerSide
    * [ ] Send objects from database to client 
    * [ ] Create the Web Scraper
        * [ ] Scrapes data from a specific card's page
            * [ ] This will be sent to the database 
        * [ ] Deletes cards that are not currently being watched by any user
    * [ ] Authentication
        * [ ] Add auth router
        * [ ] Create user with POST (Signup)
            * [ ] Validating fields
            * [ ] Check Email Uniqueness
            * [ ] Hash password to DB
            * [ ] Insert to DB
        * [ ] Login user with POST (Login)
            * [ ] Check email in DB
                * [ ] Compare passwords
                * [ ] Create and Sign JWT
                    * [ ] Respond
        * [ ] Create login form; error handling; redirection;
            * [ ] Validate required fields
        * [ ] Create sign up form; error handling; redirection;
            * [ ] Validate required fields
        * [ ] (optional) Some kewl OAuth stuff
    