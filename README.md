# GeoIP

This is an application that allows you to input an IP address and get the approximate geo location of the IP address. This application relies on [MaxMind GeoLite2 database](https://dev.maxmind.com/geoip/geoip2/geolite2/) to retrieve the geolocation data, You can choose to use either the `Web Service` or `Database Service`.''

![image](https://user-images.githubusercontent.com/22065489/153741720-6c993abc-4488-4140-8b26-6f7114c4a0b9.png)

## Running the Application
To run this application, first make sure you have docker desktop, then run `docker-compose up -d`. Once completed, you should be able to see 2 containers one for `backend` and one for `frontend` under the `geoip` working directory on docker desktop

## Tech Stack used
### frontend:

 - React.js
 - Typescript
 - Material UI
### backend
 - Node.js
 - Express
 - Typescript

## Testing
### Manual Testing

 - Enter a correct IP address (eg. 70.74.128.204) in the input field and click on the `search` button. You should expect to see a list with the following properties: `ipAddress`, `lat`, `long`
 - Enter an incorrect IP address (eg. 123445566s) in the input field and click on the `search` button. You should not see a list and you should be presented with an `Invalid IP Address` error in red below the input field
 - Do not enter anything in the input field and click on the `search` button. You should not see a list and you should be presented with an `Invalid IP Address` error in red below the input field

## Future

With more time, I would have:

 - Added automated tests
 - Better hid the credentials required to access MaxMind GeoLite2 
 - Setup CI/CD using github actions and deployed the application on Google Cloud App Engine
