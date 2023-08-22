multiply = (value1, value2) => value1 * value2;

console.log(multiply(2, 3));
console.log(multiply(7, 10));

score = [1, 3, 9, -4, 8, -5, 9, 0];

console.log(
  score.filter((value, index) => {
    return value > 0;
  })
);

countpositive = (array) => {
  return array.filter((value, index) => {
    return value > 0;
  });
};

console.log(countpositive(score));

//to count how many of the the numbers are greater than 0
countpositive2 = (array) => {
  count = 0;
  array.forEach((value, index) => {
    if (value >= 0) {
      count = count + 1;
    }
  });
  console.log(count);
};

countpositive2([1, -3, 5]);
countpositive2([-2, 3, -5, 7, 10]);

// let seconds = 0;
// let minute = 0; // This value needs to be 0 initially
// let hour = 0;

let seconds = JSON.parse(localStorage.getItem("seconds"));
let minute = JSON.parse(localStorage.getItem("minute"));
let hour = JSON.parse(localStorage.getItem("hour"));
let intervalid;

//the above so that the values are retrieved from the localstorage and then displayed when its refreshed

function startcount(motion) {
  if (motion === `start`) {
    intervalid = setInterval(() => {
      if (seconds < 59) {
        seconds = seconds + 1;
      } else {
        seconds = 0;

        if (minute < 59) {
          minute = minute + 1;
        } else {
          minute = 0;
          hour = hour + 1;
        }
      }
      document.querySelector(
        ".js-head"
      ).innerHTML = `${hour}:${minute}:${seconds}`;
    }, 1000);
  } else if (motion === `stop`) {
    clearInterval(intervalid);
    countingup = true;
  } else if (motion === `reset`) {
    seconds = 0;
    minute = 0;
    hour = 0;
    //clearInterval(intervalid); if you want it to stoprunning after commmit

    document.querySelector(
      ".js-head"
    ).innerHTML = `${hour}:${minute}:${seconds}`;
  }

  localStorage.setItem(`seconds`, JSON.stringify(seconds));
  localStorage.setItem(`minute`, JSON.stringify(minute));
  localStorage.setItem(`hour`, JSON.stringify(hour));
}
document.querySelector(".js-head").innerHTML = `${hour}:${minute}:${seconds}`;

document.querySelector(`.startbtn`).addEventListener(`click`, () => {
  startcount(`start`);
});

document.querySelector(`.stopbtn`).addEventListener(`click`, () => {
  startcount(`stop`);
});

document.querySelector(`.resetbtn`).addEventListener(`click`, () => {
  startcount(`reset`);
});
