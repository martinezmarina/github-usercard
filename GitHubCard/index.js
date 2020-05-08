/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const entryPoint = document.querySelector('.cards')

// axios.get(`https://api.github.com/users/martinezmarina`)




// .then(response =>{
//   const githubUserObj = response.data
//   let card = createGithubCard({
//     imageUrl: githubUserObj["avatar_url"],
//     name: githubUserObj["name"], 
//     loginName: githubUserObj["login"], 
//     location: githubUserObj["location"], 
//     githubUrl: githubUserObj["url"], 
//     followersCount: githubUserObj["followers"], 
//     followingCount: githubUserObj["following"], 
//     bio: githubUserObj["bio"],
//   })
//   entryPoint.appendChild(card)
// })

// .catch(error => {
//   console.log("error")
// })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'martinezmarina',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];

followersArray.forEach((userName) => {
  axios.get(`https://api.github.com/users/${userName}`)
    .then(response => {
      const githubUserObj = response.data
      let card = createGithubCard({
        imageUrl: githubUserObj["avatar_url"],
        name: githubUserObj["name"],
        loginName: githubUserObj["login"],
        location: githubUserObj["location"],
        githubUrl: githubUserObj["url"],
        followersCount: githubUserObj["followers"],
        followingCount: githubUserObj["following"],
        bio: githubUserObj["bio"],
      })
      entryPoint.appendChild(card)
    })

    .catch(error => {
      console.log("error")
    })

})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function createGithubCard(attrs) {
  const { imageUrl, name, loginName, location, githubUrl, followersCount, followingCount, bio } = attrs

  const cardContainer = document.createElement('div')
  const githubImage = document.createElement('img')
  const infoContainer = document.createElement('div')
  const githubName = document.createElement('h3')
  const username = document.createElement('p')
  const userslocation = document.createElement('p')
  const profile = document.createElement('p')
  const profileLink = document.createElement('a')
  const numberOfFollowers = document.createElement('p')
  const numberFollowing = document.createElement('p')
  const userBio = document.createElement('p')

  cardContainer.classList.add('card')
  githubImage.src = imageUrl
  infoContainer.classList.add('card-info')
  githubName.classList.add('name')
  githubName.textContent = name
  username.classList.add('username')
  username.textContent = loginName
  userslocation.textContent = `Location: ${location}`
  profile.textContent = `Profile: `
  profileLink.href = githubUrl
  profileLink.textContent = `${githubUrl}`
  numberOfFollowers.textContent = `Followers: ${followersCount}`
  numberFollowing.textContent = `Following: ${followingCount}`
  userBio.textContent = `Bio: ${bio}`

  cardContainer.appendChild(githubImage)
  cardContainer.appendChild(infoContainer)
  infoContainer.appendChild(githubName)
  infoContainer.appendChild(username)
  infoContainer.appendChild(userslocation)
  infoContainer.appendChild(profile)
  profile.appendChild(profileLink)
  infoContainer.appendChild(numberOfFollowers)
  infoContainer.appendChild(numberFollowing)
  infoContainer.appendChild(userBio)


  return cardContainer
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
