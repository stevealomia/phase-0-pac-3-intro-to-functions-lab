function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
 return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
    if (string === string.toUpperCase()) {
        return "YES INDEED!"; 
    }
}

function logWhisper(string) {
    console.log(string.toLowerCase());
    if (string === string.toLowerCase()) {
        return "I can't hear you!"; 
    }
}

function sayHiToHeadphonedRoommate(string) {
    console.log(string.toLowerCase());
    if (string === string.toLowerCase()) {
        return "I can't hear you!"; 
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}

  