FROM node:18-alpine

WORKDIR /app
COPY ./ ./

RUN yarn
RUN yarn build

RUN apk --no-cache add nginx
COPY ./nginx.conf /etc/nginx/nginx.conf
CMD nginx -g 'daemon off;'
