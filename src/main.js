import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css';
import router from './router'
import Cloudinary, { CldImage,CldTransformation,CldVideo,CldContext }  from 'cloudinary-vue';
import AuthConfig from "@/auth/auth_config";
import { Auth0Plugin } from "@/auth/";

let auth = new AuthConfig();
const domain = auth.getDomain();
const clientId = auth.getClientId();

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
  }
});

Vue.use(Cloudinary, {
  configuration: { cloudName: 'erickroberts-com' },
  components: [ CldImage,CldTransformation,CldVideo,CldContext ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
