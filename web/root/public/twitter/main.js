let mainContainer = document.getElementById('mainContainer')
function _arrayBufferToBase64(buffer) {
  var binary = ''
  var bytes = new Uint8Array(buffer)
  var len = bytes.byteLength
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}
function round(x, digits) {
  return Math.round(Math.pow(10, digits) * x) / Math.pow(10, digits)
}
async function main() {
  let e = await axios.get('https://api.vnft.cc/twitter/all_followers')
  for (let data of e.data) {
    var entry = document.createElement('div')
    entry.className = 'entry'
    mainContainer.appendChild(entry)

    var picarea = document.createElement('div')
    var linkedImage = document.createElement('a')
    var image = document.createElement('img')

    picarea.className = 'picarea'
    linkedImage.href = `https://twitter.com/${data.screen_name}`
    image.src = 'data:image/png;base64,' + _arrayBufferToBase64(data.picture.data)

    linkedImage.appendChild(image)
    picarea.appendChild(linkedImage)
    entry.appendChild(picarea)
    if (!data.still_following) {
      entry.style.opacity = '0.3'
    }

    var content = document.createElement('div')
    content.className = 'contentarea'
    entry.appendChild(content)

    let entryContent = `<a href="https://twitter.com/${data.screen_name}">${
      data.name
    }</a> <a class="sidenote" href="https://twitter.com/${data.screen_name}">@${data.screen_name}</a>
        Followers: ${data.followers}
        Following: ${data.following}
        Follow-Rate: ${round(data.followers / data.following, 2)}
        id: ${data.follower_id}
        still following: <span style="color:${data.still_following ? 'green' : 'grey'}">${data.still_following}</span>
      `.replace(/\n/g, '<br />')

    content.innerHTML = entryContent
  }
}
main()