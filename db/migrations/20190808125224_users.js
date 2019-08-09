exports.up = function(knex) {
  return knex.schema.createTable("users", usersTable => {
    usersTable
      .string("userName")
      .unique()
      .primary()
      .notNullable();
    usersTable.string("password");
    usersTable.string("email");
    usersTable.string("name");
    usersTable.string("avatarUrl").notNullable();
  });
};

exports.down = function(knex, Promise) {
  // console.log("users table destoryed");
  return knex.schema.dropTable("users");
};
