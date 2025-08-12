/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface) {
  await queryInterface.bulkInsert('users', [
    {
      id: 'auth0|60d0fe4f5311236168a109ca', // example Auth0-style ID
      firstName: 'root',
      lastName: 'Admin',
      email: 'root.admin@quickbite.com',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'auth0|60d0fe4f5311236168a109cb',
      firstName: 'Bob',
      lastName: 'User',
      email: 'bob.user@example.com',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('users', {
    id: ['auth0|60d0fe4f5311236168a109ca', 'auth0|60d0fe4f5311236168a109cb'],
  });
}
