# Angular-Bulma-Book

Creating interfaces with Angular and Bulma CSS framework

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Documentation

[Node.js](https://nodejs.org/en/docs/)

[Angular](https://angular.io/)

[AngularCLI](https://cli.angular.io/)

[RxJS](http://reactivex.io/rxjs/)

## Install the Angular CLI

In order to get started with Angular development, [Node.js](https://nodejs.org/en/download/) and the [Angular CLI](https://angular.io/cli) is needed. To install the Angular CLI use the following command in the terminal window:

```
$ npm install -g @angular/cli
```
## Generate Code scaffolding

### ng new command switches used

#### --style=[css | scss | less | sass | styl]

The style option specifies what CSS preprocessor is used in building the project. the options are: css, scss, less, sass, styl.

#### --routing

The routing option generates a file app-routing.module.ts file.

#### --enable-ivy

The enable-ivy option enables the next generation renderer.

#### --skip-install

This skip-install option disables the npm install after code generation.

#### --skip-git

### Angular CLI Command

```
ng new ngbulmabook --routing --style scss --enable-ivy --skip-install --skip-git
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### ng generate commands

```
ng generate component components/books -m app
ng generate component components/books-edit -m app
ng generate component components/customers -m app
ng generate component components/customers-edit -m app
ng generate component components/dashboard -m app
ng generate component components/orders -m app
ng generate component components/orders-edit -m app
ng generate service services/data
```

### Using Ivy Render Engine

There are many issues using Ivy. Until it is occicially released, I recommend disabling it.
In the angularCompilerOptions in your project's tsconfig.app.json set enableIvy to false.

```
{
  "compilerOptions": { ... },
  "angularCompilerOptions": {
    "enableIvy": false
  }
}
```

AOT compilation with Ivy is faster and should be used by default. In the angular.json workspace configuration file, set the default build options for your project to always use AOT compilation.

```
{
  "projects": {
    "ng8template": {
      "architect": {
        "build": {
          "options": {
            ...
            "aot": true,
            ...
          }
        }
      }
    }
  }
}
```

## Add SEO (Search Engine optimization)

Create the file robots.txt to the src folder and create the text

```
User-agent: *
Allow: /
```

Create the file sitemap.xml to the src folder and create the text:

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>https://sad-clarke-31f3c6.netlify.com</loc>
      <lastmod>2019-07-03</lastmod>
      <changefreq>always</changefreq>
      <priority>1.0</priority>
   </url>
</urlset>
```
Substitute https://sad-clarke-31f3c6.netlify.com for the site URL.

Modify angular.json and add "src/robots.txt" and "src/sitemap.xml" in tha assets,

```
            "assets": [
              "src/favicon.ico",
              "src/assets",
              "src/robots.txt",
              "src/sitemap.xml
            ],
```

Add the meta data in the ```<head>``` section in the intex.html file in the src folder:

```
  <link rel="canonical" href="https://sad-clarke-31f3c6.netlify.com" />
  <meta name="description" content="This is a meta description sample. We can add up to 160 characters.">
```
Substitute https://sad-clarke-31f3c6.netlify.com for the site URL.

Install the packages needed for Bulma.

```
npm install bulma --save
```
Update the styles property in angular.json to include the new stylesheet for Bulma.

```
{
  ...
  "styles": [
    "node_modules/bulma/css/bulma.min.css",
    "src/styles.css"
  ],
  ...
}
```

Install Angular Filter Pipe

```
npm install ngx-filter-pipe --save
```

Install Angular Order Pipe

```
npm install ngx-order-pipe --save
```

## Add Font Awesome Common Packages

```
npm install @fortawesome/fontawesome-svg-core --save
npm install @fortawesome/angular-fontawesome --save
```

## Add Font Awesome Free Edition Packages

```
npm install @fortawesome/free-brands-svg-icons --save
npm install @fortawesome/free-solid-svg-icons --save
```

## Add Font Awesome Professional Edition Packages

```
npm install @fortawesome/pro-solid-svg-icons --save
npm install @fortawesome/pro-regular-svg-icons --save
npm install @fortawesome/pro-light-svg-icons --save
```

Modify src/app/app.module.ts

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
...
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGitHub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faTwitter, faGitHub, faMedium, faHeart);
  }
}
```

You can also import entire icon styles. But be careful! Whatever you import may end up bloating your final bundle with icons you're not using.

```
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
...
export class AppModule {
  constructor() {
    library.add(fas, far);
  }
}
```

## Install Node Packages

```
npn install
```

## Install NPM Check Update (NCU) ad Check packages.json for outdated packages

At times, the package.json file can get out of date from what is current. To check for outdated packages install npm-check-update, run ncu to see outdated packages, and then run ncu -u to update the packages.

```
npm install -g npm-check-updates
ncu
ncu -u
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
