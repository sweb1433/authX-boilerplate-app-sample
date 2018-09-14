# authX-boilerplate-app-sample
## Brief description of application setup with authX.in

[![N|Solid](http://i0.wp.com/www.haashall.org/wp-content/uploads/2015/10/87cc0576629f9e533cd1d331fd98d8bc.png?resize=100%2C100)](https://authx-40baa.firebaseapp.com/)

## User guide

 ###  -Step 1. Create a login Button
      -Make a login button in you app's landing page and
       pass it auth service login url.
      (http://localhost:3001/#loginemail)
### -step 2. Pass Redirect URL

    -Pass the redirect URL (which you entered at the time of app registration) 
     as querystring with auth service login url



### Step 3. Pass Unique app Id
    - Also Pass the unique App ID 
      as querystring with auth service login url


### Step 4. Example
    - Example: 
      https://authx-40baa.firebaseapp.com/#loginemail?apto=[YOUR_REDIRECT_URL]&apid=[YOUR_APP_ID]
    

