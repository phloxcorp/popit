const analytics = firebase.analytics()

const shareButton = document.querySelector('.share-button')

shareButton.onclick = () => {
  analytics.logEvent('share')

  if (navigator.share) {
    navigator.share({ url: location.href })
  } else {
    navigator.clipboard.writeText(location.href)
    alert('링크를 클립보드에 복사했습니다.')
  }
}

const mainButton = document.querySelector('.main-button')

mainButton.onclick = () => {
  analytics.logEvent('sign_up')
}
