
exports.up = function(knex) {
    return knex.schema.createTable("roles", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
    })

    .createTable("users", tbl => {
        tbl.increments();
        tbl.integer("role")
          .unsigned()
          .references("roles.id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");

        tbl.string('first_name', 128).notNullable();
        tbl.string('last_name', 128).notNullable();
        tbl.string('email', 128).notNullable().unique();

        tbl.string("username", 128).notNullable().unique().index();
        tbl.string("password", 128).notNullable();
      })
    .createTable("classes", tbl => {
        tbl.increments();
        tbl
            .integer("instructor_id")
            .unsigned()
            .references("users.id")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl.string("name").notNullable()
        tbl.string("type").notNullable()
        tbl.string("start_time").notNullable()
        tbl.integer("duration").notNullable()
        tbl.integer("intensity").notNullable()
        tbl.string("location").notNullable()
        tbl.integer("max_class").notNullable();

    })

    .createTable("sessions", tbl => {
        tbl
            .increments();
        tbl
            .integer("users_id")
            .unsigned()
            .references("users.id")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl
            .integer("classes_id")
            .unsigned()
            .references("classes.id")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl.string("joined").notNullable();
    })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("sessions")
        .dropTableIfExists("classes")
        .dropTableIfExists("users")
        .dropTableIfExists("roles");
};