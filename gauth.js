'use strict'
/* global gapi */
gapi.load('auth2', function () {
  gapi.auth2.GoogleAuth.prototype.chkSignIn = function (debug) {
    if (this.isSignedIn.get()) {
      this.currentUser.get().reloadAuthResponse()
      if (debug) {
        console.debug(this.currentUser.get().getAuthResponse())
      }
    } else {
      this.signIn()
    }
  }
})
