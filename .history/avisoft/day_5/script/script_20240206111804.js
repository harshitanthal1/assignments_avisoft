let user = "user1";
let permission = 2;

/**
 * 1 - Super User
 * 2 - Limited Privileges
 * 3 - Normal User
 * else - NO access
 */

if (permission === 1){
    console.log("user has access");
} else {
    console.log("NO access");
}

console.log("End");