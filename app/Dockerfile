FROM node

ENV DB_HOST=localhost \
    DB_PORT=3306 \
    DB_USER=jsapp \
    DB_PASSWORD=password \
    DB_NAME=my_db

RUN mkdir -p /home/app && chown -R node:node /home/app

WORKDIR /home/app

COPY ./ /home/app

RUN npm install

USER node

EXPOSE 3000 

CMD ["node","server.js"]
