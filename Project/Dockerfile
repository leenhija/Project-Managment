FROM node:20-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

From nginx:alpine
COPY --from=build /app/dis /user/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g","daemon off;"]
