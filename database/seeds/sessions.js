
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sessions').del()
    .then(function () {
      // Inserts seed entries
      return knex('sessions').insert([
        {
      users_id: 1,
      classes_id: 9,
      joined: new Date().toString().split(' ').slice(0, 5).join(' '),

    },
{
      users_id: 1,
      classes_id: 10,
      joined: new Date().toString().split(' ').slice(0, 5).join(' '),
    },

    {
      users_id: 2,
      classes_id: 11,
      joined: new Date().toString().split(' ').slice(0, 5).join(' '),
    },

    {
      users_id: 3,
      classes_id: 9,
      joined: new Date().toString().split(' ').slice(0, 5).join(' '),
    },

      ]);
    });
};
