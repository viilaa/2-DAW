let users = ["vila", "marta", "marisa", "maria", "hugo"];
let blackListed = ["hugo", "marta", "vila"];
function checkingList(name){
    if (!blackListed.includes (name)){
        return name;
    }
}
let usersNotInBlackList = users.filter(checkingList);
console.log (usersNotInBlackList);