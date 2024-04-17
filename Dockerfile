FROM node:20

RUN npm i -g pnpm

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY prisma/schema.prisma ./prisma/
RUN pnpm prisma generate

COPY . .

EXPOSE 8080
CMD [ "pnpm", "start" ]