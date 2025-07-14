# Stage 1: Builder
FROM node:18-alpine AS Builder

WORKDIR /app

COPY package*.json ./
RUN npm i 

COPY . .
RUN npm run build

# Stage 2: Production
FROM node:18-alpine

WORKDIR /app

COPY --from=Builder /app/dist ./dist
# COPY --from=build /app/node_modules ./node_modules
COPY package*.json ./

RUN npm i

# Set the command to run your app (adjust entry point as needed)
CMD ["node", "dist/index.js"]

CMD ["npm", "start"]