# client-management
Self-hosted CRM with no security. Developed to be used locally.

## Requirements 

- Node.js 16
- MySQL

## Running

- Create a MySQL database
- Create a file called `.env` in the folder root and enter the following:
```env
DATABASE_URL="yourdatabaseurl"
```
- Install the dependencies with `npm install` and then run `npx prisma migrate deploy` to apply the migrations to your database
- Now run the application with `npm run build` and `npm run start`

- The app is now running on port `3000`

# WARNING

Anyone with access to your computer connection (eg. your internet network) can potentially manipulate all the data in the app. Use it at your own risk.
