(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{329:function(t,e,r){"use strict";var n=r(2),o=r(3),c=r(56),d=r(220),v=r(219),l=r(4),f=RangeError,m=String,x=Math.floor,_=o(v),h=o("".slice),D=o(1..toFixed),C=function(t,e,r){return 0===e?r:e%2==1?C(t,e-1,r*t):C(t*t,e/2,r)},w=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=x(n/1e7)},y=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=x(r/t),r=r%t*1e7},k=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:l((function(){return"0.000"!==D(8e-5,3)||"1"!==D(.9,0)||"1.25"!==D(1.255,2)||"1000000000000000128"!==D(0xde0b6b3a7640080,0)}))||!l((function(){D({})}))},{toFixed:function(t){var e,r,n,o,v=d(this),l=c(t),data=[0,0,0,0,0,0],x="",D="0";if(l<0||l>20)throw new f("Incorrect fraction digits");if(v!=v)return"NaN";if(v<=-1e21||v>=1e21)return m(v);if(v<0&&(x="-",v=-v),v>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(v*C(2,69,1))-69)<0?v*C(2,-e,1):v/C(2,e,1),r*=4503599627370496,(e=52-e)>0){for(w(data,0,r),n=l;n>=7;)w(data,1e7,0),n-=7;for(w(data,C(10,n,1),0),n=e-1;n>=23;)y(data,1<<23),n-=23;y(data,1<<n),w(data,1,1),y(data,2),D=k(data)}else w(data,0,r),w(data,1<<-e,0),D=k(data)+_("0",l);return D=l>0?x+((o=D.length)<=l?"0."+_("0",l-o)+D:h(D,0,o-l)+"."+h(D,o-l)):x+D}})},334:function(t,e,r){var content=r(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(96).default)("40cf0a0d",content,!0,{sourceMap:!1})},337:function(t,e,r){"use strict";r(334)},338:function(t,e,r){var n=r(95)((function(i){return i[1]}));n.push([t.i,'.movie-detail[data-v-46769f11]{background-color:#f5f5f5;min-height:100vh}.header-section[data-v-46769f11]{background-position:50%;background-size:cover;color:#fff;height:600px;position:relative}.header-section[data-v-46769f11]:before{background:linear-gradient(90deg,rgba(0,0,0,.9) 20%,rgba(0,0,0,.6) 50%,rgba(0,0,0,.4));bottom:0;content:"";left:0;position:absolute;right:0;top:0}.header-content[data-v-46769f11]{align-items:center;display:flex;gap:40px;height:100%;margin:0 auto;max-width:1200px;padding:40px;position:relative}.poster[data-v-46769f11]{flex-shrink:0}.poster img[data-v-46769f11]{border-radius:12px;box-shadow:0 8px 16px rgba(0,0,0,.3);width:300px}.basic-info[data-v-46769f11]{flex:1}.basic-info h1[data-v-46769f11]{font-size:2.5rem;margin-bottom:10px}.original-title[data-v-46769f11]{font-size:1.2rem;margin-bottom:20px;opacity:.8}.meta-info[data-v-46769f11]{display:flex;gap:20px;margin-bottom:20px}.rating[data-v-46769f11]{align-items:center;color:gold;display:flex;gap:5px}.genres[data-v-46769f11]{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:20px}.genre-tag[data-v-46769f11]{background:hsla(0,0%,100%,.2);border-radius:20px;font-size:.9rem;padding:5px 15px}.tagline[data-v-46769f11]{font-size:1.2rem;font-style:italic;opacity:.9}.content-section[data-v-46769f11]{margin:-60px auto 0;max-width:1200px;padding:0 40px 40px;position:relative}.main-content[data-v-46769f11]{background:#fff;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,.1);padding:40px}.cast-section[data-v-46769f11]{margin-bottom:40px}.cast-grid[data-v-46769f11]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:20px;gap:20px}.cast-card[data-v-46769f11]{background:#f8f8f8;border-radius:8px;overflow:hidden;transition:transform .2s}.cast-card[data-v-46769f11]:hover{transform:translateY(-5px)}.cast-image[data-v-46769f11]{height:250px;overflow:hidden;width:100%}.cast-image img[data-v-46769f11]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.cast-info[data-v-46769f11]{padding:15px}.cast-info h3[data-v-46769f11]{color:#333;font-size:1rem;margin-bottom:5px}.cast-info p[data-v-46769f11]{color:#666;font-size:.9rem}.overview[data-v-46769f11]{margin-bottom:40px}h2[data-v-46769f11]{color:#333;font-size:1.5rem;margin-bottom:20px}.overview p[data-v-46769f11]{color:#555;line-height:1.7}.info-grid[data-v-46769f11]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:20px;gap:20px;margin-bottom:40px}.info-item[data-v-46769f11]{background:#f8f8f8;border-radius:8px;padding:20px}.info-item h3[data-v-46769f11]{color:#666;font-size:.9rem;margin-bottom:8px}.info-item p[data-v-46769f11]{color:#333;font-size:1.1rem}.companies-grid[data-v-46769f11]{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));grid-gap:20px;gap:20px}.company[data-v-46769f11]{align-items:center;background:#f8f8f8;border-radius:8px;display:flex;height:100px;justify-content:center;padding:20px}.company img[data-v-46769f11]{max-height:80px;max-width:100%;-o-object-fit:contain;object-fit:contain}.company-name[data-v-46769f11]{color:#666;text-align:center}.similar-grid[data-v-46769f11]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:20px;gap:20px}.similar-grid img[data-v-46769f11]{border-radius:8px;transition:transform .2s;width:100%}.similar-grid img[data-v-46769f11]:hover{transform:scale(1.05)}@media (max-width:768px){.header-content[data-v-46769f11]{flex-direction:column;padding:20px}.poster img[data-v-46769f11]{width:200px}.basic-info h1[data-v-46769f11]{font-size:2rem}.content-section[data-v-46769f11]{padding:0 20px 20px}.main-content[data-v-46769f11]{padding:20px}.cast-grid[data-v-46769f11]{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}.cast-image[data-v-46769f11]{height:200px}}',""]),n.locals={},t.exports=n},345:function(t,e,r){"use strict";r.r(e);r(55),r(26),r(329);var n=r(10),o=(r(54),r(34),r(15),r(119)),c={data:function(){return{receivedData:null,similarData:null,casterData:null}},computed:{filteredCastData:function(){return this.casterData?this.casterData.filter((function(t){return t.profile_path})).slice(0,10):[]},filterdSimilarData:function(){return this.similarData?this.similarData.filter((function(t){return t.poster_path})).slice(0,15):[]}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.params.id,e.prev=1,e.next=4,Object(o.c)("tv","한국",r);case 4:return n=e.sent,t.receivedData=n.data,e.next=8,Object(o.j)("tv","한국",r);case 8:return c=e.sent,t.similarData=c.data.results,e.next=12,Object(o.a)("tv","한국",r);case 12:d=e.sent,t.casterData=d.data.cast,console.log(t.receivedData),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),console.error("Error fetching movie details:",e.t0);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})))()}},d=(r(337),r(53)),component=Object(d.a)(c,(function(){var t,e,r,n=this,o=n._self._c;return n.receivedData?o("div",{staticClass:"movie-detail"},[o("div",{staticClass:"header-section",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(n.receivedData.backdrop_path,")")}},[o("div",{staticClass:"header-content"},[o("div",{staticClass:"poster"},[o("img",{attrs:{src:"https://image.tmdb.org/t/p/w500".concat(n.receivedData.poster_path),alt:n.receivedData.name}})]),n._v(" "),o("div",{staticClass:"basic-info"},[o("h1",[n._v(n._s(n.receivedData.name))]),n._v(" "),n.receivedData.original_name!==n.receivedData.name?o("p",{staticClass:"original-title"},[n._v("\n\t\t\t\t\t"+n._s(n.receivedData.original_name)+"\n\t\t\t\t")]):n._e(),n._v(" "),o("div",{staticClass:"meta-info"},[o("span",{staticClass:"rating"},[o("i",{staticClass:"fas fa-star"}),n._v("\n\t\t\t\t\t\t"+n._s(null===(t=n.receivedData.vote_average)||void 0===t?void 0:t.toFixed(1))+"\n\t\t\t\t\t")]),n._v(" "),o("span",{staticClass:"year"},[n._v(n._s(null===(e=n.receivedData.release_date)||void 0===e?void 0:e.slice(0,4)))]),n._v(" "),n.receivedData.runtime?o("span",{staticClass:"runtime"},[n._v("\n\t\t\t\t\t\t"+n._s(Math.floor(n.receivedData.runtime/60))+"시간\n\t\t\t\t\t\t"+n._s(n.receivedData.runtime%60)+"분\n\t\t\t\t\t")]):n._e()]),n._v(" "),o("div",{staticClass:"genres"},n._l(n.receivedData.genres,(function(t){return o("span",{key:t.id,staticClass:"genre-tag"},[n._v("\n\t\t\t\t\t\t"+n._s(t.name)+"\n\t\t\t\t\t")])})),0),n._v(" "),n.receivedData.tagline?o("div",{staticClass:"tagline"},[n._v('\n\t\t\t\t\t"'+n._s(n.receivedData.tagline)+'"\n\t\t\t\t')]):n._e()])])]),n._v(" "),o("div",{staticClass:"content-section"},[o("div",{staticClass:"main-content"},[o("section",{staticClass:"cast-section"},[o("h2",[n._v("주요 출연진")]),n._v(" "),o("div",{staticClass:"cast-grid"},n._l(n.filteredCastData,(function(t){return o("div",{key:t.id,staticClass:"cast-card"},[o("nuxt-link",{attrs:{to:"/movie/castermovie/".concat(t.name)}},[o("div",{staticClass:"cast-image"},[o("img",{attrs:{src:"https://image.tmdb.org/t/p/w185".concat(t.profile_path),alt:t.name}})]),n._v(" "),o("div",{staticClass:"cast-info"},[o("h3",[n._v(n._s(t.name))]),n._v(" "),o("p",[n._v(n._s(t.character))])])])],1)})),0)]),n._v(" "),o("section",{staticClass:"overview"},[o("h2",[n._v("줄거리")]),n._v(" "),o("p",[n._v(n._s(n.receivedData.overview))])]),n._v(" "),o("section",{staticClass:"additional-info"},[o("div",{staticClass:"info-grid"},[o("div",{staticClass:"info-item"},[o("h3",[n._v("상태")]),n._v(" "),o("p",[n._v("\n\t\t\t\t\t\t\t"+n._s("Ended"===n.receivedData.status?"방영 종료":"방영 예정")+"\n\t\t\t\t\t\t")])]),n._v(" "),o("div",{staticClass:"info-item"},[o("h3",[n._v("개봉일")]),n._v(" "),o("p",[n._v(n._s(n.receivedData.first_air_date))])]),n._v(" "),o("div",{staticClass:"info-item"},[o("h3",[n._v("제작비")]),n._v(" "),o("p",[n._v("$"+n._s((n.receivedData.budget||0).toLocaleString()))])]),n._v(" "),o("div",{staticClass:"info-item"},[o("h3",[n._v("수익")]),n._v(" "),o("p",[n._v("$"+n._s((n.receivedData.revenue||0).toLocaleString()))])])])]),n._v(" "),null!==(r=n.receivedData.production_companies)&&void 0!==r&&r.length?o("section",{staticClass:"production-companies"},[o("h2",[n._v("제작사")]),n._v(" "),o("div",{staticClass:"companies-grid"},n._l(n.receivedData.production_companies,(function(t){return o("div",{key:t.id,staticClass:"company"},[t.logo_path?o("img",{attrs:{src:"https://image.tmdb.org/t/p/w200".concat(t.logo_path),alt:t.name}}):o("span",{staticClass:"company-name"},[n._v(n._s(t.name))])])})),0)]):n._e(),n._v(" "),o("section",[o("h2",[n._v("비슷한 TV 시리즈")]),n._v(" "),o("div",{staticClass:"similar-grid"},n._l(n.filterdSimilarData,(function(t){return o("div",{key:t.id},[o("nuxt-link",{attrs:{to:"/tv/detail/".concat(t.id)}},[o("img",{attrs:{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:t.title}})])],1)})),0)])])])]):n._e()}),[],!1,null,"46769f11",null);e.default=component.exports}}]);