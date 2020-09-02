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


    <i class="iconfont icon-cc-menu-circle"></i> 
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
        }
    }
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