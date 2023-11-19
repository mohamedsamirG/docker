FROM alpine
WORKDIR /app
COPY task.js .
RUN apk add --update nodejs
RUN apk add --update npm
RUN npm install express
CMD node task.js