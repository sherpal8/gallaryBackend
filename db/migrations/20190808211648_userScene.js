exports.up = function(knex) {
  return knex.schema.createTable("userScene", usersScene => {
    usersScene.increments("scene_id").primary();
    usersScene.string("title").notNullable();
    usersScene.integer("likes").defaultTo(0);
    usersScene.integer("commentCount").defaultTo(0);
    usersScene
      .timestamp("created_at")
      .defaultTo(knex.fn.now())
      .notNullable();
    usersScene.string("discription");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("userScene");
};
