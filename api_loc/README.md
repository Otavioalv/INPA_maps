docker build -t api_loc_dev .
docker run -p 5433:5433 -v ${PWD}:/app -v /app/node_modules api_loc_dev
docker run --name api_loc_container -p 5433:5433 -v ${PWD}:/app -v /app/node_modules api_loc_dev
