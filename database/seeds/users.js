
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {role: 2,
      first_name: "Eldana",
      last_name: "Daniel",
      email: "Eldana@fit.com",
      username: "eldana1",
      password: "okeldana"},

        { role: 1,
      first_name: "Kasi",
      last_name: "hope",
      email: "kasi@fit.com",
      username: "kasi",
      password: "okkasi1"},


        {role: 2,
      first_name: "Delina",
      last_name: "Daniel",
      email: "delina@fit.com",
      username: "Delina",
      password: "okdelina"
      },

 {role: 1,
      first_name: "Daniel",
      last_name: "Isaac",
      email: "daniel@fit.com",
      username: "Daniel",
      password: "okdaniel"
      },

      ]);
    });
};
