const testgeo = () => {
  const testgeo2 = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  return testgeo2;
};

testgeo().then((pos) => {
  console.log(pos);
});
