# FROM nginx:latest

# COPY default.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80
# EXPOSE 443


FROM nginx:stable-alpine

RUN mkdir -p /var/www/certbot

CMD ["nginx", "-g", "daemon off;"]
