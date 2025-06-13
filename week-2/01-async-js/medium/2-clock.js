// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock() {
    setInterval(() => {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        console.log(hours, ":", minutes, ":", seconds);
        let AmPm = hours>=12?'PM':'AM';
        hours = hours>12?hours-12:hours;
        console.log(hours, ":", minutes, ":", seconds, " ", AmPm);
    }, 1000);
}

clock();