<template>
<div class="find-home-box box-left1">
              <div class="section-title text-white">
                <h2 class="h1">SEARCH MLS</h2>
              </div>
              <div class="find-homes">
                <div class="row">
                    <div class="find-home-item">
                      <input
                        type="text"
                        name="txt_mls_search"
                        placeholder="ADDRESS, ZIP, NEIGHBORHOOD, PROPERTY TYPE"
                      />
                      <a href="#" class="prevent-default search-standard">
                        <i class="icon-search2"></i>
                      </a>
                       <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
                    </div>
                    
                  </div>
                  <div class="col-sm-12 col-xs-12">
                    <div class="find-home-item">
                      <a class="button-1 btn-block btn-hover-1" href="#">VIEW ALL MLS</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
</template>
<script>
//import { validationMixin } from 'vuelidate'
//import { required, minLength } from 'vuelidate/lib/validators'

export default {
}
 </script>