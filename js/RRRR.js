var user = {};

firebase.initializeApp({
  apiKey: 'AIzaSyBHOayJKq-YeHnHFgx8KIkMJu99LtZFb7k',
  authDomain: 'test-169b3.firebaseapp.com',
  databaseURL: 'https://test-169b3-default-rtdb.firebaseio.com',
  projectId: 'test-169b3',
  storageBucket: 'test-169b3.appspot.com',
  messagingSenderId: '517124370263',
  appId: '1:517124370263:web:47e5f17335144950ac9812',
  measurementId: 'G-3MC8T3PTTB',
});

async function sign_up(registerPayload) {
  if (!registerPayload.username) {
    return alert('用戶名稱未填');
  }

  if (!registerPayload.mail) {
    return alert('信箱未填');
  }

  if (!registerPayload.account) {
    return alert('帳號未填');
  }

  if (!registerPayload.password) {
    return alert('密碼未填');
  }

  user = (
    await firebase
      .database()
      .ref('/users/' + registerPayload.account)
      .once('value')
  ).val();

  if (user) {
    return alert('用戶已存在');
  }

  await firebase
    .database()
    .ref('/users/' + registerPayload.account)
    .set(registerPayload);

  await send_mail(registerPayload.mail, '註冊', '已完成註冊');
  alert('已完成註冊');
}

async function sign_in(loginPayload) {
  if (!loginPayload.account) {
    return alert('帳號未填');
  }

  if (!loginPayload.password) {
    return alert('密碼未填');
  }

  var userForLogin = (
    await firebase
      .database()
      .ref('/users/' + loginPayload.account)
      .once('value')
  ).val();

  if (!userForLogin) {
    return alert('用戶不存在');
  }

  if (userForLogin.password !== loginPayload.password) {
    return alert('密碼不符');
  }

  user = userForLogin;
  alert("已登入")
}

async function forget(account) {
  user = (
    await firebase
      .database()
      .ref('/users/' + account)
      .once('value')
  ).val();

  if (!user) {
    return alert('用戶不存在');
  }

  send_mail(user.mail, '忘記密碼', '密碼為: ' + user.password);
  alert('已將相關資訊寄至信箱');
}

async function checkout(total) {
  alert('訂單已送出，購物明細已寄至您的電子郵箱，如有疑問請聯繫客服。');
  send_mail(user.mail, '結帳', '總額為: ' + total);
}

async function send_mail(mail, subject, html) {
  fetch(
    'https://script.google.com/macros/s/AKfycbxc83j2S4gUnqUOEz6xO0g_95LKp_xEzWzsNfYOS3hVPmpSJZo/exec?mail=' +
      mail +
      '&subject=' +
      subject +
      '&html=' +
      html
  );
}

async function test() {
  var mail = 'jack47515513@gmail.com';
  var username = '鄭兆廷';
  var account = 'jack47515513';
  var password = 'jack47515513';

  await 登入({
    account: account,
    password: password,
  });

  await 忘記(account);

  await 註冊({
    username: username,
    account: account,
    password: password,
    mail: mail,
  });

  await 註冊({
    username: username,
    account: account,
    password: password,
    mail: mail,
  });

  await 忘記(account);

  await 登入({
    account: account,
    password: password,
  });

  await 結帳(30); // 豆花啦
}
