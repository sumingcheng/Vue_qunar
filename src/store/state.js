var defaultCity = '广东';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {
  console.log('没有获取到城市');
}


export default {
  city: defaultCity
}