# Start the API
CMD [ "npm", "run", "dev" ]

# Use the latest LTS version of Node.js as the base image
FROM node:lts

# Set the working directory in the container
WORKDIR /app

# Run the tool installation command
RUN <install_command>

# Clone the code repository
RUN git clone https://github.com/ninh-nd/scanner-template.git .

COPY package.json ./

ADD . ./
RUN npm install

# Replace content in index.js
RUN sed -i 's/<code_placeholder>/<code_content>/g' index.js

EXPOSE 3000

# Start the server when the container is run
CMD [ "npm", "start" ]