# AngularSanity

## Blog template using Sanity.io and Angular

This starter is a statically generated blog that uses Angular for the frontend and Sanity to handle its content. Using
the magic of Standalone components

you can easily edit and adapt this template, just changing or adding fields to the schemas

### To populate the blog with data just go to angularsanity

````
cd angularsanity
````

Install the node modules :

```
npm install
```

Start Sanity Studio:

```
sanity studio
```

you may have a CORS error, don't worry, just add the localhost path in the sanity studio

In angularsanity/sanity.config.ts

change the '' with your projectid key

````
 projectId: '', to projectId: 'YOURKEY'
````

the same in angularsanity/sanity.cli.ts

````
 projectId: '', to projectId: 'YOURKEY'
````

the same in `environments/environment.ts`

````
 SANITY_PROJECT_ID:"YOURAPIKEY",
 SANITY_DATASET:"production",
 SANITY_API_VERSION:"2022-11-15", to mos recent date
 SANITY_PROJECT_TITLE:"YOURPROJECTNAME",
````

### Troubleshooting

To solve Buffer or Node.js Classes dependencies
run

``` shell
npm install --save @types/node
```

and edit the tsconfig.json

``` json
"compilerOptions": {
   ...
   "types": ["node"],
   "typeRoots": ["node_modules/@types"]
 },

```

To stop the Angular CLI warnings about commonjs

``` json
// angular.json

"build": {
   ...
         "options": {
           "allowedCommonJsDependencies": [
             "@sanity/client"
          ],
   ...
       },
```

Change the API version : [https://www.sanity.io/docs/api-versioning](https://www.sanity.io/docs/api-versioning)

Errors related to imports just add

``` json
//tsconfig.json
   "allowSyntheticDefaultImports":true,
```

To draw HTML properly

``` javascript
import {toHTML} from '@portabletext/to-html'
   this.yourVar = toHTML(res.content);

```

``` html
<div [innerHTML]="yourVar">
</div>
```


Run the angular project
```shell
ng serve
```


### Non Angular Library's used for this template
```json          
   "sanity",
   "@portabletext/to-html",
   "@sanity/client",
   "@sanity/image-url",
   "@sanity/vision",
   "@types/node",
   "groq",
   "tailwindcss",
```


### Deploy to production

You can use

```shell
ng deploy
```

and select if you want :
* Amazon S3
* Firebase
* Netlify
* Npm
* Github Pages

also you can use the command

```` shell
npm run deploy
````

this make an optimize bundle and deploy to firebase  you can change it just removing the
```&& firebase deploy ```
and replacing with the command to another hosting
