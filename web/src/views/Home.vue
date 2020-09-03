<template>
  <div>
    
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/images/slide3.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/slide2.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/slide1.jpeg" alt="">
      </swiper-slide>
       <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons  bg-white mt-3  text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3">
          <i class="sprite sprite-news"></i>
          <div class='py-2'>爆料站</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-stories"></i>
          <div class='py-2'>故事站</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-market"></i>
          <div class='py-2'>周边商城</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-tiyanfu"></i>
          <div class='py-2'>体验服</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-freshman"></i>
          <div class='py-2'>新人专区</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-legacy"></i>
          <div class='py-2'>荣耀·传承</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-camp"></i>
          <div class='py-2'>王者营地</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-gongzhonghao"></i>
          <div class='py-2'>公众号</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-version"></i>
          <div class='py-2'>版本介绍</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-environment"></i>
          <div class='py-2'>对局环境</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-infinite"></i>
          <div class='py-2'>无限王者团</div>
        </div><div class="nav-item mb-3">
          <i class="sprite sprite-hudongying"></i>
          <div class='py-2'>创意互动营</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm d-flex ai-center jc-center">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <!-- <m-card icon="cc-menu-circle" title="新闻资讯">

        <div class="nav jc-between">
          <div class="nav-item active">
            <div class="nav-link active">热门</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">新闻</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">公告</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">活动</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">赛事</div>
          </div>
        </div>

        <div class="pt-3">
            <swiper>
            <swiper-slide  v-for="m in 5" :key ="m">
              <div class="py-2" v-for="n in 5" :key="n">
                <span>[新闻]</span>
                <span>|</span>
                <span>稷下学院突现神秘卡片，受到伤害后竟……</span>

                <span>09/1</span>
              </div>
            </swiper-slide>
          </swiper>
        </div>
    </m-card> -->
    <m-list-card icon="cc-menu-circle" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <div class="py-2" v-for="(news,i) in category.newsList" :key="i">
        <span>[{{news.categoryName}}]</span>
        <span>|</span>
        <span>{{news.title}}</span>
        <span>{{news.date}}</span>
      </div>
      </template>
      
    </m-list-card>
    <m-card icon="cc-menu-circle" title="英雄列表"></m-card>
    <m-card icon="cc-menu-circle" title="精彩视频"></m-card>
    <m-card icon="cc-menu-circle" title="新闻资讯"></m-card>
    <m-card icon="cc-menu-circle" title="新闻资讯"></m-card>
    
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
          pagination: {
            el: '.pagination-home'
          },
          // Some Swiper option/callback...
        },
    newsCats:[
      {
        name:"热门",
        newsList:new Array(5).fill({}).map(v => ({ // eslint-disable-line no-unused-vars
            categoryName:'公告',
            title:'9月2日净化游戏环境声明及处罚公告',
            date:'09/02'
          }))
      },
      {
        name:"新闻",
        newsList:new Array(5).fill({}).map(v => ({ // eslint-disable-line no-unused-vars
            categoryName:'新闻',
            title:'稷下学院突现神秘卡片，受到伤害后竟……',
            date:'09/01'
          }))
      },
      {
        name:"公告",
        newsList:new Array(5).fill({}).map(v => ({ // eslint-disable-line no-unused-vars
            categoryName:'公告',
            title:'9月2日净化游戏环境声明及处罚公告',
            date:'09/02'
          }))
      },
      {
        name:"活动",
        newsList:new Array(5).fill({}).map(v => ({ // eslint-disable-line no-unused-vars
            categoryName:'活动',
            title:'英雄专属梦境限时开启，白露时节好礼来袭',
            date:'08/31'
          }))
      },
      {
        name:"赛事",
        newsList:new Array(5).fill({}).map(v => ({ // eslint-disable-line no-unused-vars
            categoryName:'赛事',
            title:'2020年KGL秋季赛选手大名单公布，9月13日该我上场！',
            date:'09/01'
          }))
      },
    ]
    };
  },
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';


  .pagination-home{
    .swiper-pagination-bullet{
      opacity: 1;
      border-radius: 0.1538rem;
      background: map-get($colors, 'white' );
      &.swiper-pagination-bullet-active{
        background: map-get($colors, 'info' );
      }
    }
  }

  .nav-icons{
    border-top:1px solid $border-color;
    border-bottom:1px solid $border-color;
    
    .nav-item{
      width: 25%;
      border-left: 1px solid $border-color;
      &:nth-child(4n+1){
        border-left:none;
      }
    }
  }
</style>