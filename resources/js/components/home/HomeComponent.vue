<template>
  <div>
    <!-- SLIDER SECTION START -->
    <div class="slider-2 bg-3">
      <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
        <div class="row search-boxes">
          <!-- SEARCH MLS BEGIN -->
          <div class="col-md-6">
              <div class="find-home-box box-left1">
                  <div class="section-title text-white">
                      <h2 class="h1">SEARCH MLS</h2>
                  </div>
                  <div class="find-homes">
                     <form sform @submit.prevent="searchMls" >
                      <div class="row">
                          <div class="col-md-12 col-sm-12 col-xs-12">
                              <div class="find-home-item" >
                                  <input type="text" 
                                  name="searchmlsDev" 
                                  v-model.trim="sform.searchmls" 
                                  placeholder="ADDRESS, ZIP, NEIGHBORHOOD, PROPERTY TYPE" />
                                   <a href="#" class="prevent-default search-standard"><i class="icon-search2"></i></a>
                              </div>
                          </div>
                          <div class="col-sm-12 col-xs-12">
                              <div class="find-home-item">
                                  <a class="button-1 btn-block btn-hover-1" href="javascript:;" @click="searchMls">VIEW ALL MLS</a>
                              </div>
                          </div>
                      </div>
                     </form>
                  </div>
              </div>
          </div>
          <!--SEARCH MLS END -->
          <!--SEARCH DEVELOPMENTS BEGIN -->
          <div class="col-md-6">
            <div class="find-home-box box-right1">
              <div class="section-title text-white">
                <h2 class="h1">SEARCH DEVELOPMENTS</h2>
              </div>
              <div class="find-homes">
                <form form @submit.prevent="searchDevelopment">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <div class="find-home-item">
                        <input
                          type="text"
                          name="developments"
                          v-model.trim="form.search"
                          placeholder="DEVELOPMENT, BUILDER, ADDRESS, ZIP, NEIGHBORHOOD, STYLE"
                        />
                        <a href="#" class="prevent-default search-standard">
                          <i class="icon-search2"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-12 col-xs-12">

                      <div class="find-home-item">
                        <a class="button-1 btn-block btn-hover-1" href="javascript:;" @click="searchDevelopment">VIEW ALL DEVELOPMENTS</a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- SEARCH DEVELOPMENTS END -->
        </div>
      </div>
    </div>
    <!-- SLIDER SECTION END -->
    <div class="vc_row-full-width vc_clearfix"></div>
    <div
      data-vc-full-width="true"
      data-vc-full-width-init="false"
      class="vc_row wpb_row vc_row-fluid vc_custom_1485139818778 vc_row-has-fill"
    >
      <div class="container">
        <div class="wpb_column vc_column_container vc_col-sm-12">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div
                class="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-equal-height vc_row-o-content-middle vc_row-flex"
              >
                <div class="wpb_column vc_column_container vc_col-sm-3">
                  <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                      <div
                        class="g5plus-space space"
                        data-id="5ed1ab7fd11ff"
                        data-tablet="70"
                        data-tablet-portrait="60"
                        data-mobile="40"
                        data-mobile-landscape="50"
                        style="clear: both; display: block; height: 90px;"
                      ></div>
                      <div class="wpb_text_column wpb_content_element">
                        <div class="wpb_wrapper">
                          <p class="hd-subtitle-spec">DISCOVER YOUR</p>
                          <h2 class="hd-title-spec">
                            <span class="fl-accent">DREAM</span>
                            <span class="fl-accent">HOUSE</span>
                          </h2>
                        </div>
                      </div>
                      <div
                        class="g5plus-space space"
                        data-id="5ed1ab7fd1652"
                        data-tablet="70"
                        data-tablet-portrait="60"
                        data-mobile="40"
                        data-mobile-landscape="50"
                        style="clear: both; display: block; height: 90px;"
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-dark-left wpb_column vc_column_container vc_col-sm-9 vc_col-has-fill"
                >
                  <div class="column-inner vc_custom_1485091686429">
                    <div class="wpb_wrapper">
                      <div
                        class="search-properties clearfix show-status-tab style-default-small color-light"
                      >
                        <div class="form-search-wrap">
                            <div class="form-search-inner">
                              <div class="search-content">
                                <form bhform @submit.prevent="propertySearch" > 
                                <div data-href="#" class="search-properties-form">
                                  <div class="search-status-tab">
                                    <input
                                      class="search-field"
                                      type="hidden"
                                      name="status"
                                      value="for-rent"
                                      data-default-value
                                    />
                                    <button type="button"
                                      data-value="for-rent"
                                      class="btn-status-filter"
                                      :class="[(bhform.fortype == 'rent')?'active':'']"
                                      @click="bhform.fortype = 'rent'"
                                    >For Rent</button>
                                    <button
                                      type="button"
                                      data-value="for-sale"
                                      class="btn-status-filter"
                                      :class="[(bhform.fortype == 'sale')?'active':'']"
                                      @click="bhform.fortype = 'sale'"
                                    >For Sale</button>                                    
                                  </div> 
                                                                  
                                  <div class="row">
                                    <div class="col-md-4 col-sm-6 col-xs-12 form-group">
                                      <select
                                        name="type"
                                        title="Property Types"
                                        class="search-field form-control"
                                        data-default-value
                                         v-model="bhform.type"
                                        :class="{ 'is-invalid': bhform.errors.has('type') }"
                                      >
                                        <option value>Any Type</option>
                                        <option  value="single" >Single House</option>
                                        <option  value="mid" >Mid Town</option>
                                        <option  value="town" >Town Condo</option>
                                      </select>
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-xs-12 form-group">
                                      <input
                                        type="text"
                                        class="form-control search-field"
                                        data-default-value
                                        name="title"
                                        placeholder="Title"
                                        v-model="bhform.title"
                                        :class="{ 'is-invalid': bhform.errors.has('title') }"
                                      />
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-xs-12 form-group">
                                      <input
                                        type="text"
                                        class="ere-location form-control search-field"
                                        data-default-value
                                        name="address"
                                        placeholder="Address"
                                        v-model="bhform.address"
                                        :class="{ 'is-invalid': bhform.errors.has('address') }"
                                      />
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-xs-12 form-group">
                                      <select
                                        name="bedroom"
                                        title="Property Bedrooms"
                                        class="search-field form-control"
                                        data-default-value
                                        v-model="bhform.bedroom"
                                        :class="{ 'is-invalid': bhform.errors.has('bedroom') }"
                                      >
                                        <option value>Any Bedrooms</option>
                                        <option  v-for="index in home.maxbedroom" :key="index" :value="index">{{index}}</option>
                                      </select>
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-xs-12 form-group">
                                      <select
                                        name="bathroom"
                                        title="Property Bathrooms"
                                        class="search-field form-control"
                                        data-default-value
                                        v-model="bhform.bathroom"
                                        :class="{ 'is-invalid': bhform.errors.has('bthroom') }"
                                      >
                                        <option value>Any Bathroom</option>
                                        <option  v-for="index in home.maxbathroom" :key="index" :value="index">{{index}}</option>
                                      </select>
                                    </div>
                                      <div class="col-md-4 col-sm-6 col-xs-12 form-group">
                                      <input
                                        type="text"
                                        class="ere-property-identity form-control search-field"
                                        data-default-value
                                        value
                                        name="propid"
                                        placeholder="Property ID"
                                        v-model="bhform.propertyid"
                                      />
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-xs-12 form-group">
                                      <label>Price range: ${{bhform.price_range[0]}} - {{bhform.price_range[1]}}</label>
                                      <vue-range-slider  :enableCross="false" :contained="true" :lazy="false" :bg-style="bgStyle" :min="home.minprice" tooltip-dir="bottom" tooltip="hover" :tooltip-style="tooltipStyle" :max="home.maxprice" :process-style="processStyle" v-model="bhform.price_range"></vue-range-slider> 
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-xs-12 form-group">
                                      <label>Land area: sqf {{bhform.area_range[0]}} - sqf {{bhform.area_range[1]}}</label>
                                      <vue-range-slider  :enableCross="false" :contained="true" :lazy="false" :bg-style="bgStyle" :min="home.minarea" tooltip-dir="bottom" tooltip="hover" :tooltip-style="tooltipStyle" :max="home.maxarea" :process-style="processStyle" v-model="bhform.area_range"></vue-range-slider> 
                                    </div>
                                  
                                    <div
                                      class="col-md-12 col-sm-6 col-xs-12 form-group submit-search-form pull-right"
                                    >
                                      <button type="button" class="ere-advanced-search-btn" @click="propertySearch">
                                        <i class="fa fa-search"></i> Search
                                      </button>
                                    </div>
                                  </div>                                
                                </div>
                               </form>
                              </div>
                            </div>
                          </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vc_row-full-width vc_clearfix"></div>
    <!-- FEATURED FLAT AREA START -->
    <div class="featured-flat-area pt-115 pb-80">
      <div class="container">
        <div class="featured-flat">
          <div class="row">
            <!-- flat-item -->
            <FeaturedFlatComponent></FeaturedFlatComponent>
            <!-- flat-item -->     
          </div>
        </div>
      </div>
    </div>
    <!-- FEATURED FLAT AREA END -->
    <!-- MAPSEARCH AREA START -->
    <div class="mapsearch-area bg-blue plr-140 ptb-50">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 col-xs-12 form-group">
            <input
              type="text"
              class="form-control search-field"
              data-default-value
              value
              name="title"
              placeholder="Address, Zip, Neighborhood"
            />
            <a href="#">
              <i class="icon-search2"></i>
            </a>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12 form-group">
            <select
              name="type"
              title="Property Types"
              class="search-field form-control"
              data-default-value
            >
              <option value="apartment">Apartment</option>>
              <option value selected>Property Types</option>
            </select>
          </div>

          <div class="col-md-3 col-sm-6 col-xs-12 form-group">
            <select
              name="neighborhoods"
              title="Neighborhoods"
              class="search-field form-control"
              data-default-value
            >
              <option value>Any Neighborhoods</option>
              <option value="1">Schools</option>
            </select>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12 form-group">
            <select name="price" title="Price" class="search-field form-control" data-default-value>
              <option value>Any Price</option>
              <option value="1000">$1,000</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <!-- DICECTORY LISTING GOOGLE MAP AREA START -->
    <div class="directory-listing-google-map-area">
      <div id="gmap"></div>
    </div>
    <!-- NEIGHBORHOOD AREA START -->
    <div class="blog-area pb-60 pt-115">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-2 text-center">
              <h2>VIEW ALL NEIGHBORHOODS</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="blog-carousel">
              <!-- blog-item -->
              <div class="col">
                <article class="blog-item bg-gray">
                  <div class="blog-image">
                    <a href="#">
                      <img src="vue/images/nbrhoods/1.jpg" alt />
                    </a>
                  </div>
                  <div class="blog-info">
                    <div class="post-title-time">
                      <h5>
                        <a href="#">Maridland de Villa</a>
                      </h5>
                      <p>July 30, 2017 / 10 am</p>
                    </div>
                    <p>
                      Lorem must explain to you how all this mistaolt denouncing pleasure and
                      praising pain wasnad I will give you a complete pain was praising
                    </p>
                    <a class="read-more" href="#">Read more</a>
                  </div>
                </article>
              </div>
              <!-- blog-item -->
              <div class="col">
                <article class="blog-item bg-gray">
                  <div class="blog-image">
                    <a href="single-blog.html">
                      <img src="vue/images/nbrhoods/2.jpg" alt />
                    </a>
                  </div>
                  <div class="blog-info">
                    <div class="post-title-time">
                      <h5>
                        <a href="#">Latest Design House</a>
                      </h5>
                      <p>July 30, 2017 / 10 am</p>
                    </div>
                    <p>
                      Lorem must explain to you how all this mistaolt denouncing pleasure and
                      praising pain wasnad I will give you a complete pain was praising
                    </p>
                    <a class="read-more" href="#">Read more</a>
                  </div>
                </article>
              </div>
              <!-- blog-item -->
              <div class="col">
                <article class="blog-item bg-gray">
                  <div class="blog-image">
                    <a href="single-blog.html">
                      <img src="vue/images/nbrhoods/3.jpg" alt />
                    </a>
                  </div>
                  <div class="blog-info">
                    <div class="post-title-time">
                      <h5>
                        <a href="#">Duplex Villa House</a>
                      </h5>
                      <p>July 30, 2017 / 10 am</p>
                    </div>
                    <p>
                      Lorem must explain to you how all this mistaolt denouncing pleasure and
                      praising pain wasnad I will give you a complete pain was praising
                    </p>
                    <a class="read-more" href="#">Read more</a>
                  </div>
                </article>
              </div>
              <!-- blog-item -->
              <div class="col">
                <article class="blog-item bg-gray">
                  <div class="blog-image">
                    <a href="#">
                      <img src="vue/images/nbrhoods/2.jpg" alt />
                    </a>
                  </div>
                  <div class="blog-info">
                    <div class="post-title-time">
                      <h5>
                        <a href="#">Latest Design House</a>
                      </h5>
                      <p>July 30, 2017 / 10 am</p>
                    </div>
                    <p>
                      Lorem must explain to you how all this mistaolt denouncing pleasure and
                      praising pain wasnad I will give you a complete pain was praising
                    </p>
                    <a class="read-more" href="#">Read more</a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- NEIGHBORHOOD AREA END -->
    <!-- BRAND AREA START -->
    <div class="brand-area pb-115">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-2 text-center">
              <h2>AUSTIN'S DEVELOPERS</h2>
            </div>
          </div>
          <div class="col-12">
            <div class="brand-carousel">
              <!-- brand-item -->
              <div class="col">
                <div class="brand-item">
                  <img src="vue/images/1.png" alt />
                </div>
              </div>
              <!-- brand-item -->
              <div class="col">
                <div class="brand-item">
                  <img src="vue/images/2.png" alt />
                </div>
              </div>
              <!-- brand-item -->
              <div class="col">
                <div class="brand-item">
                  <img src="vue/images/3.png" alt />
                </div>
              </div>
              <!-- brand-item -->
              <div class="col">
                <div class="brand-item">
                  <img src="vue/images/4.png" alt />
                </div>
              </div>
              <!-- brand-item -->
              <div class="col">
                <div class="brand-item">
                  <img src="vue/images/5.png" alt />
                </div>
              </div>
              <!-- brand-item -->
              <div class="col">
                <div class="brand-item">
                  <img src="vue/images/1.png" alt />
                </div>
              </div>
              <!-- brand-item -->
              <div class="col">
                <div class="brand-item">
                  <img src="vue/images/4.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- BRAND AREA END -->
    <!-- SUBSCRIBE AREA START -->
    <div class="subscribe-area bg-blue call-to-bg plr-140 ptb-50">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-12">
            <div class="section-title text-white">
              <h3>SUBSCRIBE</h3>
              <h2 class="h1">NEWSLETTER</h2>
            </div>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <div class="subscribe">
              <form action="#">
                <input type="text" name="subscribe" placeholder="Enter your email here..." />
                <button type="submit" value="send">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SUBSCRIBE AREA END -->
  </div>
</template>

<script>
import FeaturedFlatComponent from './FeaturedFlatComponent.vue';

export default {
    components: {
      FeaturedFlatComponent:FeaturedFlatComponent
      },

    data() {
      return {
        sform: new Form({
          searchmls: '',
        }),
        form: new Form({
          search: '',
        }),
        home:{},
        min_area:0,
        max_area:0,
        min_price:0,
        max_price:0,
        bhform: new Form({
          address: "",
          bedroom: "",
          bathroom: "",
          type: "",
          title: "",
          price_range:[],
          area_range:[],
          fortype:"rent",
          propertyid: "",          
        }),
        bgStyle: {
            backgroundColor: '#ffffff',
            boxShadow: 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'
        },
        processStyle: {
            backgroundColor: '#FF7F00'
        },
        tooltipStyle: {
            backgroundColor: '#666',
            borderColor: '#666'
        }
      }
    },

    methods: {
      searchDevelopment() {
        let sdev = this.form.search;
          if(sdev == '') {
            sdev='all';
          }
         window.location = 'search?type=dev&key='+sdev;
      },
      searchMls(){
        let mlsvar = this.sform.searchmls;
        if(mlsvar == '' ){
          mlsvar = 'all';
        }
        window.location = 'search?type=mls&key='+mlsvar;
      },
      loadHome()
      {
        axios.get("api/home-filter-data").then(({data})=>(this.home = data,          
          this.bhform.price_range = [parseInt(data.minprice), parseInt(data.maxprice)],
          this.bhform.area_range = [parseInt(data.minarea), parseInt(data.maxarea)]
        )).catch(function(error){console.log(error); });
      
      },    
      propertySearch()
      {
        window.location= 'property-details?fortype='+this.bhform.fortype+
        '&type='+this.bhform.type+
        '&title='+this.bhform.title+
        '&address='+this.bhform.address+
        '&type='+this.bhform.type+
        '&minprice='+this.bhform.price_range[0]+
        '&maxprice='+this.bhform.price_range[1]+
        '&minarea='+this.bhform.area_range[0]+
        '&maxarea='+this.bhform.area_range[1]+
        '&bed='+this.bhform.bedroom+
        '&bath='+this.bhform.bathroom+
        '&propid='+this.bhform.propertyid    
      }  
    },    
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
