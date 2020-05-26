
//TW=Twitter
//YT=YouTube
var JPvoiceList = [
    'JP_TW_20200512_001=十八まあああん到達しましたあああ.m4a',
    'JP_TW_20200512_002=ありがとぅ！.m4a',
    'JP_YT_20191206_002=お前らキモオタクかよ.m4a',
    'JP_YT_20191206_001=まじキモイなんだけど.......m4a',
    'JP_YT_20191206_003=あなた今年何歳ですか.......m4a',
    'JP_YT_20191206_004=ありがとう感謝です.m4a',
    'JP_YT_20191206_005=困ったえへへ.m4a',
    'JP_YT_20191206_006=ごめんね.m4a',
    'JP_YT_20191206_007=おつミルでしたーバイバイ.m4a',
    'JP_YT_20191206_008=バイバイ(小声).m4a',
    'JP_YT_20190701_001=こんばんミルミル～.m4a',
    'JP_YT_20190701_002=えっちょっと待ってよ.......m4a',
    'JP_YT_20190701_003=じゃあ行きますよ.m4a',
    'JP_YT_20190701_004=ふあ！いぇいい！やった！.m4a',
    'JP_YT_20190701_005=フルコンボだ！.m4a',
    'JP_YT_20190701_006=あこれパソボっ.......m4a',
    'JP_YT_20190701_007=これっこれっこれほしぃぃ.m4a'

]

var CNvoiceList = [
    'CN_TW_20200523_001=起床囉～.m4a',
    'CN_YT_20191206_001=工具人通常都是被記在心裡.......m4a',
    'CN_YT_20191206_002=ミル相信信眾們都是純潔又可愛的.......m4a',
    'CN_YT_20191206_003=帕美魯克拉魯克啦哩摟哩波噴.m4a',
    'CN_YT_20191206_004=孩子阿你在幹麻.m4a',
    'CN_YT_20191206_005=ミル一個人一個晚上可以.......m4a',
    'CN_YT_20191206_006=喜歡吃的東西是.......m4a',
    'CN_YT_20191206_007=喔天哪不行嘔噁噁噁.m4a',
    'CN_YT_20191206_008=ミル是一個很愛吃薯條的.......m4a',
    'CN_YT_20191206_009=好想吃現炸薯條喔～.m4a',
    'CN_YT_20191206_010=美味！極致的美味！太美味啦.m4a',
    'CN_YT_20191206_011=喝水對身體健康非常好.m4a',
    'CN_YT_20191206_012=然後啉酒然後唱歌.m4a',
    'CN_YT_20191206_013=啉酒唱歌喝酒唱歌然後晚上.......m4a',
    'CN_YT_20191206_014=休息是為了走更長遠的路嘛對不對.m4a',
    'CN_YT_20191206_015=愛大家嗯嘛.m4a',
    'CN_YT_20190701_001=安安~安安~.m4a',
    'CN_YT_20190701_002=要友善喔~要尊重包容友善喔~.m4a',
    'CN_YT_20190701_003=666666.m4a',
    'CN_YT_20190701_004=加油↑.m4a',
    'CN_YT_20190701_005=等一下等一下www啊哈哈ww.m4a',
    'CN_YT_20190701_006=玩音樂遊戲的時候R.......m4a',
    'CN_YT_20190701_007=喝啊！單身狗的手速！.m4a',
    'CN_YT_20190701_008=瘋狂的...RRR.m4a',
    'CN_YT_20190701_009=ㄋㄟㄋㄟ好大喔！.m4a'
]

var ORvoiceList = [
    'OR_YT_20191206_001=RA~RA~RA~.m4a',
    'OR_YT_20191206_002=(奇声001).m4a',
    'OR_YT_20191206_003=HA~.m4a',
    'OR_YT_20191206_004=(笑い声001).m4a',
    'OR_YT_20190701_001=Ah~hehe.m4a',
    'OR_YT_20190701_002=YA~~yay!hahaha.m4a',
    'OR_YT_20190701_003=hee~.m4a',
    'OR_YT_20190701_004=(笑い声002).m4a',
    'OR_YT_20190701_005=NICE.m4a',
    'OR_YT_20190701_006=(奇声002).m4a',
    'OR_YT_20190701_007=RRRhahahaha.m4a',
    'OR_YT_20190701_008=eh!fufufuhahaha~.m4a',
    'OR_YT_20190701_009=ah!ahee.m4a'

]

const func = new Vue({
    el: '#Base',
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
                src: './voice/' + voice,
                volume: 1.7
            })
            audio.play()
        },
    }


})