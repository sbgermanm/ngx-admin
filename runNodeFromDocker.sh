ruta=$(pwd)
docker rm -f node14
docker run -dit -m 4g --name node14 -w="/usr/src/app" -v ${ruta}:/usr/src/app node14maspy
# docker exec -it node14  /bin/sh
# ahora hacer npm i
docker exec -it node14 npm i
