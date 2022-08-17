<template>


  <div class="Herd" style="height: 100%;">
    <meta charset="utf-8">

    <div style="height: 90px; display: none;"></div>

    <div class="herds herds-nav-appear" id="herds">
      <div class="herdsNav">
        <a href="https://amayaliu.cn/about.html">
          <img src="../assets/img/head.png" alt="自由之子" title="帅气的陈乐">
        </a>
        <div class="Amaya_liu">自由之子</div>
        <div class="NavRight">  <!--      //这里报错不用管，照样能跑-->
          <a href=".." id="eighth" class="buttonBox index">
            <button>·♪首页·</button>
          </a>
          <a href="../MessageBoard.html" class="buttonBox test Lmessage first">
            <button>·♪留言板·</button>
            <div class="border"></div>
            <div class="border"></div>
          </a>
          <a href="../FriendChain.html" class="buttonBox test friend first">
            <button>·♪友链·</button>
            <div class="border"></div>
            <div class="border"></div>
          </a>
          <a href="../Album/Album.html" class="buttonBox test Album first">
            <button>·♪相册·</button>
            <div class="border"></div>
            <div class="border"></div>
          </a>
          <a href="http://socket.amayaliu.cn/" class="buttonBox test Small first">
            <button>·♪聊天室·</button>
            <div class="border"></div>
            <div class="border"></div>
          </a>
          <a href="../Aestheticism/Nebula.html" class="buttonBox test butboxNo project first">
            <button>·♪小唯美·</button>
            <div class="border"></div>
            <div class="border"></div>
          </a>
        </div>


      </div>


      <div class="Nav_Name">
        <span class="Nav_NameA2 ">&nbsp;·♪自由之子&nbsp;&nbsp;♪ ♩ ♫ ♬ ¶</span>
        <span class=" right letter_spacing Nav_NameA " style="float:right">

                <a class="Nav_NameA1 container6 NFront">资料推荐</a>&nbsp;<span class="Virtual5">/</span>
                <a href="   " class="Nav_NameA1 container3 NLts">三次元</a>&nbsp;<span class="Virtual5">/</span>
                <a href="   " class="Nav_NameA1 container6 NMusic">原相册</a>&nbsp;<span
            class="Virtual5">/</span>
                <a href="   " class="Nav_NameA1 container6 NMusic">音乐</a>&nbsp;<span
            class="Virtual5 Vn">/</span>
                <a href="   " class="Nav_NameA1 container3 NComic">动漫</a>&nbsp;<span
            class="Virtual5 Vn">/</span>
                <a href="   " class="Nav_NameA1 container3 NXiuX">焰灵姬</a>&nbsp;
                <div class="query">
                  <input type="text" class="Herd-query-text" placeholder="想查些什么呀？">
                  <input type="button" class="Herd-query-Btn" value="查询" onclick="query()">
                </div>
                <a href="   " class="black queryBlack" onclick="queryBlack()" title="查询"><img
                    src="../assets/img/head.png" class="NavImg marginL15"></a>
                <a href="   " title="左下角精灵:♪ ♩ ♫ ♬"><img src="../assets/img/head.png"
                                                                               class="NavImg"></a>
                <a href="   " class="black  " title="码云"><img src="../assets/img/head.png"
                                                                                      class="NavImg"></a>
                <a href="   " class="black  " title="空间"><img src="../assets/img/head.png" class="NavImg"></a>
                <a href="   " title="菜鸟"><img src="../assets/img/head.png" class="NavImg"></a>
                <a href="   "
                   class="black  " title="微博"><img src="../assets/img/head.png" class="NavImg"></a>
                <a href="   " class="black  "
                   title="QQ"><img src="../assets/img/head.png" class="NavImg"></a>
                <a href="   " class="black  " title="GitHub"><img src="../assets/img/head.png"
                                                                                          class="NavImg"></a>
              </span>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'HeaderTop',
}
</script>


<style>
.herds {
  width: 100%;
  height: 13%;
  background: rgba(255, 255, 255, 0.52);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 14px;
  box-shadow: 0 0 25px rgba(74, 59, 114, 1);
}

.herds-nav {
  position: fixed;
  top: -90px;
  -webkit-transition: top .5s;
  -moz-transition: top .5s;
  -o-transition: top .5s;
  transition: top .5s;
}

.herds-nav-appear {
  top: 0;
}

.Navtitl {
  color: #585858;
}

.herdsNav {
  margin: auto;
  width: 1200px;
  height: 62px;
  border-radius: 10px;
}

.herdsNav img {
  float: left;
  width: 62px;
  height: 62px;
}

.Amaya_liu {
  float: left;
  margin-left: 15px;
  height: 62px;
  line-height: 62px;
}

.NavRight {
  float: right;
}

.NavRight a {
  line-height: 62px;
}

.NavRightYD {
  display: none;
}

.buttonBox {
  position: relative;
  float: left;
  margin: 0 15px;
}

.butboxNo {
  margin-right: 0px !important;
}

.NavRight button {
  width: 100px;
  height: 37px;
  position: relative;
  background: rgba(74, 59, 114, 0.8);
  text-transform: uppercase;
  color: white;
  letter-spacing: 1px;
  border: none;
  font-size: 14px;
  outline: none;
  font-family: "华文楷体";
}

.border {
  position: absolute;
  background: none;
  transition: all .5s ease-in-out;
}

.first > .border:nth-of-type(1) {
  top: 13px;
  left: -1px;
  border-left: 1px solid white;
  border-top: 1px solid white;
  width: 20px;
  height: 20px;
}

.first > .border:nth-of-type(2) {
  bottom: 10px;
  right: -1px;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  width: 20px;
  height: 20px;
}

.first:hover .border {
  width: 101px;
  height: 38px;
}

#eighth > button {
  transition: all .5s ease-in-out;
}

#eighth:hover button {
  text-shadow: 0 0 10px rgba(255, 255, 255, 1), 0 0 50px rgba(255, 255, 255, .8), 0 0 75px rgba(255, 255, 255, .6), 0 0 76px rgba(255, 255, 255, .4), 0 0 77px rgba(255, 255, 255, .5), 0 0 78px rgba(255, 255, 255, .4), 0 0 79px rgba(255, 255, 255, .3), 0 0 80px rgba(255, 255, 255, .2), 0 0 85px rgba(255, 255, 255, .1);
}

.Nav_Name {
  margin: auto;
  width: 1200px;
  height: 28px;
  line-height: 28px;
}

.Nav_NameA {
  height: 28px;
  line-height: 28px;
}

.NavImg {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  vertical-align: middle;
}

.Nav_NameA1 {
  color: black !important;
  margin: 0 10px;
  text-shadow: 3px 1px 2px #6839aa;
}

.Nav_NameA2 {
  color: black !important;
  margin: 0 10px;
  text-shadow: 3px 1px 2px #7d7d7d;
}

@media screen and (max-width: 1200px) {
  .Nav_Name {
    width: auto;
  }

  .herdsNav {
    width: 100% !important;
  }
}

@media screen and (max-width: 1080px) {
  .NXiuX, .NComic, .Vn {
    display: none;
  }
}

@media (max-width: 991px) and (min-width: 750px) {
  .NavRight {
    margin-right: 20px;
  }

  .Lmessage, .friend, .Small {
    display: none;
  }

  .herdsNav {
    width: 100% !important;
  }

  .black {
    display: none;
  }
}

@media screen and (max-width: 750px) {
  .NavRightYD {
    display: block;
    float: right;
    height: 35px;
    line-height: 35px;
    background: rgba(74, 59, 114, 0.8);
    width: 70px;
    text-align: center;
    margin: 20px 2% 0 0;
    color: #fff;
    font-size: 12px;
    z-index: 99;
  }

  .NavRightYD_Cd {
    padding: 9px 11px;
    color: #fff;
  }

  .NavRightYD:hover ul {
    display: block;
  }

  .NavRightYD img {
    float: none;
    height: 11px;
    width: 11px;
    margin-right: 5px;
  }

  .NavRightYD ul {
    display: none;
  }

  .NavRightYD ul li {
    position: relative;
    z-index: 5;
    background: rgba(74, 59, 114, 1);
    border-bottom: 0.1px solid #fff;
  }

  .NavRightYD ul li a {
    color: #fff; /*padding:6px 10px;*/
  }

  .NavRightYD ul li a:hover {
    color: #ffe835 !important;
    font-size: 12px;
  }

  .NavRight {
    display: none;
  }

  .Lmessage, .friend, .Small {
    display: none;
  }

  .herdsNav {
    width: 100%;
  }

  .Nav_NameA {
    display: none;
  }
}

.query {
  display: none;
  height: 26px;
  border: 0.3px solid rgb(223, 179, 241);
  border-radius: 3px;
  padding: 0 3px;
  background-color: rgba(74, 59, 114, 0.9);
}

.Herd-query-text {
  width: 110px;
  padding: 8px 3px 4px 5px;
  background-color: transparent;
  outline: none;
  border: 0px;
  color: #fff;
  font-size: 12px;
}

.query input::-webkit-input-placeholder {
  color: white;
}

.query input::-moz-placeholder {
  color: white;
}

.Herd-query-Btn {
  outline: none;
  border-left: 1px solid #fff;
  padding: 1px 5px;
  background-color: transparent;
  border-bottom: 0px;
  border-right: 0px;
  border-top: 0px;
  color: #fff;
  font-size: 12px;
}
</style>
