import Vue from 'vue';
import Cloudinary, { CldImage,CldTransformation,CldVideo,CldContext }  from 'cloudinary-vue';

Vue.use(Cloudinary, {
    configuration: { cloudName: 'erickroberts-com' },
    components: [ CldImage,CldTransformation,CldVideo,CldContext ]
})
