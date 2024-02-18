const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  console.log(`Thank you for your valuable feedback: ${name}`);
  // const name = answer;
  rl.question("What are your pronouns? ", (pronouns) => {
    console.log(`Noted!`);
    // const pronouns = answer;
    rl.question("What do you like to do in your free time? ", (hobby) => {
      console.log(`Cool! I also like ${hobby}`);
      // const hobby = answer;
      rl.question("What's your favourite music genre? ", (musicTaste) => {
        console.log(`${musicTaste} is sick!`);
        // const musicTaste = answer;
        rl.question("What's your favourite meal of the day? ", (meal) => {
          console.log(`${meal} is very important`);
          // const meal = answer;
          rl.question("And what's your favourite thing to eat for that? ", (food) => {
            console.log(`I enjoy ${food} too!`);
            // const food = answer;
            rl.question("What's your favourite show or movie? ", (show) => {
              console.log(`Added ${show} to my list`);
              // const show = answer;
              rl.question("What's your superpower? What do you excel at? ", (superpower) => {
                console.log(`Wow! Thank you for your answers, here is your profile: `);
                // const superpower = answer;
                console.log(`${name} loves ${hobby} and listening to ${musicTaste} music. At ${meal} time ${pronouns} likes to eat ${food} and watch ${show}. ${pronouns} is amazing at ${superpower}!`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });

});

