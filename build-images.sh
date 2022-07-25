#!/bin/bash -eu

docker_username="vardhmanhundia"
repositories=("comments" "client" "event-bus" "moderation" "posts" "query")

for repo in ${repositories[@]}; do
  docker build -t ${docker_username}/${repo} ./${repo}
done

for repo in ${repositories[@]}; do
  docker push ${docker_username}/${repo}
done
