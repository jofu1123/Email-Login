function checkEmailPassword(inputUser, users) {
  const email = inputUser.Email
  const password = inputUser.Password

  if (email && password) {
    const findUser = users.results.find(item => {
      return item.email === email && item.password === password
    })
    return findUser
  }
}
module.exports = checkEmailPassword