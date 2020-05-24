
//TW=Twitter
//YT=YouTube
var JPvoiceList = [
    'JP_TW_20200512_001=十八まあああん到達しましたあああ.m4a',
    'JP_TW_20200512_002=ありがとぅ！.m4a'
]

var CNvoiceList = [
    'CN_TW_20200523_001=起床囉～.m4a'
]

var ORvoiceList = [

]

const func = new Vue({
    el: '#voiceDiv',
    data: {
        JPvoiceList: JPvoiceList,
        CNvoiceList: CNvoiceList,
        ORvoiceList: ORvoiceList
    },

    computed: {
        getJPVoiceItem: function () {
            return this.JPvoiceList
        },

        getCNVoiceItem: function () {
            return this.CNvoiceList
        },

        getORVoiceItem: function () {
            return this.ORvoiceList
        }

    },

    methods: {
        playSound: function (voice) {
            const audio = new Howl({
                src: './voice/' + voice
            })
            audio.play()
        },
    }


})