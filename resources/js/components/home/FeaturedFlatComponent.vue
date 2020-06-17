<template>
    <div class="row">
        <!-- feature flat begin -->
        <div class="col-lg-4 col-md-6 col-12" v-for="flat in flats" :key="flat.id">
            <div class="flat-item"><div class="flat-item-image">
                <span class="for-sale">{{flat.status.status}}</span> 
                    <a href="#">
                        <img class="featurimg" :src="'/uploads/homes/'+flat.featured_image" alt="" width="368px" height="235px" />
                    </a> 
                    <div class="flat-link"><a href="javascript:;" @click="flatDetails(flat.id)">More Details</a></div>
                        <ul class="flat-desc">
                            <li><img src="vue/images/icons/4.png" alt=""> <span>{{flat.area}} sqft</span></li> 
                            <li><img src="vue/images/icons/5.png" alt=""> <span>{{flat.bedroom}}</span></li> 
                            <li><img src="vue/images/icons/6.png" alt=""> <span>{{flat.bathroom}}</span></li>
                        </ul>
                    </div>
                    <div class="flat-item-info">
                        <div class="flat-title-price">
                            <h5><a href="#">{{flat.title}}</a></h5>
                            <span class="price">${{flat.price}}</span>
                        </div>
                            <p><img src="vue/images/icons/location.png" alt="">{{flat.description}}</p>
                    </div>
            </div>
        </div>
        <!-- feature flat end -->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                flats:[],
            }
        },
        methods: {
           getFlats(){
              window.axios.get('/api/home-house-list').then(({data})=>{this.flats = data;})
                .catch(function(error){console.log(error); });
           },
           flatDetails(id){
               window.location = 'flat-details/'+id;
           }
           
        },
        beforeMount() {
           this.getFlats();
        },
        mounted() {
        }
    }
</script>
