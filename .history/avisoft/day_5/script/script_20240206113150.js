let user = "user1";
let permission = 2;

/**
 * 1 - Super User
 * 2 - Limited Privileges
 * 3 - Normal User
 * else - NO access
 */

console.log("Start");

if (permission === 1){
    console.log("user is superuser");
} else if (permission === 2) {
    console.log("user has limited privileges");
} else if (permission === 1) {
    console.log("user has normal access");
} else {
    console.log("NO access");
}

switch(permission) {
    case 1:
        console.log("user is superuser");
        break;
    case 2:
        console.log("user has limited privileges");
        break;
    case 3:
        console.log("user has normal access");
        break;
    default:
        console.log("NO access");
}

console.log("End");