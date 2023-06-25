FROM node:18-alpine

WORKDIR /app
COPY ./build ./build

RUN apk --no-cache add nginx
COPY ./nginx.conf /etc/nginx/nginx.conf
CMD nginx -g 'daemon off;'