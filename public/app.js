new Vue({
    el: "#app",
    data: {
      value: 0
    },
    methods: {
        clear() {
        return this.value = 0;
        },
        equal() {
         let equal = this.value;
         return this.value = eval(equal);
        },
        del(){
          this.value = this.value.toString().slice(0, -1)
        },
        key(e){
            if (Number.isInteger(this.value))
              this.value = '';
            this.value += e;
          },
           Del(){
           return this.value.slice(0, -1);
             }       
    }
  })