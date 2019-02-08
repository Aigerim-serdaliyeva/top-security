import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

// *** Plugins
import { i18n } from "./i18n";
import VueScrollTo from "vue-scrollto";
import "./plugins/modernizr";
import "./plugins/scrollmagic";
import isMobile from "./plugins/isMobile";
import StoryblokVue from "storyblok-vue";
// *** /Plugins

// *** Vue use
Vue.use(isMobile);
Vue.use(VueScrollTo);
Vue.use(StoryblokVue);
// *** /Vue use

// *** Global components
import BeginBg from "./components/BeginBg.vue";
import CtNav from "./components/CtNav.vue";

Vue.component("begin-bg", BeginBg);
Vue.component("ct-nav", CtNav);
// *** /Global components

// *** Storyblok
// Import pages
import StoryblokNews from "./components/StoryblokNews";

// Import Components
import StoryblokNewsItem from "./components/StoryblokNewsItem";

// Component
Vue.component("storyblok-news", StoryblokNews);
Vue.component("storyblok-news-item", StoryblokNewsItem);

// *** /Storyblok
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
