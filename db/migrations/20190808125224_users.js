exports.up = function(knex) {
  return knex.schema.createTable("users", usersTable => {
    usersTable
      .string("username")
      .unique()
      .primary()
      .notNullable();
    usersTable.string("password");
    usersTable.string("email");
    usersTable.string("name");
    usersTable.string("avatarurl").notNullable();
  });
};
