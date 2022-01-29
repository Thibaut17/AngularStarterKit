# Extending image
#FROM node:carbon
FROM node:12.0.0 as build

#RUN apt-get update
#RUN apt-get upgrade -y
#RUN apt-get -y install autoconf automake libtool nasm make pkg-config git apt-utils

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Versions
#RUN npm -v
#RUN node -v

# Install app dependencies
COPY *.json /usr/src/app/
COPY karma.conf.js /usr/src/app/
COPY .editorconfig /usr/src/app/
COPY .browserslistrc /usr/src/app/

RUN npm install

# Bundle app source
COPY . /usr/src/app

# Port to listener
#EXPOSE 3000

# Environment variables
#ENV NODE_ENV production
#ENV PORT 3000
#ENV PUBLIC_PATH "/"

#RUN npm run start:build
RUN ng build
# Main command
#CMD [ "npm", "run", "start:server" ]
#CMD [ "serve", "-s", "build" ]
#CMD [ "npm", "run", "start","server","&" ]
#RUN npm run start server &
#ENTRYPOINT [ "npm", "run", "start","server","&" ]

# production env
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
