FROM node:20

WORKDIR /app

ENV SKIP_OPTIONAL_DEPENDENCIES=true

COPY ./package.json /app/package.json

COPY ./pnpm-lock.yaml /app/pnpm-lock.yaml

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies with pnpm
RUN pnpm install

COPY ./ /app

EXPOSE 3000

CMD ["pnpm", "run", "dev", "--host", "0.0.0.0", "--port", "3000"]