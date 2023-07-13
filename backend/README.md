# prisma-postgresql-starter-pack
This starter pack provides a basic setup for connecting Prisma with PostgreSQL. It lets you quickly start with a Prisma-powered backend using a PostgreSQL database.

## Prerequisites
- Node.js: https://nodejs.org (version 14 or higher recommended)
- PostgreSQL: https://www.postgresql.org (version 10 or higher recommended)

## Getting Started
1. Clone the repository: git clone https://github.com/Narayana212/prisma-postgresql-starter-pack
2. Install the dependencies: cd prisma-postgresql-starter-pack && npm install
3. Configure the database connection: Open the .env file and update the DATABASE_URL with your PostgreSQL connection URL. Example: DATABASE_URL="postgresql://username:password@localhost:5432/prisma_database"
4. Create a dummy model:
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}
5. Generate Prisma client: npx prisma generate
6. Using Prisma Migrate: npx prisma migrate dev --name init
7. Start the server: nodemon index.js
     
## Learn More
To learn more about Prisma and how to use it, refer to the official documentation: https://www.prisma.io/

## Modification
Please feel free to change the content based on your specific project details and requirements.
