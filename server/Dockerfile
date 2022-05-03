FROM node:alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache bash && apk add sqlite
RUN npm install
EXPOSE 4000
CMD ["npm", "run", "start_dev"]