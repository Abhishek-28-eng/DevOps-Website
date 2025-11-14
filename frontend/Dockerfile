# Stage 1: Build frontend
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN chmod +x node_modules/.bin/vite
RUN npm run build

# Stage 2: Serve build with Nginx
FROM nginx:alpine

# Remove default nginx configuration (optional but clean)
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy build output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
