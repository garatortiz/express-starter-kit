'use strict'

export function up(queryInterface, _Sequelize) {
  return queryInterface.bulkInsert(
    'Users',
    [
      {
        username: 'jhon.doe',
      },
    ],
    {}
  )
}
export function down(queryInterface, _Sequelize) {
  return queryInterface.bulkDelete('Users', null, {})
}
