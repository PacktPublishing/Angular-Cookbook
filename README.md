# Angular Cookbook

<a href="https://www.packtpub.com/product/angular-cookbook/9781838989439?utm_source=github&utm_medium=repository&utm_campaign=9781838989439"><img src="https://static.packt-cdn.com/products/9781838989439/cover/smaller" alt="Angular Cookbook" height="256px" align="right"></a>

This is the code repository for [Angular Cookbook](https://www.packtpub.com/product/angular-cookbook/9781838989439?utm_source=github&utm_medium=repository&utm_campaign=9781838989439), published by Packt.

**Over 80 actionable recipes every Angular developer should know**

## What is this book about?

The Angular framework, powered by Google, is the framework of choice for many web development projects built across varying scales. It’s known to provide much-needed stability and a rich tooling ecosystem for building production-ready web and mobile apps. This recipe-based guide enables you to learn Angular concepts in depth using a step-by-step approach. You’ll explore a wide range of recipes across key tasks in web development that will help you build high-performance apps.

This book covers the following exciting features: 
* Gain a better understanding of how components, services, and directives work in Angular
* Understand how to create Progressive Web Apps using Angular from scratch
* Build rich animations and add them to your Angular apps
* Manage your app's data reactivity using RxJS
* Implement state management for your Angular apps with NgRx

If you feel this book is for you, get your [copy](https://www.amazon.com/dp/1838989439) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" 
alt="https://www.packtpub.com/" border="5" /></a>


## Instructions and Navigations
All of the code is organized into folders. For example, Chapter02.

The code will look like the following:
```
import { Directive, Input } from ‘@angular/core’;
@Directive({
selector: ‘[appHighlight]’
})
export class HighlightDirective {
@Input() highlightText = ‘’;
@Input() highlightColor = ‘yellow’;
constructor() { }
}
```

**Following is what you need for this book:**

The book is for intermediate-level Angular web developers looking for actionable solutions to common problems in Angular enterprise development. Mobile developers using Angular technologies will also find this book useful. Working experience with JavaScript and TypeScript is necessary to understand the topics covered in this book more effectively.

With the following software and hardware list you can run all code files present in the book (Chapter 1-13).

### Software and Hardware List

| Chapter  | Software required                   | OS required                        |
| -------- | ------------------------------------| -----------------------------------|
| 1-13     | Visual Studio Code (IDE)            | Windows, Mac OS X, and Linux (Any) |
| 1-13     | Angular                             | Windows, Mac OS X, and Linux (Any) |
| 1-13     | TypeScript 3.7                      | Windows, Mac OS X, and Linux (Any) |
| 1-13     | ECMAScript 11                       | Windows, Mac OS X, and Linux (Any) |



We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](https://static.packt-cdn.com/downloads/9781838989439_ColorImages.pdf).


### Related products <Other books you may enjoy>
* Angular Projects - Second Edition [[Packt]](https://www.packtpub.com/product/angular-projects-second-edition/9781800205260?utm_source=github&utm_medium=repository&utm_campaign=9781800205260) [[Amazon]](https://www.amazon.com/dp/1800205260)

* Angular for Enterprise-Ready Web Applications - Second Edition [[Packt]](https://www.packtpub.com/product/angular-for-enterprise-ready-web-applications-second-edition/9781838648800?utm_source=github&utm_medium=repository&utm_campaign=9781838648800) [[Amazon]](https://www.amazon.com/dp/1838648801)

## Get to Know the Author
**Muhammad Ahsan Ayaz**
is a Google Developer Expert in Angular and a software architect at Syncron. He has taught programming worldwide for the past 8 years through articles, video content, one-to-one mentoring, and tech talks at different global conferences. He has developed several libraries and plugins used by hundreds of thousands of developers, including ngx-device-detector, which has over 5 million installs and over 2,000 GitHub projects using it. He blogs at https://ahsanayaz.com and has a YouTube channel at https://ahsanayaz.com/youtube, where he regularly uploads video tutorials related to web and mobile app development. Apart from programming, Ahsan likes to travel and play multiplayer video games. He lives in Sweden with his wife.





