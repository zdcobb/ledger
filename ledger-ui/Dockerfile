FROM debian:11
WORKDIR /app
COPY . .
RUN apt-get update -y && apt-get install -y npm
RUN npm install -g @vue/cli
EXPOSE 8080
CMD ["npm", "run", "serve"]