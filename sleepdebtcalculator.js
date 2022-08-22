const getSleepHours = (day) => {
    if (day === "monday") {
        return 9;
    } else if (day === "tuesday") {
        return 9;
    } else if (day === "wednesday") {
        return 9;
    } else if (day === "thursday") {
        return 6;
    } else if (day === "friday") {
        return 8;
    } else if (day === "saturday") {
        return 9;
    } else if (day === "sunday") {
        return 7;
    } else {
        return "error";
    }
};

const getActualSleepHours = () => {
    return (
        getSleepHours("monday") +
        getSleepHours("tuesday") +
        getSleepHours("wednesday") +
        getSleepHours("thursday") +
        getSleepHours("friday") +
        getSleepHours("saturday") +
        getSleepHours("sunday")
    );
};

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours > idealSleepHours) {
        console.log(
            "You got more sleep than you needed this week. You got" +
            (actualSleepHours - idealSleepHours) +
            "hours(s) more than you needed"
        );
    } else if (actualSleepHours < idealSleepHours) {
        console.log(
            "You did not get enough sleep. You should have " +
            (idealSleepHours - actualSleepHours) +
            "hour(s) more per week"
        );
    } else {
        console.log("You got the perfect amount of sleep");
    }
};

calculateSleepDebt();
