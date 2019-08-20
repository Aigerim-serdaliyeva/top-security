<template lang="pug">
    - 
        var text = "Наш офис расположен по адресу г Алматы ул Шевченко 153/1. Телефон : 5335, +7 (701) 643-79-56. Email: info@topsecurity.kz. График работы офиса с 9.00 - 18.00"
        var contacts = [
            { text: ' г. Алматы, ул. Шевченко, 153/1' },
            { text: 'Телефон : 5335, +7(701) 031-68-20' },
            { text: 'Email: info@topsecurity.kz' },
            { text: 'Instagram: @topsecurity.kz' },
            { text: 'График работы офиса с 9.00 - 18.00' }
        ]

    mixin phone(index)
        if index === 0
            <svg class="contacts-svg-0" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.72922 19.5965C1.05352 11.3684 0 10.5239 0 7.5C0 3.35785 3.35785 0 7.5 0C11.6421 0 15 3.35785 15 7.5C15 10.5239 13.9465 11.3684 8.27078 19.5965C7.89832 20.1345 7.10164 20.1345 6.72922 19.5965ZM7.5 10.625C9.2259 10.625 10.625 9.2259 10.625 7.5C10.625 5.7741 9.2259 4.375 7.5 4.375C5.7741 4.375 4.375 5.7741 4.375 7.5C4.375 9.2259 5.7741 10.625 7.5 10.625Z" fill="#EF3B39"/>
            </svg>
        if index === 1
            <svg  class="contacts-svg-1" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3098 0.913273L14.4505 0.0226664C14.0312 -0.0738159 13.6007 0.145125 13.43 0.538476L11.6488 4.69464C11.4929 5.0583 11.5968 5.48505 11.9048 5.73368L14.1536 7.57427C12.8177 10.4205 10.4836 12.788 7.57797 14.1499L5.73738 11.9011C5.48504 11.5931 5.062 11.4892 4.69834 11.6451L0.542172 13.4263C0.14511 13.6007 -0.0738307 14.0312 0.0226517 14.4505L0.913259 18.3098C1.00603 18.7106 1.36227 19 1.7816 19C11.2851 19 19 11.3 19 1.78161C19 1.366 18.7143 1.00604 18.3098 0.913273Z" fill="#EF3B39"/>
            </svg>
        if index === 2
            <svg  class="contacts-svg-2" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5832 5.61354C21.7508 5.4763 22 5.60469 22 5.82161V14.875C22 16.0482 21.0762 17 19.9375 17H2.0625C0.923828 17 0 16.0482 0 14.875V5.82604C0 5.60469 0.244922 5.48073 0.416797 5.61797C1.3793 6.38828 2.65547 7.36667 7.03828 10.6471C7.94492 11.3289 9.47461 12.7633 11 12.7544C12.534 12.7677 14.0937 11.3023 14.966 10.6471C19.3488 7.36667 20.6207 6.38385 21.5832 5.61354ZM11 11.3333C11.9969 11.351 13.432 10.0406 14.1539 9.50052C19.8559 5.23724 20.2898 4.86536 21.6047 3.80286C21.8539 3.60365 22 3.29375 22 2.96615V2.125C22 0.951823 21.0762 0 19.9375 0H2.0625C0.923828 0 0 0.951823 0 2.125V2.96615C0 3.29375 0.146094 3.59922 0.395313 3.80286C1.71016 4.86094 2.14414 5.23724 7.84609 9.50052C8.56797 10.0406 10.0031 11.351 11 11.3333Z" fill="#EF3B39"/>
            </svg>
        if index === 3
            <svg class="contacts-svg-3"  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83334 0H14.1667C17.375 0 20 2.625 20 5.83333V14.1667C20 17.375 17.375 20 14.1667 20H5.83334C2.62501 20 0 17.375 0 14.1667V5.83333C0 2.625 2.62501 0 5.83334 0ZM17.1094 2.89062C16.3177 2.10417 15.2708 1.66667 14.1667 1.66667H5.83334C4.72917 1.66667 3.67709 2.09896 2.89063 2.89062C2.10416 3.68229 1.66666 4.72917 1.66666 5.83333V14.1667C1.66666 15.2708 2.09895 16.3229 2.89063 17.1094C3.6823 17.8958 4.72917 18.3333 5.83334 18.3333H14.1667C15.2708 18.3333 16.3229 17.901 17.1094 17.1094C17.8958 16.3177 18.3333 15.2708 18.3333 14.1667V5.83333C18.3333 4.72917 17.9011 3.67708 17.1094 2.89062Z" fill="#EF3B39"/>
            <path d="M9.84556 6.70554C11.677 6.70554 13.166 8.18726 13.166 10.0097C13.166 11.8322 11.677 13.3139 9.84556 13.3139C8.01411 13.3139 6.52509 11.8322 6.52509 10.0097C6.52509 8.18726 8.01411 6.70554 9.84556 6.70554Z" fill="#EF3B39"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1667 1.66667C15.2708 1.66667 16.3177 2.10417 17.1094 2.89062C17.9011 3.67708 18.3333 4.72917 18.3333 5.83333V14.1667C18.3333 15.2708 17.8958 16.3177 17.1094 17.1094C16.3229 17.901 15.2708 18.3333 14.1667 18.3333H5.83334C4.72917 18.3333 3.6823 17.8958 2.89063 17.1094C2.09895 16.3229 1.66666 15.2708 1.66666 14.1667V5.83333C1.66666 4.72917 2.10416 3.68229 2.89063 2.89062C3.67709 2.09896 4.72917 1.66667 5.83334 1.66667H14.1667ZM13.9962 4.64043C13.9962 5.32708 14.5513 5.87949 15.2413 5.87949C15.9262 5.87949 16.4865 5.32708 16.4865 4.64043C16.4865 3.95378 15.9262 3.40136 15.2413 3.40136C14.5513 3.40136 13.9962 3.95378 13.9962 4.64043ZM4.86487 10.0097C4.86487 7.27345 7.09582 5.05345 9.84556 5.05345C12.5953 5.05345 14.8263 7.27345 14.8263 10.0097C14.8263 12.746 12.5953 14.966 9.84556 14.966C7.09582 14.966 4.86487 12.746 4.86487 10.0097Z" fill="#EF3B39"/>
            </svg>
        if index === 4
            <svg  class="contacts-svg-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C4.47581 0 0 4.47581 0 10C0 15.5242 4.47581 20 10 20C15.5242 20 20 15.5242 20 10C20 4.47581 15.5242 0 10 0ZM12.3024 14.1169L8.74597 11.5323C8.62097 11.4395 8.54839 11.2944 8.54839 11.1411V4.35484C8.54839 4.08871 8.76613 3.87097 9.03226 3.87097H10.9677C11.2339 3.87097 11.4516 4.08871 11.4516 4.35484V9.90726L14.0121 11.7702C14.2298 11.9274 14.2742 12.2298 14.1169 12.4476L12.9798 14.0121C12.8226 14.2258 12.5202 14.2742 12.3024 14.1169Z" fill="#EF3B39"/>
            </svg>


    section(v-if="!isMobile" ,class="full-section_pad ct-contacts")
      <slot />
      .ct-contacts__wrap 
          section
              h2  Если вы не смогли с нами связаться, вы можете оставить заявку, наш менеджер обязательно Вам перезвонит.
              form(action="")
                    input(type="text",  v-model="call_name",  placeholder="Ваше имя")
                    input(type="text", v-mask="'8 (###)-###-##-##'" v-model="call_phone", placeholder="Ваш номер телефона")                    
                    p.call-err(v-if="call_err_trigger")
                        | {{call_err_text}}
                    button.call__submit(type="submit", :class="call_class" @click="submit($event)",ref="call__submit") 
                        span {{call_button}}   
          section
                .map
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6862e9cf8b07c0ad102e1c1e35c555b28f74248eb498a8bba6eaf0c43303180e&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
                .cc
                    each item,index in contacts
                        if index === 1
                            article                    
                                +phone(index)
                                .cc_item
                                    a Call-center :     
                                    a  5335,    
                                    a  +7 (701) 643-79-56, 
                                    a  +7 (727) 364-68-74                                     
                            article                    
                                +phone(index)
                                .cc_item                                    
                                    a ПЦН: +7(701) 031-68-20                                     
                        else
                            article                    
                                +phone(index)
                                a=item.text                                                               
    section(v-else-if="isMobile", class="full-section ct-contacts default-bg")
        .ct-contacts__wrap 
            mobile-header(:title="`Контакты`")
            main
                .cc
                    each item,index in contacts
                        if index === 1
                            article                    
                                +phone(index)
                                .cc_item
                                    a Call-center :       
                                    br                 
                                    a(href="tel:5335") 5335,                                                       
                                    a(href="tel:+77016437956" ) +7 (701) 643-79-56,                                 
                                    br
                                    a(href="tel:+77273646874") +7 (727) 364-68-74                                    
                            article                    
                                +phone(index)
                                .cc_item                                    
                                    a ПЦН:                                     
                                    br
                                    a( href="tel:+77010316820") +7(701) 031-68-20                                      
                        else
                            article                    
                                +phone(index)
                                a=item.text        
                p   Если вы не смогли с нами связаться, вы можете оставить заявку, наш менеджер обязательно Вам перезвонит.
                form(action="")
                    input(type="text",  v-model="call_name",  placeholder="Ваше имя")
                    input(type="text", v-mask="'8 (###)-###-##-##'" v-model="call_phone", placeholder="Ваш номер телефона")                    
                    p.call-err(v-if="call_err_trigger")
                        | {{call_err_text}}
                    button.call__submit(type="submit", :class="call_class" @click="submit($event)",ref="call__submit") 
                        span {{call_button}}                     

</template>

<script>
import BeginLogo from "@/components/svg-components/BeginLogo.vue";
import Visited from "@/mixins/visited";
import axios from "axios";

export default {
  data() {
    return {
      call_button: "Оставить заявку",
      call_class: "call__pre",
      call_name: null,
      call_phone: null,
      call_err_trigger: false,
      call_err_text: "Пожалуйста, заполните нужные поля",
      publicPath: process.env.BASE_URL,
      ptext: `Наш офис расположен по адресу <br> г Алматы ул Шевченко 153/1. <br> Телефон : 5335, +7 (701) 643-79-56. <br> Email: info@topsecurity.kz. <br> <a href='https://www.instagram.com/topsecurity.kz/' target="_blank">  Instagram: @topsecurity.kz. </a> <br> График работы офиса с 9.00 - 18.00`,
      ptextMobile: `Наш офис расположен по адресу г Алматы ул Шевченко 153/1. Телефон : 5335, +7 (701) 643-79-56. Email: info@topsecurity.kz. <a href='https://www.instagram.com/topsecurity.kz/' target="_blank"> Instagram: @topsecurity.kz. </a> График работы офиса с 9.00 - 18.00`
    };
  },
  components: {
    BeginLogo
  },
  mixins: [Visited],
  methods: {
    submit(e) {
      e.preventDefault();
      e.stopPropagation();
      this.call_err_text = "Пожалуйста, заполните нужные поля";
      if (
        this.call_name !== null &&
        this.call_phone !== null &&
        this.call_name !== "" &&
        this.call_phone !== ""
      ) {
        if (this.call_phone.length < 17) {
          this.call_err_trigger = true;
          this.call_err_text = "Номер не введен полностью";
        } else {
          this.call_err_trigger = false;
          this.call_button = "Отправляется...";
          this.call_class = "call__upd";
          const options = {
            method: "POST",
            headers: { "content-type": "application/x-www-form-urlencoded" },
            data: {
              name: this.call_name,
              phone: this.call_phone
            },
            url: `${this.publicPath}mailer.php`
          };
          axios(options).then(res => {
            console.log(res);
            this.call_button = "Ваша заявка отправлена";
            this.call_class = "call__success";
          });
        }
      } else {
        this.call_err_trigger = true;
      }
    }
  }
};
</script>
