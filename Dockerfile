FROM node:latest

WORKDIR /app

RUN curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b /usr/local/bin v0.42.0

COPY package.json ./

ADD . ./
RUN npm install

EXPOSE 3000

# Start the API
CMD [ "npm", "run", "dev" ]