<h1 align="center">✈️🌎  Wondrous Travel 🌎✈️</h1>  

#### A Turing School of Software & Design Mod 2 Final Project

---

## Table of Contents
* [Introduction](#introduction)
* [Deploy](#Deploy)
* [Features](#features)
* [Technologies](#technologies)
* [Author](#author)

## Introduction
The primary goal of this project was to create an application for a traveler to manage and track their trips. A user can log in to see a dashboard with their past, present, future, and pending trips, along with the annual amount spent on travel. They can also fill out a form to make a trip request. The specifications can for the project can be found [here](https://frontend.turing.edu/projects/travel-tracker.html).

## Goals
* Design & build a working app from scratch
* Use API to recieve data and post new data.
* Use TDD
* Use SASS
* Accessibility - 100% through Lighthouse
* Easy to navigate UI/UX  

## Deploy
1. [Use this deploy link!](https://darlaevans2000.github.io/wondrous-travel/)
2. Clone down the API Data `git clone https://github.com/turingschool-examples/travel-tracker-api`
3. Run `npm i` inside the API Data file. 
4. Then run `npm start` to get the data running! 
5. Refresh the deploy link and enter `traveler1` as user name (or any number at the end between 1-50) and password is `travel2020`
---

## Features

#### Login and Dashboard
On load, the user sees a login form. Credentials are username: `traveler50` (or any number at the end between 1-50) and password: `travel2020`     
Once logged in, a user can see all their trips displayed (past, present, future, approved, and pending) and sorted by date, as well as some stats on how much they've spent on trips for the current year. They can then from there choose if they want to see `current trips` `upcoming trips` `previous trips` or `pending trips`.
<p align = "center">
 <td><img src="https://media.giphy.com/media/B1mRqpHy2yIXZuEl0F/giphy.gif" alt="Demonstation of app working"
 width="700" height="auto" /></td>
</p>

#### Plan A New Trip
Users can fill out the form to price a new trip by clicking `estimate trip cost`. Once requested, a new trip card is added to the dashboard with a status of 'pending'. There will be an error message if all fields are not filled adequately. 
<p align = "center">
 <td><img src="https://media.giphy.com/media/qxIcebjCWb5pUWhBYi/giphy.gif" alt="Demonstation of Booking a trip"
 width="700" height="auto" /></td>
</p>

---

#### Future Additions
- Add a travel agent with their own login and dashboard of new trip requests ("pending" trips). Allow them to see their total income generated this year and travelers on trips for today's date. Allow them to approve/deny trip requests, search users by name, view a single user's info, add suggested activities, and delete an upcoming trip for the user.
- Add ability for users to delete their pending travel requests.
---

## Technologies
JavaScript, Fetch/Async, JSON, Mocha, DayJS Chai, HTML5, SASS, Normalize, Webpack

## Author
<table>
    <tr>
        <td> Darla Evans <a href="https://github.com/darlaevans2000">GH</td>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/76928485?v=4" alt="Darla Evans GitHub Picture"
 width="150" height="auto" /></td>
</table>

**************************************************************************
###### This project was created for [Turing School of Software and Design](https://turing.io/)
###### 2021/08/10
**[Back to top](#table-of-contents)**
