let user = prompt("Enter S, W or G");
let cpuI = Math.floor(Math.random() * 3);;
let cpu = ["S", "W", "G"][cpuI];
const match = (cpu, user) => {
    if (cpu == user) {
        return "Nobody, The match is tied";
    }
    else if (cpu == "S" && user == "W") {
        return "cpu";
    }
    else if (cpu == "S" && user == "G") {
        return "user";
    }
    else if (cpu == "G" && user == "W") {
        return "user";
    }
    else if (cpu == "G" && user == "S") {
        return "cpu";
    }
    else if (cpu == "W" && user == "G") {
        return "cpu";
    }
    else if (cpu == "W" && user == "S") {
        return "user";
    }

}
let result = match(cpu, user);
console.log("The winner is " + result);
