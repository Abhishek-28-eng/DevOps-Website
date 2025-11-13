# Build Stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build frontend using Vite
RUN npm run build

# Production Stage
FROM nginx:stable-alpine

# Copy build output to Nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for container
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
