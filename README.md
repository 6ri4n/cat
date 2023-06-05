# cat

This guide will demonstrate how to setup a simple react app that generates a random cat image and a random cat fact through AWS Amplify.

This guide will utilize AWS Amplify to do the following:

- Create an API through AWS Lambda and connect it to Amazon API Gateway to create an API endpoint.
- Deploy and host the react app which will be calling the API endpoint.

**WARNING**: make sure you complete all of the [prerequisites](https://docs.amplify.aws/start/getting-started/installation/q/integration/react/) before continuing.

#### Step 1

Create and navigate to the project directory.

Setup the react project within the project directory with the following command:

```
npx create-react-app .
```

#### Step 2

Installing AWS Amplify CLI to the project with the following command:

```
npm install @aws-amplify/cli
```

#### Step 3

Setting up the project on the cloud.

```
amplify init
```

Configuration setting questions will appear, fill out each field (you can press the enter key to select the default).

For the authentication method, select AWS profile and select your AWS account.

**NOTE**: If you're on Windows OS for the fields "Build Command" and "Start Command", enter the following: "npm run-script build" and "npm run-script start" respectively (without the quotations). If you've already finished filling out the fields, to configure the build and start commands again, use the following command:

```
amplify configure project
```

#### Step 4

Setting up the API.

```
amplify add api
```

Configuration setting questions will appear, fill out each field (you can press the enter key to select the default).

**NOTE**:
Enter REST for services,
/catzen for the path,
NodeJS for the runtime,
and serverless express for the function template.
No to the remaining fields.

#### Step 5

Setting up the frontend.

Go to the [App.js](./src/App.js) file and copy all of the content (from this GitHub repository).

Replace the content inside of the App.js file within your project directory with the content that you copied by pasting.

Go to the [App.css](./src/App.css) file and download the file (from this GitHub repository).

Move the downloaded file into the src directory within your project directory.

Follow the steps from App.css but with the [MediaQueries.css](./src/MediaQueries.css) file.

#### Step 6

Setting up the backend.

Go to the [app.js](./amplify/backend/function/BrianHuangCNE430FinalProjectLambda/src/app.js) file and copy all of the content (from this GitHub repository).

Replace the content inside of the app.js file within your project directory with the content that you copied by pasting.

**NOTE**: Do not confuse this file with the App.js from the frontend, this app.js file is a separate file located here: ./amplify/backend/function/[name-of-your-lambda-function]/src/app.js

#### Step 7

Deploying the backend on the cloud.

```
amplify push
```

Yes to continue. Give it a minute to upload the changes.

Once it's done, you can test the project locally if you wish with the following command:

```
npm start
```

#### Step 8

Deploying and hosting the frontend on the cloud.

```
amplify add hosting
```

Enter "Manual deployment" (without the quotations) for choose a type.

Then run the following command to upload the app:

```
amplify publish
```

After publishing, your terminal will display your app URL hosted on a amplifyapp domain.

**NOTE**: To delete all the environments of the project from the cloud and wipe out all the local files created by Amplify CLI, use the following command:

```
amplify delete
```
