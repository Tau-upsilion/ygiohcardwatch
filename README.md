# Yugioh Card Watch

This is an application that scrapes data from certain cards that the user puts in the dashboard.

**[As of 7/09/2020] Some basic core functions. These will still need be refined more as the development of the project goes on:**

## Dedicated User Dashboard (Client)

### Client Features

1. [ ] Authorized Users
    * [ ] Adding cards to "watch list"
    * [ ] Deleting cards from "watch list"
    * [ ] See card's lowest price by day
    * [ ] See card's lowest price by week
    * [ ] See card's lowest price by month
2. [ ] Vistors only see homepage
3. [ ] Vistors can see the most watched card
4. [ x ] Angular Setup

## Database

### Database Features

1. [ ] Setting up MariaDB RDMS
2. [ ] Database to keep track of cards and prices
3. [ ] Keeps track of users
4. [ ] Keeps track of users' choices for watched cards
5. [ ] Time stamp data

### Entities

1. User
    * Email
    * UserID
    * Username
    * Name
    * password
2. Card
    * Price
    * Date
    * Url
    * Card Name
    * Set the card came frome
    * Rarirty

## ServerSide

### Server Side Features

1. [ ] Send objects from database to client 
2. [ ] Create the Web Scraper
    * [ ] Scrapes data from a specific card's page
        * [ ] This will be sent to the database 
    * [ ] Deletes cards that are not currently being watched by any user
3. [ ] Authentication
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
4. [ ] Everytime a user adds a card, run scraper script to update the database