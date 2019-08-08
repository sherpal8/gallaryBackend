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

exports.down = function(knex, Promise) {
  // console.log("users table destoryed");
  return knex.schema.dropTable("users");
};
