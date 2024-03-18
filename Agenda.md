# Agenda

> These are my notes on what I plan to teach in each [**upcoming class**](#mar-18). For the timeline of where we are today, see [the current schedule](./ReadMe.md#schedule).
>
> ##### *... Warn those who are idle ..., encourage the disheartened, help the weak, be patient with everyone.*
>
> > My philosophy of teaching, taken from [the source](https://www.bible.com/bible/111/1TH.5.14.NIV)


----

## Jan 8 (W01)

- Course Introduction
- GitHub Account Setup
- Software Setup
- Workbook Setup
  - [000](./src/000/ReadMe.md)
  - [001](./src/001-StartHere/ReadMe.md)
  - [002](./src/002/ReadMe.md)

## Jan 10

- [003](./src/003/ReadMe.md)
- Characteristics of JavaScript
  - case-sensitive
  - **not** a type-safe language
  - looks a lot like C#, but has a number of differences
  - string literals can be wrapped in double or single quotes
- The browser's dev tools provides a **console** that is a REPL (Read-Eval-Print-Loop) environment for JavaScript
- Node also provides/is a REPL for JavaScript
- **Homework:**
  - [ ] Complete the 003/practice
  - [ ] Start the About and GitDoc assignments on Teams

## Jan 12

- [ ] Today's Lesson(s)
  - Complete [004](./src/004/ReadMe.md) (and review [its LOGs](./src/004/LOGs.md))
    - HTML & Emmet in VS Code
    - Link a JavaScript file
  - Begin [005](./src/005/ReadMe.md)
    - Review [its LOGs](./src/005/LOGs.md)

----

## Jan 15 (W02)

- [ ] Practice Assignments
  - About Me
  - GitDoc Usage
  - GitDoc Typing Profile
- [ ] In-Class #1 (**for marks**)
- *TBA*

## Jan 17

- [x] Discussion about the importance of Academic **Honesty** and the dangers of Academic Dishonesty
- [x] Today's Lesson(s)
  - [**006**](./src/006/ReadMe.md) - Intro to Functions in JavaScript
    - Review [its LOGs](./src/006/LOGs.md)
  - [**007**](./src/007/ReadMe.md) - Creating JavaScript Functions
    - Review [its LOGs](./src/007/LOGs.md)

## Jan 19

> *Complete any topics from Sep 19 that were not covered...*

- [ ] Today's Lesson(s)
  - [**008**](./src/008/ReadMe.md) - Form Input and Handling Events
    - Review [its LOGs](./src/008/LOGs.md)
    - <details><summary>Use the [demo-events](./src/008/demo-events/) as a starter</summary> *(and pull the solution from [this file](backlog\(sort-queue)\w03-events_default_behaviour\js\main.js))*</details>
      - Demo creating an event handler
      - Demo adding an event listener
      - Demo **mouse** events such as `click`, `dblclick`, `mouseenter`, `mouseleave`, `mousemove`
      - Demo adding and removing CSS classes programmatically (from `.classList`)
      - Demo an anonymous handler for an event listener
- [ ] **Homework:** Review the [Learn by Play](./src/005/ReadMe.md#learn-by-play) from [005](./src/005/ReadMe.md).

> To grab a starting point for the demo, you can use [**tiged**](https://github.com/tiged/tiged) (based on [`degit`](https://github.com/Rich-Harris/degit) by Rich Harris, creator of Svelte) to grab a copy of the demo folder from my workbook. Note that you will need to have `pnpm` installed and working on your computer. Run the following code in the terminal from the root of your repository:
>
> ```bash
> pnpm dlx tiged --disable-cache --force CPSC-1520/cpsc-1520-workbook-jan2024-a03-dgilleland/src/008/demo-events ./src/008/demo-events
> ```
>
> ***Note:** You may need to <kbd>ctrl</kbd>+<kbd>c</kbd> to stop the `pnpm tlx tiged` command after it has finished downloading the demo folder.*

----

![Here be dragons](./docs/images/here-be-dragons.png)

----

## Jan 22 (W03)

- [x] Here's another learning resource: https://javascript.info/
- [ ] Release Lab 2

## Jan 24

- [ ] *Work Period*

## Jan 26

- [ ] Today's Lesson
  - [**012**](./src/012/ReadMe.md) - Making Decisions
    - Review [its LOGs](./src/012/LOGs.md)
    - Nesting If-Else statements (using the [grammar demo](./src/012/demo-grammar/))
    - Use decisions in form validation
      - Use [this sample](https://chat.openai.com/share/7f9ac87e-8778-43b0-b9b8-dc1c4e8fe8a7)
  - [**013**](./src/013/ReadMe.md) Forms

    ```bash
    pnpm dlx tiged --disable-cache --force CPSC-1520/cpsc-1520-workbook-jan2024-a03-dgilleland/src/013 ./src/013
    ```

    - Also check out this on [Learning Web Forms](https://web.dev/learn/forms/)
- **Homework:**
  - [**009**](./src/009/ReadMe.md) - Waiting for the DOM

    ```bash
    pnpm dlx tiged --disable-cache --force CPSC-1520/cpsc-1520-workbook-jan2024-a03-dgilleland/src/009 ./src/009
    ```

  - [**010**](./src/010/ReadMe.md) - Debugging JavaScript

    ```bash
    pnpm dlx tiged --disable-cache --force CPSC-1520/cpsc-1520-workbook-jan2024-a03-dgilleland/src/010 ./src/010
    ```

  - [**011**](./src/011/ReadMe.md) - Organizing Functions in JavaScript

    ```bash
    pnpm dlx tiged --disable-cache --force CPSC-1520/cpsc-1520-workbook-jan2024-a03-dgilleland/src/011 ./src/011
    ```

----

## Jan 29 (W04)

- [ ] In-Class Lab 3

## Jan 31

- [ ] [Shipping Calculator](./src/013/shipping-calculator/Readme.md)

## Feb 2

- [ ] In-Class Lab 4
  - *Intro to the In-Class Lab 4*

----

## Feb 5 (W05)

- [ ] Solution to Lab 4
- [ ] [015](./src/015/ReadMe.md) Intro to Loops

    ```bash
    pnpm dlx tiged --disable-cache --force CPSC-1520/cpsc-1520-workbook-jan2024-a03-dgilleland/src/015 ./src/015
    ```


## Feb 7

- [ ] [016](./src/016/ReadMe.md) Intro to Arrays

    ```bash
    pnpm dlx tiged --disable-cache --force CPSC-1520/cpsc-1520-workbook-jan2024-a03-dgilleland/src/016 ./src/016
    ```

----


## Feb 26

- [ ] [018](./src/018/ReadMe.md) Intro to JavaScript Objects (in their various forms)
  - [ ] Object Literals

    ```bash
    pnpm dlx tiged --disable-cache --force CPSC-1520/cpsc-1520-workbook-jan2024-a03-dgilleland/src/018 ./dan/018
    ```

## Feb 28

- [ ] In-Class 5

----

## Mar 1

- [ ] More on JavaScript objects (primarily in the Node terminal)
  - [ ] [Object Literals and `get`/`set` methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters)
  - [ ] [Creating Objects using Constructor Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#using_a_constructor_function)
  - [ ] **Prototypical Inheritance in JS:** [Adding Properties to Existing Objects through the Prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#inheritance)
- [ ] **Homework:**
  - [ ] Read about the [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#using_this_for_object_references) keyword to understand its relationship to objects in JavaScript
  - [ ] Read about [comparing objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#comparing_objects) to appreciate how objects in JavaScript are reference types

----

## Mar 5

```bash
pnpm dlx tiged --disable-cache --force CPSC-1520/cpsc-1520-workbook-jan2024-a03-dgilleland/src/019 ./src/019
```

- [ ] JSON and JavaScript Objects
  - [ ] Explore via the `node` environment in the terminal
  - [ ] A note on the `fs` module in Node
- [ ] Intro to the Fetch API
  - [ ] Web APIs and JSON responses
  - [ ] What is the Fetch API?
- [ ] A word on [Arrow Functions](./src/019/ReadMe.md#arrow-functions)
- [ ] A quick-n-plain Node package using `vite`
  - [ ] Why we need a Web Server for `fetch`


## Mar 6

- [ ] Continue exploring Fetch API, but within a Node project

## Mar 8

- [ ] Another Fetch API example consuming data from RandomUser.me; this ad-hoc example is found under the [sandbox/UserProfile/](./sandbox/UserProfile/ReadMe.md) folder.
  - [ ] Consume JSON data from [RandomUser.md](https://randomuser.me)
  - [ ] Render information in the DOM through template strings with placeholders for content
  - [ ] Today's demo is also recorded and available in MS Teams under the *Files* tab; navigate to `Recordings>View Only` and look for the one on this date (March 8).

----

## Mar 11

- [ ] Continue the [User Profile](./sandbox/UserProfile/ReadMe.md) example. In this example, we'll attempt to
  - [ ] Integrate additional Node packages (in this case, Leaflet.js, to render a map)
  - [ ] **DOM API** to create elements and text nodes and to change properties of created elements; these dynamic elements are then added to the DOM so that they are rendered in the page

## Mar 13

- [ ] Continue the [User Profile](./sandbox/UserProfile/ReadMe.md) example. In this example, we'll attempt to
  - [ ] Short demo of using `data-*` attributes on DOM elements as a means of retaining metadata for use in your JavaScript code.

## Mar 15

- [ ] Free lab period

----

## Mar 18

- [ ] Timeouts and Intervals in JavaScript - [024](./src/024/ReadMe.md)
  - [ ] What are Timeouts?
  - [ ] What are Intervals?
  - [ ] How to start Timeouts/Intervals?
  - [ ] How to stop Timeouts/Intervals?
  - [ ] StopWatch 2.0 is kinda good
- [ ] [DOM API Demo/Practice](./src/025/ReadMe.md)

## Mar 20

- [ ] **Review Class: Open Questions**
  - [ ] This class will be dedicated to answering questions about JavaScript material covered so far in the course.

## Mar 22

- [ ] **In-Class 6** - Fetch API
- [ ] Assessment 2 (Take-Home Lab) released (due on **Mar 29**)

----

## Mar 25

- [ ] A bit more on Node-based project
- [ ] Lab time to work on Assessment 2

## Mar 27

- [ ] A bit more on Node-based project
- [ ] Lab time to work on Assessment 2

## Mar 29

- [ ] **Quiz 4** on Moodle closes
- [ ] Lab time to work on Assessment 2
- [ ] **Assessment 2 Due Today**

----

## Apr 1

- [ ] Classes in JavaScript


## Apr 3

- [ ] *TBD*


## Apr 5

- [ ] **In-Class 7** - Node Projects
- [ ] *TBD*


----

## Apr 8

- [ ] *TBD*


## Apr 10

- [ ] *TBD*


## Apr 12

- [ ] **Quiz 5** on Moodle closes
- [ ] *TBD*

----

## Apr 15

- [ ] *TBD*


## Apr 17

- [ ] *TBD*


## Apr 19

- [ ] *TBD*


----

## Apr 22

- [ ] *TBD*


## Apr 24

- [ ] **In-Class 8** - 
- [ ] **Assessment 3 Due Today**


## Apr 26

- [ ] *Final day of classes*
- [ ] **Quiz 6** on Moodle closes



## Future

