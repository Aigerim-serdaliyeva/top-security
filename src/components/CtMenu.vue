<template lang="pug">
    header#header(ref="ctMenu",v-if="!isMobile")
        .menu
            .menu__numbers(v-if="!isMobile")                
                a(href="tel:5335") 5335
                a(href="tel:+77016437956") +7 (701) 643-79-56
                a(href="tel:+77273646874") +7 (727) 364-68-74                                                
            .menu__logo
                router-link(to="/", style="z-index:10")
                    menu-logo
            <ct-nav id="indescr" :lists-prop="lists" :fixed="false" />       
            menu-line.menu__line    
</template>

<script>
import MenuLine from "@/components/svg-components/index/MenuLine";
import MenuLogo from "@/components/svg-components/index/MenuLogo";
import CtNav from "@/components/CtNav";

export default {
  computed: {
    lists() {
      return this.$store.state.menu;
    }
  },
  components: {
    MenuLine,
    MenuLogo,
    CtNav
  }
};
</script>
