
# Can use `docker-compose up -d` to start all services, and `docker-compose down` to stop all services
#
# Or, to build and run individual services:
# docker build . --target fruitfinder --tag fruitfinder:latest
# docker run --rm -p 3030:3030 fruitfinder

FROM node:20-slim AS base
ARG GRAPHQL_ENDPOINT="https://localhost:5051/graphql/"
ENV GRAPHQL_URL $GRAPHQL_ENDPOINT
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN pnpm deploy --filter=fruitfinder --prod /prod/fruitfinder

FROM base AS fruitfinder
COPY --from=build /prod/fruitfinder /prod/fruitfinder
COPY --from=build /usr/src/app/apps/fruitfinder/.next /prod/fruitfinder/.next
WORKDIR /prod/fruitfinder
EXPOSE 3030
ENV PORT=3030
CMD [ "pnpm", "start" ]