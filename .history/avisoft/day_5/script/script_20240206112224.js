let user = "user1";
let permission = 2;

/**
 * 1 - Super User
 * 2 - Limited Privileges
 * 3 - Normal User
 * else - NO access
 */

console.log("End");

if (permission === 1){
    console.log("user is superuser");
} else if (permission === 2) {
    console.log("user has limited privileges");
} else if (permission === 1) {
    console.log("user has normal access");
} else {
    console.log("NO access");
}

console.log("End");