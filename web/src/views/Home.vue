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
        <router-link 
        tag="div" :to="`/articles/${news._id}`"
        class="py-2 fs-lg d-flex" v-for="(news,i) in category.newsList" :key="i">
        <span class="text-info">[{{news.categoryName}}]</span>
        <span class="px-2">|</span>
        <span class="flex-1 text-dark-1 text-ellipse pr-2">{{news.title}}</span>
        <span class="text-grey-1 fs-sm">{{news.createdAt | date}}</span>
      </router-link>
      </template>
      
    </m-list-card>
    <m-list-card icon="superhero-
" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem">
          <router-link tag="div" 
          :to="`/heroes/${hero._id}`" 
          class="p-2 text-center" 
          style="width:20%;" 
          v-for="(hero,i) in category.heroList" 
          :key="i">
          <img :src="hero.avatar" class="w-100">
          <div>{{hero.name}}</div>
        </router-link>
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
import dayjs from 'dayjs'
export default {
  filters:{
    date(val){
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      swiperOptions: {
          pagination: {
            el: '.pagination-home'
          },
          // Some Swiper option/callback...
        },
    newsCats:[],
    heroCats:[],

    };
  },
  methods: {
    async fetchNewsCats(){
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    },
    async fetchHeroCats(){
      const res = await this.$http.get('heroes/list')
      this.heroCats = res.data
    }
  },
  created(){
    this.fetchNewsCats()
    this.fetchHeroCats()

  }
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