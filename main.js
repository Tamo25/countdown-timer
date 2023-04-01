const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// Target time for the countdown timer
const targetTime = new Date().getTime() + 864000000; // 864000000 milliseconds = 10 days

// Update the countdown timer every second
const countdown = setInterval(() => {
  // Calculate the remaining time in milliseconds
  const now = new Date().getTime();
  const remainingTime = targetTime - now;

  // Convert remaining time to days, hours, minutes, and seconds
  const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Update the countdown timer display
  days.innerHTML = remainingDays;
  hours.innerHTML = remainingHours < 10 ? "0" + remainingHours : remainingHours;
  minutes.innerHTML = remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;
  seconds.innerHTML = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
  
  // Stop the countdown timer when it reaches 0
  if (remainingTime < 0) {
    clearInterval(countdown);
    days.innerHTML = "00";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
  }
}, 1000);

