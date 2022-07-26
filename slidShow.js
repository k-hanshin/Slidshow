let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://dol.ismcdn.jp/mwimgs/7/3/1080m/img_7396566265d26901dd4357e48765f12996939.jpg",
"https://s3-ap-northeast-1.amazonaws.com/vsn-p/resize_contents/4111/edad4bbc60bba3cbb07ec6d0874219ad3cfcdf90e6eac39106b89431de5f6fe7@3x.jpg",
"https://pbs.twimg.com/media/CI1m7XaUsAEE0Un.jpg",
"https://spread-sports.jp/wp/wp-content/uploads/2020/12/1608483603-451645053.jpg",
"https://full-count.jp/wp-content/uploads/2017/12/20171222_matsui.jpg",
"https://sportiva.shueisha.co.jp/clm/baseball/npb/2017/images/iguchi20170706.jpg",
"http://thanks-mlb.com/nori03092.jpg",
"https://image.news.livedoor.com/newsimage/d/b/dbc7115a52e44f04c606f052aec8aae2.jpg",
"https://full-count.jp/wp-content/uploads/2016/04/20160426_iwamura.jpg",
"https://afpbb.ismcdn.jp/mwimgs/b/e/-/img_bec94974bcdb8a989a2c26c44a974451207972.jpg",
"https://stat.ameba.jp/user_images/20110331/22/takeshe/17/a5/j/o0600045711137416757.jpg?caw=800",
"https://afpbb.ismcdn.jp/mwimgs/b/b/-/img_bb66aaa51ff2d3474d39c2379b2a5a6a175369.jpg",
"https://sports-pctr.c.yimg.jp/vrwP1cu9cY2YL4Fg3aXpJtHyHIQWv4q0Pd5fNOzmBc8XbzOVWbLmaFunUeb3t_QW7jidJGBbDG40terq6cRlV632ZREgNkPAIyQcpb-O5txJhbdhd-eyU2xuuMaPCc0AehXKcVo3bLhjdYGfZpuchyIl7SJoq-dOq35mAVLMCUt8rTOkFqYtLlASYIC2vhbG",
"https://koibana.biz/wp-content/uploads/2014/12/%EF%BC%A0168.jpg",
"https://spread-sports.jp/wp/wp-content/uploads/2021/10/1633587762-735415826.png",
"https://www.j-cast.com/trend/assets_c/2021/08/trend_20210820190559-thumb-645xauto-207384.jpg",
"https://spread-sports.jp/wp/wp-content/uploads/2022/04/1649649802-376371645.jpg",
"https://spread-sports.jp/wp/wp-content/uploads/2021/07/1625705331-220748340.jpg"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 2000);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
