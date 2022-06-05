FROM node:alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache bash
RUN npm install 
RUN npm install -g @vue/cli
EXPOSE 8080
CMD ["npm", "run", "serve"]