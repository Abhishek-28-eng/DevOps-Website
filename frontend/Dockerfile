# # Frontend Dockerfile

# # Stage 1: Build
# FROM node:20-alpine AS build

# # Set working directory
# WORKDIR /app

# # Copy package.json and install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy the rest of the frontend code
# COPY . .

# # Fix Vite binary permissions (important on Alpine)
# RUN chmod +x node_modules/.bin/vite

# # Build the frontend
# RUN npx vite build

# # Stage 2: Production image using Nginx
# FROM nginx:alpine

# # Remove default nginx static files
# RUN rm -rf /usr/share/nginx/html/*

# # Copy build output to nginx
# COPY --from=build /app/dist /usr/share/nginx/html

# # Copy custom nginx config if any (optional)
# #COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Expose port 80
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]


# frontend/Dockerfile

# ---------- Stage 1: Build ----------
FROM node:20-alpine AS build

WORKDIR /app

# Install frontend dependencies
COPY package*.json ./
RUN npm install

# Copy all frontend code
COPY . .

# Fix permission (required on Alpine)
RUN chmod +x node_modules/.bin/vite

# Build the project
RUN npm run build

# ---------- Stage 2: Nginx Static Server ----------
FROM nginx:alpine

# Remove default static files
RUN rm -rf /usr/share/nginx/html/*

# Copy Vite build output
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for frontend
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

