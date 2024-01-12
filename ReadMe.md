# CPSC-1520 - **~~Student~~ Instructor Workbook** (Jan 2024)

> **Dan Gilleland**

## Schedule

> The following schedule is subject to change. Consult the course outline for the mark distribution. See the [Agenda](./Agenda.md) for details on upcoming and completed topics.
>
> **Also Note:** There is a new document regarding the [**Reading Assignments for *Moodle Quizzes***](./docs/ReadingAssessments.md). Also note the schedule for the quizzes, as access to the quizzes may be cut off once we are past the due date for the quiz.

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title       CPSC-1520 | Scheduled Topics & Assessments
    %% excludes    weekends
    %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)

    section Topics
    %% done - for finished tasks
    %% active - for current tasks
    %% crit - for red outline/background
    Intro, git & Workbook     :active,  part0, 2024-01-09, 2024-01-11
    Intro to JavaScript       :         part1, 2024-01-12, 1d
    Functions and Events      :         part2, after part1, 14d
    Making Decisions          :         part3, after part2, 7d
    Loops and Arrays          :         part4, after part3, 14d
    Reading Break             :         break, 2024-02-17, 2024-02-25
    JS Object Fundamentals    :         part5, after break, 11d
    Fetch Fundamentals        :         part6, after part5, 7d
    DOM API & Timers          :         part7, after part6, 7d
    NPM, Tools, ES Modules    :         part8, after part7, 14d
    Class, Object, Prototypes :         part9, after part8, 14d
    Extra Topics              :         end, after part9, 7d 

    section In-Class Labs/Exercises
    Lab 1, Jan 15  :     milestone, 2024-01-15, 0d
    Lab 2, Jan 19  :     milestone, 2024-01-19, 0d
    Lab 3, Jan 26  :     milestone, 2024-01-26, 0d
    Lab 4, Feb 02  :     milestone, 2024-02-02, 0d
    Lab 5, Feb 16  :     milestone, 2024-02-16, 0d
    Lab 6, Mar 22  :     milestone, 2024-03-22, 0d
    Lab 7, Apr 05  :     milestone, 2024-04-05, 0d
    Lab 8, Apr 24  :     milestone, 2024-04-24, 0d

    section Quizzes
    Quiz 1, Jan 19 :  milestone, 2024-01-19, 0d
    Quiz 2, Feb 02 :  milestone, 2024-02-02, 0d
    Quiz 3, Mar 01 :  milestone, 2024-03-01, 0d
    Quiz 4, Mar 29 :  milestone, 2024-03-29, 0d
    Quiz 5, Apr 12 :  milestone, 2024-04-12, 0d
    Quiz 6, Apr 26 :  milestone, 2024-04-26, 0d

    section Take-Home Assessments
    Assessment 1, due Feb 16 : 2024-02-09, 2024-02-16
    Assessment 2, due Mar 29 : 2024-03-22, 2024-03-29
    Assessment 3, due Apr 24 : 2024-04-17, 2024-04-24

```

----

## ![Inside This Repo](./docs/images/level.png) Inside this repository

This repository is your **Student Workbook** for participating in the in-class demos and for completing practice homework; the coding work is to be placed in the [*`src/`*](./src/ReadMe.md) folder. Learning Outcomes ([**LOGs**](./docs/logs/ReadMe.md)) and other useful notes can be found in the [**docs** folder](./docs), such as links to the [Reading Materials](./docs/Readings.md) for the course. Also, you are encouraged to use the [**docs/mynotes**](./docs/mynotes/ReadMe.md) folder to record your notes from each class.

> :warning: **Do *NOT*** use this repository for any assignments that are worth marks. For work worth marks in this course, only use repositories set up/approved by your instructor. :warning:

Additionally, you can find online notes at the course's [Moodle site](https://moodle.nait.ca) and on the two unofficial website notes: [current](https://cpsc-1520.github.io/cpsc1520/) and [legacy](https://cpsc-1520.github.io). Also be sure to checkout out the topical [**Learning Outcomes**](https://cpsc-1520.github.io/LOGs.html) used in class.

----

## ![Version Control](./docs/images/tasks.png) Version Control

At the end of the term, your repositories on the [CPSC-1520 GitHub Organization](https://github.com/CPSC-1520) will be removed. You will still have access to your local versions of these repositories for your personal use and review.

> :warning: **Do *NOT*** re-publish your assignment/assessment repositories - doing so with any materials worth marks is an act of academic dishonesty :warning:

----

## ![Software et.al.](./docs/images/code.png) Software & Resources

**Required** books, videos, tools, etc. for this course include:

- **Software**
  - [**git**](https://git-scm.com/downloads) - This is the beating heart of **Version Control**, something that you will work with every day. Second only to your editor in terms of usage, it's indispensible for managing your development in teams or on your own.
  - [**GitHub CLI**](https://cli.github.com/) (*Command-Line Interface*) - A tool for interacting with your GitHub repository on the command line.
  - [**node**](https://nodejs.org/en/download/) (which includes **npm**) - Node is a run-time that allows you to use JavaScript on the web server. It comes along with npm (*Node Package Manager*), a package-management tool for the command line that allows you to integrate 3rd-party libraries with your application.
  - [**Visual Studio Code**](https://code.visualstudio.com) (see [Notes](#vs-code-extensions) on VS Code extensions) - This is the preferred editor for working in almost any programming language.
    - [**Live Server**](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) Extension
- **Accounts/Services**
  - [**GitHub**](https://github.com) - Core to everything you will do, this service handles cloud hosting of your repositories and so, so much more!
  - [**Netlify**](https://www.netlify.com/) - Hosting platform for your website projects. Ultimately, you will need to know how to publish your projects as part of a *Continuous Integration* and *Continuous Development* (CI/CD) workflow. Suitable for static websites.
  - [**Vercel**](https://vercel.com/) - Like *Netlify*, *Vercel* offers hosting and CI/CD workflows to aid you in publishing your websites.
  - [**FireBase**](https://firebase.google.com/) - Similar to *Netlify* and *Vercel*, FireBase also offers various features/products to support dynamic websites, including *realtime databases* and *authentication*.
- **Books/Videos**
  - Refer to [Readings.md](./docs/Readings.md) in the docs folder for official and recommended reading materials. Also, take a look at the [LanguageRef.md](./docs/LanguageRef.md) doc.

Other recommended resources include:

- **Mozilla Developer Network** (*MDN*)
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [JavaScript - Dynamic client-side scripting](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

![Eloquent JavaScript](https://eloquentjavascript.net/img/cover.jpg)

----

### VS Code Extensions

Here are some helpful VS Code Extensions for JavaScript, HTML, and CSS Development.

- [**Live Server**](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [GitDoc](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.gitdoc)
- [Markdown All-In-One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [Intellicode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)

Down the road, if you're interested in learning TypeScript, consider installing the following extensions:

- [Total TypeScript](https://marketplace.visualstudio.com/items?itemName=mattpocock.ts-error-translator)

----
