// if (app_status === 'pending') {
//   console.log('Your Application is Pending')
// } else if (app_status === 'approve') {
//   console.log('Congrats! .Your Application is Live')
// } else if (app_status === 'rejected') {
//   console.log(
//     'Sorry! .We found some issues on your app so plz fix it and resubmit again.'
//   )
// } else {
//   console.log('Your App in under Reveiw.')
// }
var app_status = 'pending' //pending , approve ,rejected , review
var msg = ''
switch (app_status) {
  case 'pending':
    msg = 'Your Application is Pending'
    break
  case 'approve':
    msg = 'Congrats! .Your Application is Live'
    break
  case 'rejected':
    msg =
      'Sorry! .We found some issues on your app so plz fix it and resubmit again.'
    break
  default:
    msg = 'Your App in under Reveiw.'
    break
}
