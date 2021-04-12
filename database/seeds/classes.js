
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {
      instructor_id: 1,
      name: "Yoga",
      type: "Tantra",
      start_time: "10/1/2021 7pm",
      duration: 45,
      intensity: 3,
      location:"Northgate park",
      max_class: 8
    },

    {
      instructor_id: 2,
      name: "Cardio",
      type: "swimming",
      start_time: "6/1/2021 10am",
      duration: 45,
      intensity: 5,
      location:"Seattle central park",
      max_class: 10
    },

      {
      instructor_id: 2,
      name: "Strength",
      type: "Weightlifting",
      start_time: "5/11/2021 6pm",
      duration: 45,
      intensity: 7,
      location:"Lynnwood community park",
      max_class: 6
    },

     {
      instructor_id: 1,
      name: "Dance",
      type: "Ballet Dance",
      start_time: "5/5/2021 6pm",
      duration: 45,
      intensity: 4,
      location:"Greenlake community park",
      max_class: 10
    },
      ]);
    });
};
