// 배달앱
// https://webcoding-start.tistory.com/33

function store_process(infos, actions) {
  var answer = [];




}

for(var idpw of infos) {


}

for (var item of actions) {


}

for(var i=0; i < n_action; i++) {
  switch(user_action[i][0]) {

  }



}



console.log("\n\n===배달앱===");

var login_1 = ["kim password", "lee abc" ];
var actions_1 = ["ADD 30", "LOGIN kim abc", "LOGIN lee password", "LOGIN kim password", "LOGIN kim password", "ADD 30", "ORDER", "ORDER", "ADD 40", "ADD 50"];
// [false, false, false, true, false, true, true, false, true, true]
console.log(login_1, actions_1);
console.log(store_process(login_1, actions_1));


var login_2 = ["kim password", "lee abc" ];
var actions_2 = ["LOGIN lee abc", "LOGIN kim password"];
// [true, false]
console.log(login_2, actions_2);
console.log(store_process(login_2, actions_2));