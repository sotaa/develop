export function findUser(users, credential) {
  let user;
  for (let u of users) {
    if (
      u.username === credential.username &&
      u.password === credential.password
    ) {
      user = u;
      break;
    }
  }
  return user;
}
export function findUserById(users, id) {
  let user;
  for (let u of users) {
    if (u.id === id) {
      user = u;
      break;
    }
  }
  return user;
}

export function userIsExisted(users, credential) {
  let userIsExist = false;
  for (let u of users) {
    if (u.username === credential.username) {
      userIsExist = true;
      break;
    }
  }
  return userIsExist;
}
