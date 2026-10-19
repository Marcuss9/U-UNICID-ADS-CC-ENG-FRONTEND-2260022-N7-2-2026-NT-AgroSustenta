FROM nginx:1.28-alpine
ENV PORT=8080
COPY deploy/default.conf.template /etc/nginx/templates/default.conf.template
COPY src/ /usr/share/nginx/html/
EXPOSE 8080
