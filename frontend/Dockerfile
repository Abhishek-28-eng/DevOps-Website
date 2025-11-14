# Frontend Dockerfile

# Stage 1: Build
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Fix Vite binary permissions (important on Alpine)
RUN chmod +x node_modules/.bin/vite

# Build the frontend
RUN npx vite build

# Stage 2: Production image using Nginx
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output to nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config if any (optional)
#COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


# # Stage 1: Build frontend
# FROM node:20-alpine AS build

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN chmod +x node_modules/.bin/vite
# RUN npx vite build

# # Stage 2: Serve with Nginx
# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html

# # Optional: Custom nginx config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
