FROM node:18

WORKDIR use/src/app
COPY app.js package*.json ./
RUN npm install
COPY . .

# lets copy the script to the container and run it.
COPY copy-file.sh /usr/src/app/copy-file.sh
RUN chmod +x /usr/src/app/copy-file.sh

EXPOSE 3000
CMD ["sh", "-c", "node app.js & /usr/src/app/copy-file.sh"]