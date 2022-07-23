# Up-your-life-backend

## SETUP

- Open docker
- Open terminal and run:

  ```
  docker run -p 3306:3306 --name up_your_life -e MYSQL_ROOT_PASSWORD=password -e MYSQL_ROOT_HOST=% -e MYSQL_DATABASE=up_your_life_db -d mysql/mysql-server
  ```

  ```
  npm i
  ```

  ```
  cd storage/database && npx sequelize-cli db:migrate
  ```

  ```
  cd ../../ && npm run start:dev
  ```
