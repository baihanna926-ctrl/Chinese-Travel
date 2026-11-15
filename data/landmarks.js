/* =========================================================================
   地标剪影素材：每个目的地一个「标志性建筑 / 地标」的 SVG
   画风统一：远景用 16% 白、主体用深色剪影、雪/水用 55% 白
   用法：<svg class="landmark" viewBox="0 0 400 200" preserveAspectRatio="xMidYMax slice">
   想换成实拍照片：把 assets/landmarks/<slug>.jpg 放进去，
   并给 destination 数据加 photo:"assets/landmarks/xxx.jpg" 即可（见 site.js）
   ========================================================================= */
window.LANDMARKS = {

  /* 大理 · 崇圣寺三塔 */
  "three-pagodas":
    '<ellipse cx="200" cy="194" rx="170" ry="9" fill="rgba(255,255,255,.16)"/>' +
    '<g fill="rgba(8,12,32,.58)">' +
      '<polygon points="186,200 186,124 214,124 214,200"/>' +
      '<polygon points="172,132 200,112 228,132"/>' +
      '<polygon points="175,114 200,96 225,114"/>' +
      '<polygon points="178,98 200,82 222,98"/>' +
      '<polygon points="182,84 200,70 218,84"/>' +
      '<rect x="197.6" y="52" width="4.8" height="20"/>' +
      '<circle cx="200" cy="49" r="4.6"/>' +
      '<polygon points="110,200 110,146 126,146 126,200"/>' +
      '<polygon points="102,154 118,140 134,154"/>' +
      '<polygon points="104,142 118,130 132,142"/>' +
      '<polygon points="107,130 118,120 129,130"/>' +
      '<rect x="115.6" y="108" width="4.8" height="14"/>' +
      '<polygon points="274,200 274,146 290,146 290,200"/>' +
      '<polygon points="266,154 282,140 298,154"/>' +
      '<polygon points="268,142 282,130 296,142"/>' +
      '<polygon points="271,130 282,120 293,130"/>' +
      '<rect x="279.6" y="108" width="4.8" height="14"/>' +
    '</g>',

  /* 九寨沟 · 诺日朗瀑布 */
  "waterfall":
    '<ellipse cx="200" cy="196" rx="180" ry="10" fill="rgba(255,255,255,.16)"/>' +
    '<path d="M0 200 L0 92 L70 86 L150 90 L230 84 L310 92 L400 86 L400 200 Z" fill="rgba(8,12,32,.5)"/>' +
    '<g fill="rgba(255,255,255,.5)">' +
      '<rect x="62" y="94" width="9" height="86"/>' +
      '<rect x="86" y="94" width="15" height="86"/>' +
      '<rect x="112" y="94" width="7" height="86"/>' +
      '<rect x="132" y="94" width="19" height="86"/>' +
      '<rect x="164" y="94" width="11" height="86"/>' +
      '<rect x="188" y="94" width="23" height="86"/>' +
      '<rect x="224" y="94" width="9" height="86"/>' +
      '<rect x="246" y="94" width="17" height="86"/>' +
      '<rect x="276" y="94" width="13" height="86"/>' +
      '<rect x="302" y="94" width="20" height="86"/>' +
      '<rect x="334" y="94" width="10" height="86"/>' +
    '</g>' +
    '<g fill="rgba(255,255,255,.3)">' +
      '<ellipse cx="148" cy="184" rx="58" ry="10"/>' +
      '<ellipse cx="256" cy="193" rx="66" ry="9"/>' +
    '</g>' +
    '<g fill="rgba(8,12,32,.5)">' +
      '<polygon points="0,200 0,120 26,150 44,126 60,200"/>' +
      '<polygon points="400,200 400,124 376,152 356,128 340,200"/>' +
    '</g>',

  /* 林芝 · 南迦巴瓦峰 */
  "namcha-barwa":
    '<circle cx="306" cy="52" r="24" fill="rgba(255,255,255,.18)"/>' +
    '<polygon points="94,200 150,116 210,200" fill="rgba(8,12,32,.34)"/>' +
    '<polygon points="40,200 148,38 200,122 236,68 306,200" fill="rgba(8,12,32,.6)"/>' +
    '<polygon points="126,78 148,38 170,78 158,92 138,92" fill="rgba(255,255,255,.6)"/>' +
    '<polygon points="220,96 236,68 252,96 244,104 228,104" fill="rgba(255,255,255,.45)"/>' +
    '<ellipse cx="170" cy="196" rx="180" ry="9" fill="rgba(255,255,255,.16)"/>',

  /* 敦煌 · 莫高窟九层楼 */
  "mogao":
    '<path d="M0 200 L0 70 L400 70 L400 200 Z" fill="rgba(8,12,32,.4)"/>' +
    '<g fill="rgba(255,255,255,.44)">' +
      '<polygon points="178,200 178,62 222,62 222,200"/>' +
    '</g>' +
    '<g fill="rgba(8,12,32,.62)">' +
      '<polygon points="170,74 200,48 230,74"/>' +
      '<polygon points="171,92 200,70 229,92"/>' +
      '<polygon points="171,110 200,88 229,110"/>' +
      '<polygon points="171,128 200,106 229,128"/>' +
      '<polygon points="171,146 200,124 229,146"/>' +
      '<polygon points="171,164 200,142 229,164"/>' +
    '</g>' +
    '<rect x="196" y="34" width="8" height="14" fill="rgba(8,12,32,.7)"/>' +
    '<path d="M0 200 C 70 176 140 192 212 172 C 284 152 344 178 400 162 L400 200 Z" fill="rgba(255,255,255,.2)"/>' +
    '<path d="M0 200 C 60 186 130 198 210 184 C 290 170 350 190 400 180 L400 200 Z" fill="rgba(255,255,255,.14)"/>',

  /* 杭州 · 雷峰塔与西湖 */
  "leifeng":
    '<g fill="rgba(8,12,32,.3)">' +
      '<path d="M0 176 C 60 150 130 140 210 142 C 290 144 350 156 400 172 L400 200 L0 200 Z"/>' +
    '</g>' +
    '<g fill="rgba(8,12,32,.6)">' +
      '<polygon points="240,196 240,96 296,96 296,196"/>' +
      '<polygon points="228,104 268,82 308,104"/>' +
      '<polygon points="232,86 268,66 304,86"/>' +
      '<polygon points="236,70 268,52 300,70"/>' +
      '<rect x="264" y="36" width="8" height="18"/>' +
      '<circle cx="268" cy="33" r="4"/>' +
    '</g>' +
    '<path d="M40 200 C 78 168 118 168 156 200 Z" fill="rgba(8,12,32,.5)"/>' +
    '<path d="M56 200 C 84 180 112 180 140 200" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="3"/>' +
    '<g fill="rgba(255,255,255,.28)">' +
      '<rect x="0" y="182" width="400" height="3"/>' +
      '<rect x="60" y="192" width="140" height="2.5"/>' +
      '<rect x="230" y="190" width="120" height="2.5"/>' +
    '</g>' +
    '<ellipse cx="120" cy="190" rx="16" ry="3.5" fill="rgba(255,255,255,.5)"/>',

  /* 桂林 · 象鼻山与竹筏 */
  "elephant-hill":
    '<circle cx="322" cy="58" r="20" fill="rgba(255,255,255,.16)"/>' +
    '<g fill="rgba(8,12,32,.58)">' +
      '<path d="M34 200 C 34 156 56 128 92 124 L 112 200 Z"/>' +
      '<path d="M122 200 C 132 150 172 124 228 124 C 292 124 342 156 368 200 Z"/>' +
      '<path d="M196 128 C 210 108 226 100 236 104 C 224 112 214 120 210 132 Z"/>' +
    '</g>' +
    '<ellipse cx="104" cy="178" rx="25" ry="21" fill="rgba(255,255,255,.45)"/>' +
    '<g fill="rgba(255,255,255,.3)">' +
      '<rect x="0" y="190" width="400" height="3"/>' +
      '<rect x="150" y="196" width="120" height="2.5"/>' +
    '</g>' +
    '<g fill="none" stroke="rgba(255,255,255,.6)" stroke-width="3" stroke-linecap="round">' +
      '<path d="M250 190 L 274 190"/>' +
      '<path d="M262 190 L 258 168"/>' +
      '<path d="M262 190 L 268 168"/>' +
    '</g>',

  /* 喀纳斯 · 禾木木屋 */
  "hemu-cabins":
    '<circle cx="70" cy="46" r="18" fill="rgba(255,255,255,.16)"/>' +
    '<g fill="rgba(8,12,32,.34)">' +
      '<polygon points="230,200 268,60 306,200"/>' +
      '<polygon points="292,200 330,74 368,200"/>' +
    '</g>' +
    '<g fill="rgba(8,12,32,.6)">' +
      '<rect x="96" y="142" width="70" height="58"/>' +
      '<polygon points="88,144 131,110 174,144"/>' +
      '<rect x="176" y="152" width="58" height="48"/>' +
      '<polygon points="169,154 205,124 241,154"/>' +
      '<rect x="244" y="160" width="48" height="40"/>' +
      '<polygon points="238,162 268,138 298,162"/>' +
    '</g>' +
    '<g fill="rgba(255,255,255,.3)">' +
      '<rect x="110" y="158" width="12" height="12"/>' +
      '<rect x="188" y="166" width="10" height="10"/>' +
      '<rect x="254" y="172" width="10" height="10"/>' +
    '</g>' +
    '<ellipse cx="200" cy="198" rx="180" ry="7" fill="rgba(255,255,255,.16)"/>',

  /* 霞浦 · 滩涂与竹竿 */
  "mudflat":
    '<g fill="rgba(255,255,255,.1)"><rect x="0" y="120" width="400" height="80"/></g>' +
    '<g fill="rgba(8,12,32,.3)">' +
      '<path d="M0 200 L0 150 C 80 140 150 160 220 152 C 300 143 350 158 400 148 L400 200 Z"/>' +
    '</g>' +
    '<g stroke="rgba(8,12,32,.6)" stroke-width="3" stroke-linecap="round">' +
      '<path d="M52 148 L32 120"/>' +
      '<path d="M74 146 L54 114"/>' +
      '<path d="M98 148 L78 118"/>' +
      '<path d="M120 145 L100 112"/>' +
      '<path d="M142 148 L122 116"/>' +
      '<path d="M164 146 L144 114"/>' +
    '</g>' +
    '<g stroke="rgba(255,255,255,.34)" stroke-width="2">' +
      '<path d="M0 168 C 100 162 180 172 260 166 C 320 162 360 168 400 164"/>' +
      '<path d="M0 182 C 110 176 190 186 280 180 C 330 177 370 182 400 178"/>' +
    '</g>' +
    '<path d="M250 178 L306 178 L300 188 L256 188 Z" fill="rgba(8,12,32,.62)"/>' +
    '<path d="M276 178 L276 162" stroke="rgba(8,12,32,.6)" stroke-width="3"/>',

  /* 西安 · 大雁塔 */
  "wild-goose":
    '<ellipse cx="200" cy="196" rx="170" ry="8" fill="rgba(255,255,255,.16)"/>' +
    '<g fill="rgba(8,12,32,.6)">' +
      '<polygon points="166,200 166,148 234,148 234,200"/>' +
      '<polygon points="163,150 200,132 237,150"/>' +
      '<polygon points="168,132 200,116 232,132"/>' +
      '<polygon points="172,116 200,102 228,116"/>' +
      '<polygon points="176,102 200,90 224,102"/>' +
      '<polygon points="180,90 200,80 220,90"/>' +
      '<rect x="196" y="62" width="8" height="18"/>' +
      '<polygon points="193,64 200,50 207,64"/>' +
    '</g>' +
    '<g fill="rgba(255,255,255,.28)">' +
      '<rect x="176" y="160" width="10" height="14"/>' +
      '<rect x="214" y="160" width="10" height="14"/>' +
      '<rect x="176" y="126" width="8" height="10"/>' +
      '<rect x="216" y="126" width="8" height="10"/>' +
    '</g>',

  /* 北京 · 慕田峪长城 */
  "great-wall":
    '<path d="M0 200 L0 168 C 70 158 120 132 180 108 C 250 80 320 66 400 52 L400 200 Z" fill="rgba(8,12,32,.34)"/>' +
    '<g stroke="rgba(8,12,32,.62)" stroke-width="14" stroke-linecap="square" fill="none">' +
      '<path d="M0 158 C 60 150 110 128 170 106 C 240 80 320 64 400 50"/>' +
    '</g>' +
    '<g fill="rgba(8,12,32,.66)">' +
      '<rect x="52" y="122" width="34" height="44"/>' +
      '<rect x="46" y="114" width="46" height="10"/>' +
      '<rect x="240" y="60" width="32" height="40"/>' +
      '<rect x="234" y="52" width="44" height="10"/>' +
    '</g>' +
    '<g fill="rgba(255,255,255,.3)">' +
      '<rect x="60" y="130" width="8" height="10"/>' +
      '<rect x="72" y="130" width="8" height="10"/>' +
      '<rect x="248" y="68" width="8" height="10"/>' +
      '<rect x="260" y="68" width="8" height="10"/>' +
    '</g>' +
    '<g fill="rgba(8,12,32,.4)">' +
      '<polygon points="300,200 330,140 352,200"/>' +
      '<polygon points="20,200 46,158 68,200"/>' +
    '</g>',

  /* 黔东南 · 西江千户苗寨 */
  "miao-village":
    '<path d="M0 200 L0 118 C 90 96 180 108 260 96 C 330 86 370 96 400 106 L400 200 Z" fill="rgba(8,12,32,.34)"/>' +
    '<g fill="rgba(8,12,32,.6)">' +
      '<rect x="26" y="146" width="40" height="30"/><polygon points="20,148 46,132 72,148"/>' +
      '<rect x="80" y="140" width="44" height="36"/><polygon points="74,142 102,124 130,142"/>' +
      '<rect x="140" y="134" width="40" height="34"/><polygon points="134,136 160,120 186,136"/>' +
      '<rect x="196" y="130" width="46" height="38"/><polygon points="190,132 219,114 248,132"/>' +
      '<rect x="256" y="136" width="42" height="34"/><polygon points="250,138 277,122 304,138"/>' +
      '<rect x="312" y="144" width="46" height="30"/><polygon points="306,146 335,130 364,146"/>' +
      '<rect x="104" y="112" width="34" height="28"/><polygon points="98,114 121,98 144,114"/>' +
      '<rect x="236" y="108" width="34" height="28"/><polygon points="230,110 253,94 276,110"/>' +
    '</g>' +
    '<g fill="rgba(8,12,32,.7)">' +
      '<rect x="176" y="86" width="34" height="58"/>' +
      '<polygon points="164,90 193,66 222,90"/>' +
      '<polygon points="170,72 193,54 216,72"/>' +
      '<polygon points="176,58 193,44 210,58"/>' +
      '<rect x="190" y="34" width="6" height="12"/>' +
    '</g>' +
    '<g fill="rgba(255,255,255,.26)">' +
      '<rect x="36" y="156" width="8" height="8"/><rect x="52" y="156" width="8" height="8"/>' +
      '<rect x="92" y="150" width="8" height="8"/><rect x="108" y="150" width="8" height="8"/>' +
      '<rect x="150" y="144" width="8" height="8"/><rect x="208" y="140" width="8" height="8"/>' +
      '<rect x="228" y="140" width="8" height="8"/><rect x="268" y="146" width="8" height="8"/>' +
      '<rect x="324" y="154" width="8" height="8"/><rect x="342" y="154" width="8" height="8"/>' +
    '</g>',

  /* 青海 · 青海湖与经幡 */
  "qinghai-lake":
    '<circle cx="72" cy="52" r="20" fill="rgba(255,255,255,.18)"/>' +
    '<path d="M0 128 L46 96 L84 120 L130 74 L176 118 L214 92 L262 126 L306 98 L352 128 L400 104 L400 140 L0 140 Z" fill="rgba(8,12,32,.34)"/>' +
    '<path d="M0 140 L400 140 L400 200 L0 200 Z" fill="rgba(255,255,255,.2)"/>' +
    '<g fill="rgba(8,12,32,.24)">' +
      '<path d="M0 152 C 90 146 150 158 240 152 C 320 147 360 155 400 150 L400 200 L0 200 Z"/>' +
    '</g>' +
    '<g stroke="rgba(8,12,32,.55)" stroke-width="3" stroke-linecap="round">' +
      '<path d="M300 190 L300 148"/>' +
      '<path d="M330 192 L330 154"/>' +
      '<path d="M360 194 L360 160"/>' +
    '</g>' +
    '<g fill="rgba(255,255,255,.55)">' +
      '<rect x="300" y="150" width="16" height="6"/>' +
      '<rect x="330" y="156" width="16" height="6"/>' +
      '<rect x="360" y="162" width="16" height="6"/>' +
      '<rect x="300" y="160" width="16" height="6"/>' +
      '<rect x="330" y="166" width="16" height="6"/>' +
      '<rect x="360" y="172" width="16" height="6"/>' +
    '</g>' +
    '<g fill="rgba(255,255,255,.4)">' +
      '<rect x="90" y="164" width="90" height="2.5"/>' +
      '<rect x="150" y="176" width="120" height="2.5"/>' +
    '</g>' +
    '<g fill="none" stroke="rgba(8,12,32,.5)" stroke-width="2" stroke-linecap="round">' +
      '<path d="M120 62 q 8 -8 16 0 q 8 -8 16 0"/>' +
      '<path d="M170 48 q 7 -7 14 0 q 7 -7 14 0"/>' +
    '</g>',
  /* ─────────── 通用地标原型（新城市复用这些） ─────────── */

  /* 现代城市天际线 */
  "skyline":
    '<ellipse cx="200" cy="196" rx="185" ry="8" fill="rgba(255,255,255,.14)"/>' +
    '<g fill="rgba(8,12,32,.58)">' +
      '<rect x="22" y="122" width="32" height="78"/>' +
      '<rect x="60" y="98" width="36" height="102"/>' +
      '<rect x="102" y="134" width="26" height="66"/>' +
      '<rect x="134" y="70" width="42" height="130"/>' +
      '<polygon points="134,70 155,38 176,70"/>' +
      '<rect x="182" y="108" width="30" height="92"/>' +
      '<rect x="218" y="52" width="36" height="148"/>' +
      '<polygon points="218,52 236,24 254,52"/>' +
      '<rect x="260" y="114" width="28" height="86"/>' +
      '<rect x="294" y="88" width="36" height="112"/>' +
      '<rect x="336" y="126" width="30" height="74"/>' +
    '</g>' +
    '<g fill="rgba(255,255,255,.28)">' +
      '<rect x="68" y="110" width="8" height="10"/><rect x="84" y="110" width="8" height="10"/>' +
      '<rect x="68" y="130" width="8" height="10"/><rect x="84" y="130" width="8" height="10"/>' +
      '<rect x="142" y="86" width="9" height="11"/><rect x="158" y="86" width="9" height="11"/>' +
      '<rect x="142" y="108" width="9" height="11"/><rect x="158" y="108" width="9" height="11"/>' +
      '<rect x="226" y="70" width="9" height="11"/><rect x="240" y="70" width="9" height="11"/>' +
      '<rect x="226" y="94" width="9" height="11"/><rect x="240" y="94" width="9" height="11"/>' +
      '<rect x="302" y="102" width="8" height="10"/><rect x="316" y="102" width="8" height="10"/>' +
      '<rect x="302" y="124" width="8" height="10"/><rect x="316" y="124" width="8" height="10"/>' +
    '</g>',

  /* 古城街巷（马头墙连排） */
  "ancient-town":
    '<ellipse cx="200" cy="196" rx="185" ry="8" fill="rgba(255,255,255,.14)"/>' +
    '<g fill="rgba(8,12,32,.58)">' +
      '<rect x="28" y="150" width="60" height="50"/><polygon points="20,152 58,124 96,152"/>' +
      '<rect x="96" y="140" width="70" height="60"/><polygon points="88,142 131,110 174,142"/>' +
      '<rect x="174" y="150" width="58" height="50"/><polygon points="166,152 203,124 240,152"/>' +
      '<rect x="240" y="138" width="66" height="62"/><polygon points="232,140 273,108 314,140"/>' +
      '<rect x="314" y="152" width="56" height="48"/><polygon points="306,154 342,128 378,154"/>' +
      '<rect x="92" y="124" width="9" height="20"/><rect x="236" y="122" width="9" height="20"/>' +
      '<rect x="156" y="118" width="8" height="16"/>' +
    '</g>' +
    '<g fill="rgba(255,255,255,.26)">' +
      '<rect x="44" y="164" width="12" height="16"/><rect x="70" y="164" width="12" height="16"/>' +
      '<rect x="116" y="154" width="12" height="18"/><rect x="142" y="154" width="12" height="18"/>' +
      '<rect x="192" y="162" width="12" height="16"/><rect x="216" y="162" width="12" height="16"/>' +
      '<rect x="258" y="152" width="12" height="18"/><rect x="284" y="152" width="12" height="18"/>' +
      '<rect x="332" y="164" width="12" height="16"/><rect x="356" y="164" width="12" height="16"/>' +
    '</g>',

  /* 海岸线（栈桥 + 灯塔） */
  "coast":
    '<rect x="0" y="152" width="400" height="48" fill="rgba(255,255,255,.18)"/>' +
    '<path d="M0 200 L0 154 C 60 146 120 158 180 150 C 200 148 214 160 226 200 Z" fill="rgba(8,12,32,.5)"/>' +
    '<g fill="rgba(8,12,32,.62)">' +
      '<polygon points="300,152 307,84 327,84 334,152"/>' +
      '<polygon points="298,88 317,70 336,88"/>' +
    '</g>' +
    '<g stroke="rgba(8,12,32,.6)" stroke-width="3">' +
      '<path d="M40 176 L 168 176"/><path d="M54 176 L54 200"/><path d="M94 176 L94 200"/><path d="M134 176 L134 200"/>' +
    '</g>' +
    '<g fill="rgba(255,255,255,.34)">' +
      '<rect x="180" y="162" width="140" height="3"/>' +
      '<rect x="40" y="186" width="120" height="2.5"/>' +
      '<rect x="230" y="182" width="150" height="2.5"/>' +
    '</g>' +
    '<g fill="none" stroke="rgba(255,255,255,.4)" stroke-width="2.5" stroke-linecap="round">' +
      '<path d="M120 60 q 8 -8 16 0 q 8 -8 16 0"/>' +
    '</g>',

  /* 海岛（椰树 + 帆船） */
  "island":
    '<rect x="0" y="154" width="400" height="46" fill="rgba(255,255,255,.2)"/>' +
    '<path d="M0 200 L0 162 C 50 152 90 164 140 158 C 190 152 240 162 300 156 L400 160 L400 200 Z" fill="rgba(8,12,32,.42)"/>' +
    '<path d="M118 162 C 122 140 120 126 130 110" fill="none" stroke="rgba(8,12,32,.62)" stroke-width="4"/>' +
    '<g fill="rgba(8,12,32,.62)">' +
      '<polygon points="130,110 164,100 134,120"/>' +
      '<polygon points="130,110 96,102 126,120"/>' +
      '<polygon points="130,110 152,84 136,116"/>' +
      '<polygon points="130,110 108,86 124,116"/>' +
    '</g>' +
    '<g fill="rgba(8,12,32,.6)">' +
      '<polygon points="272,150 272,112 302,150"/>' +
      '<path d="M256 150 L318 150 L306 162 L268 162 Z"/>' +
    '</g>' +
    '<g fill="rgba(255,255,255,.34)">' +
      '<rect x="180" y="168" width="120" height="3"/>' +
      '<rect x="60" y="186" width="130" height="2.5"/>' +
      '<rect x="240" y="190" width="130" height="2.5"/>' +
    '</g>' +
    '<g fill="none" stroke="rgba(255,255,255,.4)" stroke-width="2.5" stroke-linecap="round">' +
      '<path d="M330 66 q 7 -7 14 0 q 7 -7 14 0"/>' +
    '</g>',

  /* 喀斯特峰林 */
  "karst":
    '<ellipse cx="200" cy="196" rx="185" ry="8" fill="rgba(255,255,255,.14)"/>' +
    '<g fill="rgba(8,12,32,.5)">' +
      '<path d="M28 200 C 28 152 52 118 76 118 C 100 118 124 152 124 200 Z"/>' +
      '<path d="M116 200 C 116 126 148 88 178 88 C 208 88 240 126 240 200 Z"/>' +
      '<path d="M232 200 C 232 154 252 122 274 122 C 296 122 316 154 316 200 Z"/>' +
      '<path d="M308 200 C 308 166 324 142 340 142 C 356 142 372 166 372 200 Z"/>' +
    '</g>' +
    '<path d="M0 200 L0 178 C 80 170 160 182 240 174 C 320 166 360 176 400 170 L400 200 Z" fill="rgba(255,255,255,.12)"/>',

  /* 云雾山峰（黄山 / 泰山 / 庐山这类） */
  "cloud-peak":
    '<circle cx="66" cy="48" r="16" fill="rgba(255,255,255,.16)"/>' +
    '<polygon points="52,200 132,100 212,200" fill="rgba(8,12,32,.34)"/>' +
    '<polygon points="118,200 212,52 302,200" fill="rgba(8,12,32,.6)"/>' +
    '<polygon points="192,86 212,52 232,86 222,96 202,96" fill="rgba(255,255,255,.5)"/>' +
    '<g fill="rgba(255,255,255,.22)">' +
      '<rect x="26" y="132" width="132" height="12" rx="6"/>' +
      '<rect x="214" y="148" width="150" height="12" rx="6"/>' +
      '<rect x="86" y="166" width="176" height="10" rx="5"/>' +
    '</g>' +
    '<polygon points="320,200 336,166 352,200" fill="rgba(8,12,32,.5)"/>',

  /* 圆润雪山（天山 / 长白山这类） */
  "snow-peak-2":
    '<circle cx="72" cy="50" r="18" fill="rgba(255,255,255,.16)"/>' +
    '<path d="M52 200 C 88 130 138 86 200 86 C 260 86 310 130 344 200 Z" fill="rgba(8,12,32,.6)"/>' +
    '<path d="M154 124 C 174 96 226 96 246 124 C 228 110 210 104 200 104 C 188 104 172 110 154 124 Z" fill="rgba(255,255,255,.55)"/>' +
    '<path d="M0 200 L0 172 C 70 164 140 176 220 168 C 300 160 350 172 400 166 L400 200 Z" fill="rgba(255,255,255,.14)"/>',

  /* 草原（蒙古包） */
  "grassland":
    '<path d="M0 200 L0 138 C 80 126 160 140 240 130 C 310 122 360 136 400 128 L400 200 Z" fill="rgba(8,12,32,.3)"/>' +
    '<g fill="rgba(8,12,32,.6)">' +
      '<path d="M110 176 C 110 154 130 140 150 140 C 170 140 190 154 190 176 Z"/>' +
      '<path d="M214 180 C 214 162 230 151 246 151 C 262 151 278 162 278 180 Z"/>' +
      '<path d="M300 182 C 300 168 312 159 324 159 C 336 159 348 168 348 182 Z"/>' +
    '</g>' +
    '<g fill="rgba(255,255,255,.26)">' +
      '<path d="M150 152 l 0 8"/><path d="M246 162 l 0 8"/><path d="M324 169 l 0 7"/>' +
    '</g>' +
    '<ellipse cx="200" cy="196" rx="185" ry="7" fill="rgba(255,255,255,.14)"/>',

  /* 沙丘与驼队 */
  "dune":
    '<path d="M0 200 L0 148 C 60 126 120 168 190 148 C 260 130 330 164 400 144 L400 200 Z" fill="rgba(8,12,32,.38)"/>' +
    '<path d="M0 200 L0 178 C 70 162 140 192 220 176 C 300 160 350 188 400 170 L400 200 Z" fill="rgba(8,12,32,.56)"/>' +
    '<g fill="rgba(8,12,32,.72)">' +
      '<path d="M108 172 c 2 -12 10 -16 16 -6 c 4 -10 14 -8 16 4 l 10 2 l 0 12 l -44 0 Z"/>' +
      '<path d="M166 176 c 2 -12 10 -16 16 -6 c 4 -10 14 -8 16 4 l 10 2 l 0 12 l -44 0 Z"/>' +
    '</g>' +
    '<circle cx="70" cy="52" r="17" fill="rgba(255,255,255,.16)"/>',

  /* 高原宫殿（布达拉宫样式） */
  "potala":
    '<path d="M0 200 L0 150 C 90 138 180 150 400 132 L400 200 Z" fill="rgba(8,12,32,.34)"/>' +
    '<g fill="rgba(255,255,255,.4)">' +
      '<rect x="112" y="104" width="176" height="96"/>' +
      '<rect x="96" y="132" width="208" height="68"/>' +
    '</g>' +
    '<g fill="rgba(8,12,32,.6)">' +
      '<rect x="140" y="84" width="52" height="34"/><polygon points="136,86 166,64 196,86"/>' +
      '<rect x="212" y="90" width="46" height="28"/><polygon points="208,92 235,72 262,92"/>' +
      '<rect x="88" y="150" width="232" height="50"/>' +
      '<g><rect x="124" y="160" width="14" height="20"/><rect x="166" y="160" width="14" height="20"/>' +
      '<rect x="222" y="160" width="14" height="20"/><rect x="264" y="160" width="14" height="20"/></g>' +
    '</g>' +
    '<g fill="rgba(255,255,255,.3)">' +
      '<rect x="150" y="116" width="10" height="14"/><rect x="174" y="116" width="10" height="14"/>' +
      '<rect x="220" y="118" width="10" height="14"/><rect x="244" y="118" width="10" height="14"/>' +
    '</g>',

  /* 滑雪场 */
  "ski":
    '<path d="M0 200 L0 178 C 80 148 180 96 400 44 L400 200 Z" fill="rgba(8,12,32,.5)"/>' +
    '<g stroke="rgba(8,12,32,.62)" stroke-width="2">' +
      '<path d="M30 172 L 372 56"/>' +
      '<path d="M30 186 L 372 70"/>' +
    '</g>' +
    '<g fill="rgba(8,12,32,.72)">' +
      '<rect x="140" y="122" width="18" height="13"/><rect x="256" y="82" width="18" height="13"/>' +
    '</g>' +
    '<g fill="rgba(8,12,32,.55)">' +
      '<polygon points="34,200 48,158 62,200"/>' +
      '<polygon points="330,200 348,150 366,200"/>' +
    '</g>',

  /* 水乡（拱桥 + 乌篷船） */
  "canal-town":
    '<ellipse cx="200" cy="196" rx="185" ry="8" fill="rgba(255,255,255,.16)"/>' +
    '<g fill="rgba(8,12,32,.56)">' +
      '<rect x="20" y="120" width="66" height="60"/><polygon points="12,122 53,96 94,122"/>' +
      '<rect x="94" y="110" width="72" height="70"/><polygon points="86,112 130,84 174,112"/>' +
      '<rect x="238" y="116" width="68" height="64"/><polygon points="230,118 272,90 314,118"/>' +
      '<rect x="312" y="124" width="62" height="56"/><polygon points="304,126 343,100 382,126"/>' +
    '</g>' +
    '<g fill="rgba(255,255,255,.26)">' +
      '<rect x="34" y="136" width="12" height="16"/><rect x="58" y="136" width="12" height="16"/>' +
      '<rect x="110" y="126" width="12" height="18"/><rect x="136" y="126" width="12" height="18"/>' +
      '<rect x="252" y="132" width="12" height="16"/><rect x="278" y="132" width="12" height="16"/>' +
      '<rect x="326" y="140" width="12" height="16"/><rect x="350" y="140" width="12" height="16"/>' +
    '</g>' +
    '<path d="M56 200 C 56 170 92 170 92 200" fill="none" stroke="rgba(8,12,32,.62)" stroke-width="6"/>' +
    '<path d="M276 190 q 22 -10 44 0 q -22 10 -44 0 Z" fill="rgba(8,12,32,.72)"/>' +
    '<g fill="rgba(255,255,255,.3)">' +
      '<rect x="100" y="188" width="150" height="2.5"/><rect x="20" y="196" width="330" height="2.5"/>' +
    '</g>',

  /* 花田与徽派村落 */
  "flower-field":
    '<path d="M0 200 L0 146 C 100 134 200 156 300 142 C 350 136 380 142 400 138 L400 200 Z" fill="rgba(8,12,32,.26)"/>' +
    '<g fill="rgba(8,12,32,.56)">' +
      '<rect x="248" y="118" width="54" height="34"/><polygon points="240,120 275,96 310,120"/>' +
      '<rect x="312" y="126" width="44" height="26"/><polygon points="306,128 334,108 362,128"/>' +
      '<rect x="244" y="96" width="8" height="22"/>' +
    '</g>' +
    '<g fill="rgba(255,255,255,.28)">' +
      '<rect x="86" y="182" width="230" height="3"/>' +
      '<rect x="40" y="192" width="320" height="3"/>' +
      '<rect x="120" y="172" width="160" height="2.5"/>' +
    '</g>' +
    '<g fill="rgba(255,255,255,.5)">' +
      '<circle cx="60" cy="166" r="3"/><circle cx="92" cy="158" r="2.6"/><circle cx="126" cy="168" r="3"/>' +
      '<circle cx="158" cy="152" r="2.6"/><circle cx="192" cy="164" r="3"/><circle cx="150" cy="184" r="2.6"/>' +
      '<circle cx="206" cy="150" r="2.6"/><circle cx="78" cy="188" r="2.6"/>' +
    '</g>',

  /* 竹海 */
  "bamboo":
    '<ellipse cx="200" cy="196" rx="185" ry="8" fill="rgba(255,255,255,.14)"/>' +
    '<g stroke="rgba(8,12,32,.52)" stroke-width="4" fill="none" stroke-linecap="round">' +
      '<path d="M60 200 C 58 150 64 110 60 70"/>' +
      '<path d="M104 200 C 102 156 108 118 104 84"/>' +
      '<path d="M150 200 C 148 144 154 100 150 58"/>' +
      '<path d="M200 200 C 198 150 204 108 200 66"/>' +
      '<path d="M248 200 C 246 146 252 102 248 62"/>' +
      '<path d="M296 200 C 294 152 300 112 296 74"/>' +
      '<path d="M344 200 C 342 158 348 122 344 88"/>' +
    '</g>' +
    '<g fill="rgba(8,12,32,.55)">' +
      '<polygon points="60,96 24,84 58,110"/>' +
      '<polygon points="104,110 70,96 102,124"/>' +
      '<polygon points="150,84 112,70 148,98"/>' +
      '<polygon points="200,92 164,76 198,106"/>' +
      '<polygon points="248,88 212,72 246,102"/>' +
      '<polygon points="296,100 262,86 294,114"/>' +
      '<polygon points="344,110 310,96 342,124"/>' +
    '</g>',

  /* 宫殿庙宇（屋脊群） */
  "temple":
    '<ellipse cx="200" cy="196" rx="185" ry="8" fill="rgba(255,255,255,.14)"/>' +
    '<g fill="rgba(8,12,32,.56)">' +
      '<rect x="72" y="166" width="256" height="34"/>' +
      '<rect x="104" y="138" width="192" height="30"/>' +
      '<polygon points="88,140 200,96 312,140"/>' +
      '<polygon points="150,100 200,74 250,100"/>' +
      '<rect x="188" y="62" width="24" height="14"/>' +
      '<rect x="196" y="44" width="8" height="18"/>' +
    '</g>' +
    '<g fill="rgba(255,255,255,.28)">' +
      '<rect x="116" y="148" width="14" height="20"/><rect x="150" y="148" width="14" height="20"/>' +
      '<rect x="240" y="148" width="14" height="20"/><rect x="274" y="148" width="14" height="20"/>' +
      '<rect x="182" y="176" width="16" height="24"/><rect x="212" y="176" width="16" height="24"/>' +
    '</g>'
};
