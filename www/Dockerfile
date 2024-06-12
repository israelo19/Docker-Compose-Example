FROM alpine:3.20

WORKDIR /www

COPY package.json /www/package.json

RUN apk add --update nodejs npm

RUN npm install

COPY . /www/

EXPOSE 3000

CMD ["npm", "start"]



