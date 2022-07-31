# Up-your-life-backend

## SETUP

- Open docker
- Open terminal and run:

  ```
  docker run -p 3306:3306 --name up_your_life -e MYSQL_ROOT_PASSWORD=password -e MYSQL_ROOT_HOST=% -e MYSQL_DATABASE=up_your_life_db -d mysql/mysql-server
  ```

- Open terminal and navigate to the project folder and run:

  ```
  npm i
  ```

  ```
  cd storage/database && npx sequelize-cli db:migrate
  ```

  ```
  cd npx sequelize-cli db:seed:all
  ```

  ```
  cd ../../ && npm run start:dev
  ```
