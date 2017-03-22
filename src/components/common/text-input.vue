Vue.Component('text-input', {
    template: '<input placeholder={{placeholder}} v-on:input="textChange($event.target.value)"/>',
    props: ['placeholder'],
    data() {
        return {text: null}
    },
    methods: {
        textChange(value) {
            this.$emit('textChange', value)
        }
    },
})
