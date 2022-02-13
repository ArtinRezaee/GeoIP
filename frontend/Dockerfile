FROM node:14.18.3

LABEL version="1.0"
LABEL description="Base Docker image for GeoIP frontend"

WORKDIR /geoIPApp

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --silent
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
