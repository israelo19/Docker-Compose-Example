FROM alpine:3.20

WORKDIR /api

COPY package.json /api/package.json

RUN apk add --update nodejs npm

RUN npm install --force

COPY . /api/

EXPOSE 3000

CMD ["npm", "start"]



