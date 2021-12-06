FROM node

WORKDIR /home/node/docker-redis

COPY ./ /home/node/docker-redis

RUN yarn install

CMD yarn start

EXPOSE 3000