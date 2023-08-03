
# Maya Zbeda Bad Bank 

My module 2 capstone for MITxPRO. It's called the "bad bank" because user data is completely exposed, and there is a lack of strongly enforced, database-centric back end.


## Acknowledgements
Special thanks to Kevin Grimaldi and Sonia Jimenez who's work I referenced on the suggestion of my instructors. Their clean coding helped me cross-reference my code as well as try new skills.

-Kevin Grimaldi:
https://github.com/anthgrim

-Sonia Jimenez:
https://github.com/Soniajim24


Also loved using this readme templating tool because I never know what to say or write:

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


I am not taking contribution to this repository at the moment, but if any other MITxPro student's come across this I hope this helps as well as the aforementioned graduates.



## Features

- Create Account with:
    - Email
    - Name
    - Avatar 
    - Password
- Log-in and Out
- Deposit Screen
- Withdrawal Screen
- Tracking screen of account balance and user profile info
- All Data screen that shows the stored accounts



## Installation

First, clone the repository. Install dependencies with npm or yarn in the root directory. I personally used npm

```bash
  npm install
```


## Lessons Learned

#### What did you learn while building this project? 
#### What challenges did you face and how did you overcome them?

Various dependencies are quick to change or reach EOL, so I had to a lot of adjustments. The coding itself made sense, but I do think I need way more practice with pre-planning and execution with an understanding of how to make sure all the components play nicely with eachother.

To succesfully deploy my project after completion, I had to:

- Update node and npm to the latest versions
- Place a comment before lines of code that was causing eslint errors with an eslint-ignore comment (versioning conflict)
- Update the browser versioning
- Use a deployment server that worked well with the project. 

I have had great success using [Render](https://render.com/) since it seems to play well with front end applications and does a good job of showing deployment errors in its build logs. My attempts at using Heroku, AWS, and GitPages each came with their own hurdles in terms of compatability.
## License

[MIT](https://choosealicense.com/licenses/mit/)

