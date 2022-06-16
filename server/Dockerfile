FROM node:16
WORKDIR /app
COPY . .
RUN apt update && apt install -y bash openssl \
  && npm install \
  && npx prisma migrate dev --name init
EXPOSE 4000
CMD ["npm", "run", "start_dev"]