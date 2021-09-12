# build environment
FROM node:alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./

RUN yarn
RUN yarn global add react-scripts@3.4.1 --silent
COPY . /app
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# new
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE $PORT

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'