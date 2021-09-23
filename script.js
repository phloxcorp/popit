const analytics = firebase.analytics()

const onClickInstallButton = () => {
  analytics.logEvent('sign_up')
}

document.querySelector('.install-button--top').onclick = onClickInstallButton
document.querySelector('.install-button--bottom').onclick = onClickInstallButton
