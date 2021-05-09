FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build -- --prod=true

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/InnT/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

#EXPOSE 4200 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
